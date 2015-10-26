(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Player1 = function Player1(feature) {

	this.hitAttack = function (point) {
		var hitPoint = point || 10;
		return this.health = this.health - hitPoint;
	};

	Player1.prototype.health = 1000;
};

exports["default"] = Player1;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Player2 = function Player2() {

	this.hitAttack = function (point) {
		var hitPoint = point || 10;
		return this.health = this.health - hitPoint;
	};

	Player2.prototype.health = 1000;
};

exports["default"] = Player2;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _player1 = require('./player1');

var _player12 = _interopRequireDefault(_player1);

var _player2 = require('./player2');

var _player22 = _interopRequireDefault(_player2);

(function () {
  'use strict';

  describe('About Player 1', function () {
    beforeEach(function () {
      window.one = new _player12['default']();
      window.two = new _player22['default']();
    });

    describe('Creating Player 1', function () {
      it('should create an instance of Player 1', function () {
        expect(one instanceof _player12['default']).to.equal(true);
      });
    });

    describe('Creating Player 2', function () {
      it('should create an instance of Player 2', function () {
        expect(two instanceof _player22['default']).to.equal(true);
      });
    });

    describe('Player 1 Health', function () {
      it('Player 1 should have full health at start', function () {
        expect(one.health).to.equal(1000);
      });
    });

    describe('Player 2 Health', function () {
      it('Player 2 should have full health at start', function () {
        expect(two.health).to.equal(1000);
      });
    });

    describe('Player 1 Health Damaged', function () {
      it('Player 1 Health Bar Should Lower When Hit', function () {
        one.hitAttack();
        expect(one.health).to.be.below(1000);
      });
    });

    describe('Player 2 Health Damaged', function () {
      it('Player 2 Health Bar Should Lower When Hit', function () {
        two.hitAttack();
        expect(two.health).to.be.below(1000);
      });
    });
  });
})();

},{"./player1":1,"./player2":2}]},{},[3])


//# sourceMappingURL=tests.js.map
