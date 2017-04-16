import ActionBase from './ActionBase';

export default class ScaleImage extends ActionBase {
  constructor(startScale = 1, endScale = 1) {
    super();
    this._diffScale = startScale - endScale;
    this._endScale = endScale;
  }

  get startScale() {
    return this._endScale + this._diffScale;
  }
  set startScale(value) {
    this._diffScale = value - this._endScale;
  }

  get endScale() {
    return this._endScale;
  }
  set endScale(value) {
    this._diffScale = this._endScale + this._diffScale - value;
    this._endScale = value;
  }

  update(emitter, particle, time) {
    particle.scale = this._endScale + this._diffScale * particle.energy;
  }
}
