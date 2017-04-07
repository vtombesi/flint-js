export default class Elastic
{
  static easeIn(t, b, c, d, a = 0, p = 0)
  {
    if (t == 0)
    {
      return b;
    }
    if ((t /= d) == 1)
    {
      return b + c;
    }
    if (!p)
    {
      p = d * 0.3;
    }
    var s;
    if (!a || a < Math.abs(c))
    {
      a = c;
      s = p * 0.25;
    }
    else
    {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return -(a * Math.pow(2, 10 * (--t)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  }

  static easeOut(t, b, c, d, a = 0, p = 0)
  {
    if (t == 0)
    {
      return b;
    }
    if ((t /= d) == 1)
    {
      return b + c;
    }
    if (!p)
    {
      p = d * 0.3;
    }
    var s;
    if (!a || a < Math.abs(c))
    {
      a = c;
      s = p * 0.25;
    }
    else
    {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  }

  static easeInOut(t, b, c, d, a = 0, p = 0)
  {
    if (t == 0)
    {
      return b;
    }
    if ((t /= d * 0.5) == 2)
    {
      return b + c;
    }
    if (!p)
    {
      p = d * (0.3 * 1.5);
    }
    var s;
    if (!a || a < Math.abs(c))
    {
      a = c;
      s = p * 0.25;
    }
    else
    {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    if (t < 1)
    {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }

    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }
}
