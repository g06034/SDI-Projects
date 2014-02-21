//alert("JavaScript works!");

// Christopher L. Battle 
// SDI 1402
// February 20, 2014
// Project 3
// Daily Music Getaway

 
var myIpod = "iPod";
var numDevices = 3;
var myMac = "MacBook Pro";
var myIphone = "iPhone";
var devicesFound = true;
var myEarpods = "EarPods";
var mySkullcandy = "Skull Candy headphones";
var numHeadphones = 2;
var headphonesTangled = false;
var chooseIpod = true;
var chooseSkullcandy = true;
var foundIpod = true;
var myName = "Christopher";
var myGyms = ["Welsch Fitness", "Globo Gym", "Average Joes"];
var winningScore = 21;
var teamNames = ["Nets", "Swish"];
var myTeam = "Nets"
  








// My Outputs 

console.log("My day usually starts off pretty stressful, because I like to start coding for my SDI class."); 
console.log("When I get stressed or just want to escape from life for a bit I listen to music.");
console.log("I have to then choose which of my " + numDevices + " devices I want to listen to music on.");

// Prompt for input 
foundIpod = confirm("Is iPod somewhere near to be used for music?"); 
chooseIpod = confirm("Do you want to listen to music on the iPod?");



//  Boolean Conditionals 

if (foundIpod === true) {
	// If condition is true this code runs 
	console.log("I have my iPod near.");
	if (chooseIpod === true) {
	
		console.log("I have decided I want to listen to music on my " + myIpod + ".");
		
	} else {
	
		console.log("I will have to choose a different device to listen to music on.");
		
	}
	
} else {
	// If condition is false this code runs
	console.log("I need to go find my iPod!"); 
}
	
// Prompt for input
numHeadphones = confirm(" Are both of my headphones nearby?");
	
	
// Number Conditional

if (numHeadphones === 2) {
	// If condition is true this code runs
	console.log(" I have both of my headphones to choose from.");
	
	} else {
	
			console.log("I need to go search for at least one of my headphones!");
	
}
	
	 
	 
// More Outputs 

console.log("I then have to decide which of my headphones I want to listen to my music with. ");
console.log("I want to listen to my music on my " + mySkullcandy + ".");
console.log("I now need to choose if I want to listen to a specific playlist, or do I want to" + " listen to a shuffle of all my songs?");
console.log("I choose to listen to a shuffle.");
console.log("Now I am relaxing and listening to my music.");
console.log("I need to pick my players for this pickup game" + " my opponent has already picked his two players");
console.log("THE END"); 
 
 

 

 

  
 
 
 
 
