import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, range);
    this._range = range;
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
