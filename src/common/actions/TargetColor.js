import ActionBase from './ActionBase';

export default class TargetColor extends ActionBase {
  constructor(targetColor= 0xFFFFFF, rate = 0.1) {
    super();
    this._red = (targetColor >>> 16) & 255;
    this._green = (targetColor >>> 8) & 255;
    this._blue = (targetColor) & 255;
    this._alpha = (targetColor >>> 24) & 255;
    this._rate = rate;
  }

  get targetColor() {
    return (this._alpha << 24) | (this._red << 16) | (this._green << 8) | this._blue;
  }
  set targetColor(value) {
    this._red = (value >>> 16) & 255;
    this._green = (value >>> 8) & 255;
    this._blue = (value) & 255;
    this._alpha = (value >>> 24) & 255;
  }

  get rate() {
    return this._rate;
  }
  set rate(value) {
    this._rate = value;
  }

  update(emitter, particle, time) {
    if(! particle.dictionary[this]) {
      particle.dictionary[this] = new ColorFloat(particle.color);
    }
    var dicObj = new ColorFloat(particle.dictionary[this]);

    var inv = this._rate * time;
    if(inv > 1) {
      inv = 1;
    }
    var ratio = 1 - inv;

    dicObj.red = dicObj.red * ratio + this._red * inv;
    dicObj.green = dicObj.green * ratio + this._green * inv;
    dicObj.blue = dicObj.blue * ratio + this._blue * inv;
    dicObj.alpha = dicObj.alpha * ratio + this._alpha * inv;
    particle.color = dicObj.getColor();
  }
}

export class ColorFloat {
  ColorFloat(color)
  {
    this.red = (color >>> 16) & 255;
    this.green = (color >>> 8) & 255;
    this.blue = (color) & 255;
    this.alpha = (color >>> 24) & 255;
  }

  getColor()
  {
    return (Math.round(alpha) << 24) | (Math.round(red) << 16) | (Math.round(green) << 8) | Math.round(blue);
  }
}
