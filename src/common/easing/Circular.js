export default class Circular {
  static easeIn(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  static easeOut(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  static easeInOut(t, b, c, d) {
    if ((t === t / d * 0.5) < 1) {
      return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
}
