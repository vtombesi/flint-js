import


export default class Emitter extends EventDispatcher {

  constructor() {

    this._particleFactory = null;
    this._actions = []; // new Vector.<Action>();
    this._initializers = []; // new Vector.<Initializer>();
    this._activities = []; // new Vector.<Activity>();
    this._counter = []; // new ZeroCounter();

  }

  get maximumFrameTime() {
    return this._maximumFrameTime;
  }
  set maximumFrameTime(i) {
    this._maximumFrameTime = value;
  }

  get initializers() {}
  set initializers(a) {}

  addInitializer(initializer) {

  }
  removeInitializer(initializer) {

  }
  hasInitializer() {

  }
  hasInitializerOfType(type) {

  }

  get actions() {}
  set actions(value) {}
  addAction(action) {

  }
  removeAction() {

  }
  hasAction() {

  }
  hasActionOfType() {

  }

  get activities() {}
  set activities() {}
  addActivity() {}
  removeActivity() {}
  hasActivity() {}
  hasActivityOfType() {}

  get counter() {}
  set counter(value) {}

  /* other methods & properties */

  dispatchCounterComplete() {}

  get useInternalTick() {}
  set useInternalTick() {}

  get fixedFrameTime() {}
  set fixedFrameTime() {}

  get running() {}

  get particleFactory() {}
  set particleFactory() {}

  get particles() {}
  set particles() {}

  get particlesArray() {}

  createParticle() {}

  initParticle() {}

  addParticle() {}
  removeParticle() {}

  addParticles() {}
  removeParticles() {}

  killAllParticles() {}

  start() {}

  updateEventListener() {}

  update(time) {}

  /* utils */

  sortParticles() {}

  pause() {}

  resume() {}

  stop() {}

  runAhead() {}

}
