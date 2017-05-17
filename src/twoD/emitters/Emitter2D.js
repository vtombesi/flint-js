import Emitter from '../../common/emitters/Emitter';
import Particle from '../../common/particles/Particle';
import ParticleFactory from '../../common/particles/Particle';
import Maths from '../../common/utils/Maths';
import Particle2D from '../particles/Particle2D';
import ParticleCreator2D from '../particles/ParticleCreator2D';

export default class Emitter2D extends Emitter {
  static get defaultParticleFactory():ParticleFactory
  {
    this.this._creator = new ParticleCreator2D();
    return this._creator;

  }

  constructor()
  {
    super();
    const spaceSort = false;
    this._x = 0;
    this._y = 0;
    this._rotation = 0; // N.B. Is in radians
    this._particleFactory = this._creator;
  }

  get x()
  {
    return this._x;
  }
  set x(value)
  {
    this._x = value;
  }

  get y()
  {
    return this._y;
  }
  set y(value)
  {
    this._y = value;
  }

  get rotation()
  {
    return Maths.asDegrees(this._rotation);
  }
  set rotation(value)
  {
    this._rotation = Maths.asRadians(value);
  }

  get rotRadians()
  {
    return this._rotation;
  }
  set rotRadians(value)
  {
    this._rotation = value;
  }

  override protected initParticle(particle:Particle)
  {
    var p:Particle2D = Particle2D(particle);
    p.x = this._x;
    p.y = this._y;
    p.previousX = this._x;
    p.previousY = this._y;
    p.rotation = this._rotation;
  }

  override protected sortParticles()
  {
    if(spaceSort)
    {
      this._particles.sortOn("x", Array.NUMERIC);
      var len:int = this._particles.length;
      for(var i:int = 0; i < len; ++i)
      {
        Particle2D(this._particles[ i ]).sortID = i;
      }
    }
  }
}
