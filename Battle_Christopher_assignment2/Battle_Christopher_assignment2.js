/* 
 "The Weekday Morning Grind "
 Author: Christopher L. Battle
 SDI 1312 Project 2 
 */
 
alert("JavaScript works!")
 
alert("This time we take a look into the daily schedule of Chris Battle on his way to work.");
// My variables 
//string variables 
var myEssentials = [ "Government Contractor ID", " Wallet", " iPhone charger", " iPhone" ];
var myWife = "Eva";
var myLunch = [ "Sandwhich", "Chips", "Fruit Cup", "Chewy Bar", "Water Bottle" ];
var imReady = "That means one less step";
var sandwichMaterials = [ "Sandwich Bread", "Butterknife", "Sandwich Meat", "Cheese Slice", "Mayonnaise" ];
// boolean variable
var mySandwich = true;
var onTime = true;
var minUntilArrival = 90;
var minBeforeShift = 120;
var


 
 // User inputs
 var myConfirmation = true;
 var myPrompt;
 
 myPrompt = prompt("Hey stranger\, do you have a name?", "Enter your name here.");
 
 console.log("Hello there " + myPrompt);
 
 myConfirmation = confirm(" Are you prepared to go on another journey in the life of Chris Battle?");
 
 
 if (myConfirmation === true) {
	 console.log("I never doubted you were up for the challenge. C\'mon the story is starting!");
	 
} else {
	console.log("That's fine take your time. Go get a cold drink if you\'d like. It\'s your world\, we\'re just living in it!");
	
	
};






//While-loop variable, iterator
var hbs = 2;





// My outputs
console.log("My alarm on my iPhone goes off.");
console.log("I sit up in bed\, my eyes open as I grogily awaken.");
console.log("I angrily fumble to turn off my alarm.");
console.log("My alarm has also woken my wife up." + " I wonder if she made me a sandwich last night?");
console.log( myWife + " did you make my sandwich last night" + "?");
console.log("I first go to bathroom to brush my teeth and wash my face.");
console.log("Then I get dressed for work.");


//Conditionals
if (myWife + mySandwich === true)
        {
        imReady === true
        }
        else{
        console.log("Ok well then I need to make a sandwich for lunch.")
        };
        
//Functions        
        
        
var makeSandwich = function(sandwichMaterials, tupperwareDish, myLunchbox) {
	console.log(" I proceed to the kitchen to get " + sandwichMaterials + 
				" ready to make sandwich then put in " +
				  tupperwareDish + ".")
				("Then I can pack it up in" +
				myLunchbox +
				" and my sandwich will be complete.")
				};
				
if (sandwichMaterials > 0) {
		console.log(" Time to make my sandwich")
		} else {
	    console.log( "Oh well I don't have enough groceries to make a sandwich. I will just buy some lunch at work.") 
		};
		
console.log("I need to make sure I have my " + myEssentials + ".");
		
		
		
//Procedures

var onTime = function(minBeforeShift, minUntilArrival) {
	if (minBeforeShift >= minUntilArrival) {
		console.log(" Time to hit the road " +
					"  I've got a long ride" +
					 "and" + minUntilArrival + "minutes to get there."
				
		)
	} else {
		console.log(" Now I will be late to work" +
					"I still have " + minUntilArrival +
					"until I arrive at work!"
		);			
	};
	return minBeforeShift,
		minUntilArrival;
		
}; 

console.log("Since my commute is long\, I like to countdown the hours \.");

//while-loop


while(hbs > 0) {
		console.log(hbs + " hours until I arrive at work.");
		bobotw--;
		
};	

console.log("I have only minutes left until I get to work.");

console.log("Well that was fun but I\'ve still got minutes left until I get to work. Let/'s count the minutes down");	


var bobotw = 0;
// for-loop

for (var bobotw = 0; bobotw < 99; bobotw++) {
	console.log(bobotw + " bottles of beer on the wall.");	
};



console.log("I have made it to the parking lot outside of my building.");
console.log("I have finally arrived at work\, and I am ready to help the customer!");
console.log("THE END.");				 


	
 






 