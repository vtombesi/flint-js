import ActivityBase from './ActivityBase';

export default class UpdateOnFrame extends ActivityBase {
  constructor(frameUpdatable) {
    super();
    this.action = frameUpdatable;
  }

  update(emitter, time) {
    this.action.frameUpdate(emitter, time);
  }
}
