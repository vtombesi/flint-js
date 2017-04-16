import ActionBase from './ActionBase';

export default class TargetScale extends ActionBase {
  constructor(targetScale= 1, rate = 0.1) {
    super();
    this._scale = targetScale;
    this._rate = rate;
  }

  get targetScale() {
    return this._scale;
  }
  set targetScale(value) {
    this._scale = value;
  }

  get rate() {
    return this._rate;
  }
  set rate(value) {
    this._rate = value;
  }

  update(emitter, particle, time) {
    particle.scale += (this._scale - particle.scale) * this._rate * time;
  }
}
