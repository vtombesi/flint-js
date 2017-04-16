export default class ActionBase {
  constructor() {
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  addedToEmitter(emitter) {
  }

  removedFromEmitter(emitter) {
  }

  update(emitter, particle, time) {
  }
}
