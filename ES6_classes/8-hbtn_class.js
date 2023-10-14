export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw TypeError('size must be a number');
    if (typeof location !== 'string') throw TypeError('location must be a string');
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
