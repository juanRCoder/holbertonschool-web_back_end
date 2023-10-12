export default class ClassRoom {
	constructor(maxStudentsSize){
		if (typeof maxStudentsSize !== 'number'){
			throw new TypeError('Length must be a number');
		}
		this._maxStudentsSize = maxStudentsSize;
	}
}
