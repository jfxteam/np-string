'use strict';

module.exports = class extends String {
	camelize(){
		let value = this.valueOf();
		return value.charAt(0).toUpperCase() + value.substring(1, value.length);
	}
}