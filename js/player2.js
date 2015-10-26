
let Player2 = function () {

	this.hitAttack = function (point) {
		let hitPoint = point || 10;
		return this.health = this.health - hitPoint;
	}

Player2.prototype.health = 1000;

};

export default Player2;