export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') this._sqft = value;
    else throw TypeError('sqft must be a number');
  }
}
