import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (!(currency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') this._amount = value;
    else throw TypeError('amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if ((value instanceof Currency)) this._currency = value;
    else throw TypeError('currency must be an instance of Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
