import ActionBase from './ActionBase';

export default class ChangeMass extends ActionBase {
  constructor(startMass = 1, endMass = 1) {
    super();
    this._diffMass = startMass - endMass;
    this._endMass = endMass;
  }

  get startMass() {
    return this._endMass + this._diffMass;
  }
  set startMass(value) {
    this._diffMass = value - this._endMass;
  }

  get endMass() {
    return this._endMass;
  }
  set endMass(value) {
    this._diffMass = this._endMass + this._diffMass - value;
    this._endMass = value;
  }

  update(emitter, particle, time) {
    particle.mass = this._endMass + this._diffMass * particle.energy;
  }
}
