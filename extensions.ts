declare global {
  interface Array<T> {
    odd: () => T[];
    even: () => T[];
  }
}

Array.prototype.odd = function () {
  return this.filter((_, index) => index % 2 === 1);
}

Array.prototype.even = function () {
  return this.filter((_, index) => index % 2 === 0);
}

export {}