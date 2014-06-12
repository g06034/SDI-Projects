//alert("JavaScript works!");

/*
Chris Battle
SDI 1406
Project 2
June 11, 2014
Morning Intro - Awaking in the morning and getting ready for work.
*/

//Global Variables(Internal Storage)

var myAlarm = "iPhone";  /* String Variable */
var numOfAlarms = 3; /* Number Variable */
var amTime = 7; /* Number Variable */
var amWorkTime = 8; /* Number Variable */
var wantTea = true; /* Boolean Variable */
var getGas = true; /* Boolean Variable */
var wantCoffee = false; /* Boolean Variable */
var minUntilWorkArrival = 60; /* Number Variable for math */
var kCupInserted = true; /* Boolean Variable for Nested Conditional */
var minPerSnooze = 5; /* Number Variable */







//Console Outputs
console.log("My alarm goes off. I groggily open an eye and peek at " + myAlarm);
console.log("It\'s 7:00 A.M.");
console.log("I need to be at work at " + amWorkTime + ".");
console.log("Do I want to snooze or not?");
console.log("I have " + numOfAlarms + " alarms.");
console.log("Each alarm has a " + minPerSnooze + " minute snooze interval.");







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
		console.log("No time to get gas on the way to work. I \'ll have to grab it on my way home.");


	};
