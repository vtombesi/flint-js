export default class Cubic {
  static easeIn(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  }

  static easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  static easeInOut(t, b, c, d) {
    if ((t /= d * 0.5) < 1) {
      return c * 0.5 * t * t * t + b;
    }
    return c * 0.5 * ((t -= 2) * t * t + 2) + b;
  }
}
