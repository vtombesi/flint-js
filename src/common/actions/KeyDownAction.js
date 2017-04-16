import ActionBase from './ActionBase';

export default class KeyDownAction extends ActionBase {
  constructor(action= null, keyCode = 0, stage = null) {
    super();
    this._action = action;
    this._keyCode = keyCode;
    this._isDown = false;
    this._stage = stage;
    this.createListeners();
  }

  createListeners() {
    if(this._stage) {
      this._stage.addEventListener(KeyboardEvent.KEYthis._DOWN, this.keyDownListener.bind(this), false, 0, true);
      this._stage.addEventListener(KeyboardEvent.KEYthis._UP, this.keyUpListener.bind(this), false, 0, true);
    }
  }

  keyDownListener(ev) {
    if(ev.keyCode == this._keyCode) {
      this._isDown = true;
    }
  }
  keyUpListener(ev) {
    if(ev.keyCode == this._keyCode) {
      this._isDown = false;
    }
  }

  get stage() {
    return this._stage;
  }
  set stage(value) {
    this._stage = value;
    createListeners();
  }

  get action() {
    return this._action;
  }
  set action(value) {
    this._action = value;
  }

  get keyCode() {
    return this._keyCode;
  }
  set keyCode(value) {
    this._keyCode = value;
  }

  get priority() {
    return this._action.priority;
  }
  set priority(value) {
    this._action.priority = value;
  }

  addedToEmitter(emitter) {
    this._action.addedToEmitter(emitter);
  }

  removedFromEmitter(emitter) {
    this._action.removedFromEmitter(emitter);
  }

  update(emitter, particle, time) {
    if(this._isDown) {
      this._action.update(emitter, particle, time);
    }
  }

}
