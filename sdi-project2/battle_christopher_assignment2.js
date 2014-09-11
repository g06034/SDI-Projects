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
  var enemy = "Dragon"; /* String Variable */
  var magicChosen = true; /* Boolean Variable */
  var enemyHealthPoints = 8; /* Number Variable for Math */
  var age = 24; /* Number Variable */
  var minAge = 18; /* Number Variable */
  var maxAge = 100; /* Number Variable */


  // Prompt for input


  var namePrompt;

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


  var age = 24;
  var minAge = 18;
  var maxAge = 100;

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


  var warlockChosen = true;


  warlockChosen = confirm("Are you choosing the Warlock class?");

  if (warlockChosen === true) {
      console.log("Good to see you can read. Let\'s go Warlock!");
  } else {
      console.log("Can you read? I said you must choose Warlock!");

  };



  console.log("You must slay your first enemy" + " which is the " + enemy + ".");


  // Prompt for input


  var attackPrompt;

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
      console.log("You have slayed the " + enemy + "!");
  } else {
       console.log("You have not slayed the " + enemy + " and it is pissed!");
  };


   console.log("THE END");
