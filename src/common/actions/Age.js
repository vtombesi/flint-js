import ActionBase from './ActionBase';
import { Linear, Bounce } from '../easing';

export default class Age extends ActionBase {

  /**
   * The constructor creates an Age action for use by an emitter.
   * To add an Age to all particles created by an emitter, use the
   * emitter's addAction method.
   *
   * @param easing an easing function to use to modify the
   * energy curve over the lifetime of the particle. The default
   * null produces a linear response with no easing.
   *
   * @see org.flintparticles.common.emitters.Emitter#addAction()
   */
  constructor(easing) {
    if ( easing == null ) {
      this._easing = Linear.easeNone;
    } else {
      this._easing = easing;
    }
  }

  /**
   * The easing function used to modify the energy over the
   * lifetime of the particle.
   */
  get easing() {
    return this._easing;
  }
  set easing( value ) {
    this._easing = value;
  }

  /**
   * Sets the energy of the particle based on its age and the easing function.
   *
   * <p>This method is called by the emitter and need not be called by the
   * user</p>
   *
   * @param emitter The Emitter that created the particle.
   * @param particle The particle to be updated.
   * @param time The duration of the frame - used for time based updates.
   *
   * @see org.flintparticles.common.actions.Action#update()
   */
  update(emitter, particle, time) {
    particle.age += time;
    if(particle.age >= particle.lifetime) {
      particle.energy = 0;
      particle.isDead = true;
    } else {
      particle.energy = _easing( particle.age, 1, -1, particle.lifetime );
    }
  }

}
