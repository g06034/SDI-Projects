//alert("JavaScript works!");

/*
Chris Battle
SDI 1406
Project 2
June 11, 2014
Morning Intro - Deeper dive into waking up in the morning and getting ready for work.
*/

alert ("This is a little bit of insight on my daily morning wake-up routine.");


//Global Variables(Internal Storage)


var myAlarm = "iPhone";  /* String Variable */
var smartWatch = "Pebble Smartwatch"; /* String Variable */
var numOfAlarms = 4; /* Number Condition */
var numOfPebbleAlarms = 3; /* Number Variable */
var numOfIphoneAlarms = 1; /* Number Variable */
var amTime = 6; /* Number Variable */
var amWorkTime = 8; /* Number Variable */
var wantTea = true; /* Boolean Variable */
var getGas = true; /* Boolean Variable */
var wantCoffee = false; /* Boolean Variable */
var minUntilWorkArrival = 60; /* Number Variable for math */
var kCupInserted = true; /* Boolean Variable for Nested Conditional */
var minPerSnooze = 5; /* Number Variable */
var daughterAwake = false; /* Boolean Variable */
var eatBreakfast = false; /* Boolean Variable */
var essentialsCheck = [ "iPhone", "Wallet", "Car keys", ]












//Initial Prompt
var reply = prompt("Hello there, stranger!  What's your name?", "")
alert ( "It\'s great to meet you " + reply + "!") //Grab user input then alert them back using that input.


//Console Outputs
console.log("My alarm goes off. I groggily open an eye and peek at my " + myAlarm);
console.log("It\'s 6:00 A.M.");
console.log("I need to be at work at " + amWorkTime + ".");
console.log("Do I want to go back to sleep until at least 7:00 A.M. or not?");
console.log("I have a total of " + numOfAlarms + " alarms.");
console.log("Each alarm has a " + minPerSnooze + " minute snooze interval.");

//For Loop
for (var timeUntilWake = 60; timeUntilWake > 1; timeUntilWake-=5) {
	console.log(timeUntilWake + " minutes until it\'s 7:00 A.M.");
}

console.log("It\'s 7:00 A.M. now.");














//Confirm for Input
var toSnooze =confirm(" Do I want to snooze?");/* Confirm for Input */

if (toSnooze === true) {
	console.log("I'm going to sleep a little bit longer.");
	} else {
		console.log("I need to get up. This is no time for snoozing!");


	};


if (toSnooze === true) {
	console.log("I\'ve successfully snoozed until 7:15.");
	} else {
		console.log("The time I would have spent snoozing can be used to do something productive.");


	};

















// Conditionals
if (daughterAwake === true) {
	console.log(" Uh oh, Aaliyah is awake, I need to make her a bottle.");
} else {
	console.log(" Phew, Aaliyah is still sound asleep.");


};

var wantTea = true, kCupInserted = true;

if (wantTea === true) {
	console.log("I need some tea to jumpstart this day.");
	if (kCupInserted === true) { /* Boolean Nested Conditional */
		console.log("I only have to press the brew button\, because the K-cup is already inserted.");
	} else {
		console.log("I don't need any tea today.");

	};
} else {
	console.log("I need to grab a K-cup to brew this tea.");
};




if (minUntilWorkArrival < 25) {
	console.log("I can get gas on my way to work .");
	} else {
		console.log("No time to get gas on the way to work. I\'ll have to grab it on my way home.");


	};
