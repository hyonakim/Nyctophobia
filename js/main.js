import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import Player1 from './player1';
import Player2 from './player2';


$('.showTitle').hide(0).delay(1000).fadeIn(3000);
$('.instruction').hide(0).delay(1000).fadeIn(3000);
$('.tacotext').hide(0).delay(3000).fadeIn(3000).delay(3000).fadeOut(3000);
$('.burgertext').hide(0).delay(3000).fadeIn(3000).delay(3000).fadeOut(3000);





//Player 1 Instance

let taco = new Player1();



//Player 2 Instance

let burger = new Player2();


//DOM Nodes

let p1health = $('.p1health');
let p2health = $('.p2health');

let p1attack = $('#attack1');
let p2attack = $('#attack2');

let gameOver1 = $('.gameover1');
let gameOver2 = $('.gameover2')

//Show Current Default Health Levels

p1health.text(taco.health);
p2health.text(burger.health);


//On Events

p1attack.on('click', function () {

	let num = _.random(0, 1000);
	burger.hitAttack(num);

	if(burger.health <= 0) {
		p2health.text('Slenderman ate a Burger').addClass('deadburger');
		$('.slenderhidden').addClass('slendershow2');
		gameOver1.text('Woohoo!');
		
	}
	else {
		p2health.text(burger.health);
	}
});

p2attack.on('click', function () {

	let num = _.random(0, 1000);
	taco.hitAttack(num);

	if(taco.health <= 0) {
		p1health.text('Slenderman ate a Taco').addClass('deadtaco');
		$('.slenderhidden').addClass('slendershow1');
		gameOver2.text('Eat It!');
		
	}
	else {
		p1health.text(taco.health);
	}
});










