
let Player1 = function (feature) {

	this.hitAttack = function (point) {
		let hitPoint = point || 10;
		return this.health = this.health - hitPoint;
	};

Player1.prototype.health = 1000;

};

export default Player1;



