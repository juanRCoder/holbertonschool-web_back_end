export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') this._name = value;
    else throw TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') this._length = value;
    else throw TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) this._students = value;
    else throw TypeError('Students must be an array');
  }
}
