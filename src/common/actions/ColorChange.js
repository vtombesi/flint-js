import ActionBase from './ActionBase';

export default class ColorChange extends ActionBase {
  constructor(startColor = 0xFFFFFF, endColor = 0xFFFFFF) {
    super();
    this._startColor = startColor;
    this._endColor = endColor;
  }

  get startColor() {
    return this._startColor;
  }
  set startColor(value) {
    this._startColor = value;
  }

  get endColor() {
    return this._endColor;
  }
  set endColor(value) {
    this._endColor = value;
  }

  update(emitter, particle, time) {
    particle.color = interpolateColors(this._startColor, this._endColor, particle.energy);
  }
}
