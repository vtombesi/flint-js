const debug = process.env.NODE_ENV !== "production";

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const cssExtractor = (!isDevServer) ? new ExtractTextPlugin('./assets/styles.css') : new ExtractTextPlugin('styles.css');
const htmlExtractor = new ExtractTextPlugin('index.html');
const bowerResolver = new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main']));

module.exports = {

    context: path.resolve('src'),
    devtool: debug ? "inline-sourcemap" : null,

    entry: {
        app: './index.js',
    },

    output: {
        path: path.resolve('dist'),
        filename: "flint.js"
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        cssExtractor,
        htmlExtractor,
        bowerResolver
    ],

    plugins: debug ? [
        new CleanWebpackPlugin(['dist']),
    ] : [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],

    devServer: {
        contentBase: './src/',
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
            }
        ],
    },

    eslint: {
        configFile: '.eslintrc',
    },

};
