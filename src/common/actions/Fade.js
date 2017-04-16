import ActionBase from './ActionBase';

export default class Fade extends ActionBase {
  constructor(startAlpha = 1, endAlpha = 0) {
    super();
    this.priority = -5;
    this._diffAlpha = startAlpha - endAlpha;
    this._endAlpha = endAlpha;
  }

  get startAlpha() {
    return this._endAlpha + this._diffAlpha;
  }
  set startAlpha(value) {
    this._diffAlpha = value - this._endAlpha;
  }

  get endAlpha() {
    return this._endAlpha;
  }
  set endAlpha(value) {
    this._diffAlpha = _endAlpha + this._diffAlpha - value;
    this._endAlpha = value;
  }

  update(emitter, particle, time) {
    var alpha = this._endAlpha + this._diffAlpha * particle.energy;
    particle.color = (particle.color & 0xFFFFFF) | (Math.round(alpha * 255) << 24);
  }
}
