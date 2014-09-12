 //alert("JavaScript works!");

 /* Christopher Battle
    September 11, 2014
    SDI 1409
    "Destiny 1.0"
  */


  // Global Variables

  var gameName = "Destiny"; /* String Variable */
  var classType = "Warlock"; /* String Variable */
  var meleeDamagePoints = 2.5; /* Number Variable */
  var magicDamagePoints = 5; /* Number Variable for Math */
  var greeting = "Today we\'ll learn about a game."; /* String with escapes Variable */
  var enemy1 = "Red Dragon"; /* String Variable */
  var enemy2 = "Blue Dragon"; /* String Variable */
  var magicChosen = true; /* Boolean Variable */
  var enemy1HealthPoints = 8; /* Number Variable for Math */
  var enemy2HealthPoints = 12; /* Number Variable */
  var age = 24; /* Number Variable */
  var minAge = 18; /* Number Variable */
  var maxAge = 100; /* Number Variable */
  var namePrompt; /* Input Prompt Variable */
  var warlockChosen = true; /* Boolean Conditional Variable */
  var attackPrompt; /* Input Prompt Variable */
  var sword = 25; /* Number Variable */
  var shield = 50; /* Number Variable */
  var yourDefense = 10; /* Number Variable */
  var redDragonStrike = 10; /* Number Variable */
  var blueDragonStrike = 15; /* Number Variable */
  var fullArmor = sword + shield; /* Number Variable */








  // Prompt for input




  namePrompt = prompt("Who are you?","Type your name");
  console.log("Hello there\, " + namePrompt + ".");


  // Outputs for Global Variables


  console.log(greeting);
  console.log("This game is called " + gameName + ".");
  console.log("For this tutorial we will use the " + classType + " class.");
  console.log("The " + classType + " class is a form of space wizard.");
  console.log("Magic is the go-to weapon of the " + classType +".");
  console.log("However\, the " + classType + " also knows how to do basic melee attacks.");
  console.log("For this tutorial we will use the magic attack.");
  console.log(gameName + " is a game rated Mature" + " this means you must be eighteen or older.");


  // Number Conditionals nested


  if (age >= minAge) {
       if (age <= maxAge) {
          console.log("Your old enough to play\, but not too old.");
       } else {
          console.log("Your too old to play. Leave this game for the young.");
       }
    } else {
      console.log("You must be at least 18 to play. Come back in a few years.");
  };






  //Boolean Conditional


  warlockChosen = confirm("Are you choosing the Warlock class?");

  if (warlockChosen === true) {
      console.log("Good to see you can read. Let\'s go Warlock!");
  } else {
      console.log("Can you read? I said you must choose Warlock!");

  };


  console.log("You must slay your first enemy" + " which is the " + enemy1 + ".");


  // Prompt for input


  attackPrompt = prompt("Who attack will you choose?","Type \"melee\"\, or \"magic\".");
  console.log("You attack with " + attackPrompt + "!");


  //String Conditional


  if (attackPrompt === "magic") {
      console.log("Yes\, as I said earlier this is the " + classType + "\'s " + "go-to weapon.");
   } else {
        console.log("I told you to pick magic. Do what I said!");

  };


  console.log("For this tutorial\, you have a special elixir that automatically multiplies your damage points by 2.");


   // Math


  if (attackPrompt === "magic") {
      console.log(magicDamagePoints * 2  + attackPrompt + " damage was done\, because of your multiplier!");
  } else {
       console.log(meleeDamagePoints * 2  + attackPrompt + " damage was done\, because of your multiplier!");

  };


  // Number Conditional


  if (attackPrompt === "magic")  {
      console.log("You have slayed the " + enemy1 + "!");
  } else {
       console.log("You have not slayed the " + enemy1 + " and it is pissed!");
  };


// Functions


  var getWeapon = function () {
      console.log("You look around for awhile eventually finding a shiny sword.");

  };


  // Console Outputs


  console.log("Welcome back friend!");


  confirm("Did you miss me?");  // Confirm


  console.log("We are going to be getting into today is a little more intense.");
  console.log("There are two new dragons that heard about what you did to their brother.");
  console.log("First off\, let\'s grab a weapon. You\'re going to need it.");


  getWeapon(); // Function called


  console.log("Now you are a little more prepared to face these dragons.");
  console.log("Now that I think about it\, a shield might help you out as well.");
  console.log("Well what are you waiting for? Find a shield, or it\s your funeral!");
  console.log("With your sword and shield your health points are now " + fullArmor + ".");
  console.log("You are now ready for battle.");
  console.log("You head off to the tower where the dragon lay.");
  console.log("The dragon awakens as you approach the tower.");
  console.log("The " + enemy1 + " is ready to devour you.");
  console.log("The batle begins. You waste no time and strike first.");


  // While Loop


  var rdhr = 8; // iterator/counter
  while (rdhr > 0) {
    console.log(rdhr + " health points remaining for " + enemy1 + ".");
    rdhr--;

  };


  console.log("0 health points remaining for " + enemy1 + ".");
  console.log("You let out a victory cry.");
  console.log("That was the next dragons\' little brother. Don\'t get cocky.");
