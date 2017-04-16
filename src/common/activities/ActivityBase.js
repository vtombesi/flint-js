import Activity from './Activity';

export default class ActivityBase extends Activity {
  constructor() {
    super();
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

  initialize(emitter) {
  }

  update(emitter, time) {
  }
}
