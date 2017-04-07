export default class ActionBase {
  /**
   * The constructor creates an ActionBase object. But you shouldn't use it
   * directly because the ActionBase class is abstract.
   */
  constructor() {
    this._priority = 0;
  }

  /**
   * Returns a default priority of 0 for this action. Derived classes
   * override this method if they want a different default priority.
   *
   */
  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  /**
   * This method does nothing. Some derived classes override this method
   * to perform actions when the action is added to an emitter.
   *
   * @param emitter The Emitter that the Action was added to.
   *
   */
  addedToEmitter(emitter) {
  }

  /**
   * This method does nothing. Some derived classes override this method
   * to perform actions when the action is removed from the emitter.
   *
   * @param emitter The Emitter that the Action was removed from.
   *
   */
  removedFromEmitter(emitter) {
  }

  /**
   * This method does nothing. All derived classes override this method
   * to update each particle every frame.
   *
   * @param emitter The Emitter that created the particle.
   * @param particle The particle to be updated.
   * @param time The duration of the frame - used for time based updates.
   *
   */
  update(emitter, particle, time) {
  }
}
