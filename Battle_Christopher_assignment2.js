/* alert("JavaScript works!")
 "The Morning Grind "
 Author: Christopher L. Battle
 SDI 1310 Project 2 
 Build upon the previous weeks story
 */

// My variables 
var myEssentials = [ "Government Contractor ID", "Wallet", "iPhone charger", "iPhone" ];
var mySandwich = true;
var myLunch = [ "Sandwhich", "Chips", "Fruit Cup", "Chewy Bar", "Water Bottle" ];
var myWife = "Eva";
var imReady = "That means one less step";
var minUntilArrival = 90;
var minBeforeShift = 120;
var sandwichMaterials = [ "Sandwich Bread", "Butterknife", "Sandwich Meat", "Cheese Slice", "Mayonnaise" ];
var onTime = true;
// My outputs
console.log("My alarm on my iPhone goes off");
console.log( myWife + " did you make my sandwich last night" + ".");

//Conditionals
if (myWife + mySandwich == true)
        {
        imReady === true
        }
        else{
        console.log("I need to make a sandwich for lunch")
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
	    console.log( "Oh well\, I will just buy some lunch at work") 
		};
		
		
		
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
	
 






 