import ActionBase from './ActionBase';

export default class ChangeCollisionRadius extends ActionBase {
  constructor(startRadius = 1, endRadius = 1) {
    super();
    this._diffRadius = startRadius - endRadius;
    this._endRadius = endRadius;
  }

  get startRadius() {
    return this._endRadius + this._diffRadius;
  }
  set startRadius(value) {
    this._diffRadius = value - this._endRadius;
  }

  get endRadius() {
    return this._endRadius;
  }
  set endRadius(value) {
    this._diffRadius = this._endRadius + this._diffRadius - value;
    this._endRadius = value;
  }

  update(emitter, particle, time) {
    particle.collisionRadius = this._endRadius + this._diffRadius * particle.energy;
  }
}
