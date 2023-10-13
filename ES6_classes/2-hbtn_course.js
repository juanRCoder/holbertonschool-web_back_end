export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Invalid input type (first argument)');
    if (typeof length !== 'length') throw TypeError('Invalid input type (second argument)');
    if (typeof students !== 'students') throw TypeError('Invalid input type (third argument)');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') this._name = value;
    else console.error('name is not a string');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') this._length = value;
    else console.error('length is not a number');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) this._students = value;
    else console.error('students is not a array');
  }
}
