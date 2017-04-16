import ActionBase from './ActionBase';
import { Linear, Bounce } from '../easing';

export default class Age extends ActionBase {

  constructor(easing) {
    super();
    if (easing == null) {
      this._easing = Linear.easeNone;
    } else {
      this._easing = easing;
    }
  }

  get easing() {
    return this._easing;
  }
  set easing(value) {
    this._easing = value;
  }

  update(emitter, particle, time) {
    particle.age += time;
    if (particle.age >= particle.lifetime) {
      particle.energy = 0;
      particle.isDead = true;
    } else {
      particle.energy = this._easing(particle.age, 1, -1, particle.lifetime);
    }
  }

}
