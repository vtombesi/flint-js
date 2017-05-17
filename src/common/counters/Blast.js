import Counter from './Counter';

export default class Blast extends Counter {
  constructor(startCount = 0) {
    super();
    this._done = false;
    this._startCount = startCount;
  }

  get startCount() {
    return this._startCount;
  }
  set startCount(value) {
    this._startCount = value;
  }

  stop() {
  }

  resume() {
  }

  startEmitter(emitter) {
    this._done = true;
    emitter.dispatchCounterComplete();
    return this._startCount;
  }

  updateEmitter(emitter, time) {
    return 0;
  }

  get complete() {
    return this._done;
  }

  get running() {
    return false;
  }
}
