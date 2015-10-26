import Player1 from './player1';
import Player2 from './player2';

(function() {
  'use strict';

  describe('About Player 1', function() {
    beforeEach( function () {
    	window.one = new Player1();
    	window.two = new Player2();
    });

    describe('Creating Player 1', function () {
    	it('should create an instance of Player 1', function () {
    		expect(one instanceof Player1).to.equal(true);
    	});
    });

    describe('Creating Player 2', function () {
    	it('should create an instance of Player 2', function () {
    		expect(two instanceof Player2).to.equal(true);
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

}());