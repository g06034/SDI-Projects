  //alert("JavaScript works!");

  /*
  Christopher Battle
  July 24, 2014
  Project 3
  Another expansion of my daily morning routine
  Chris's World 3.0
  */


  //Global Variables(Internal Storage)


  var wakeTime = 7; /* Number Variable */
  var mainAlarm = "iPhone"; /* String Variable */
  var backupAlarm = "FitBit Flex"; /* String Variable */
  var backupAlarm2 = "Pebble Smartwatch"; /* String Variable */
  var workTime = 8; /* Number Variable */
  var storyName = "Chris\'s World 3\.0"; /* Variable with escapes */
  var iphoneCharging = true; /* Boolean Variable */
  var essentials = ["wallet", " keys", " work badge"]; /* Array */








  // First required prompt for user input


  var yourName;


  yourName = prompt("Who are you?");


  // Inital console log


  console.log("Hey there " + yourName + "\, nice to meet you.");


  var mentalConfirm = confirm( yourName + "\, are you mentally prepared to take a peek into " + storyName + "?"); /* Required confirm */


  if (mentalConfirm === true) { /* Boolean conditional */
      console.log("I was hoping you were ready. You\'re in for a treat!");

  } else {
      console.log("Wax on and wax off until you are ready.");
  }


  // Initial story start console log


  console.log("Our story starts at 6:00 A.M.")


  //For Loop that counts time by ten minute intervals


  for (var timeUntilWake = 60; timeUntilWake > 9; timeUntilWake-=10) {
	     console.log(timeUntilWake + " minutes until it\'s 7:00 A.M.");
  }

  //While loop that counts down the final ten minutes


  var i = 10;
  while (i > 1) {
      console.log( i + " minutes until it\'s 7:00 A.M.");
      i--;
  };


  // Console log inputs


  console.log("1 minute until it\'s 7:00 A.M. ");
  console.log("It\'s 7:00 A.M. now.");
  console.log("I wake up to my wrist vibrating.");
  console.log("I look across the room to see if my " + mainAlarm + " is on the charger.");
  if (iphoneCharging === true) { /* Boolean conditional */
      console.log("My iPhone alarm never wakes me up!");

    } else {
        console.log("That\'s why my iPhone alarm didn't wake me. My phone never charged up.");
    }


  console.log("Good thing I have my " + backupAlarm + "\, and my " + backupAlarm2 + ".");
  console.log("I look at glance at my wrist to check the time.");
  console.log("It\'s " + wakeTime + " A.M.");
  console.log("When I wake up I like to jumpstart my brain with an equation of the day.");


  // Boolean expression that uses two logical operators


  var x = true
  var y = false
  var z = false

  console.log("My equation for today is " + ((x && y) || z));
  console.log("Ah\, good to get the brain flowing early.");



  // First function(procedure) of brushing teeth


  var brushTeeth = function () {
      console.log("I head downstairs and brush my teeth.");
  };


  // Function(procedure) of washing face


  var washFace = function () {
      console.log("I grab a wash cloth and wash my face.");
  };


  washFace();


  console.log("Then put my work clothes on.");
  console.log("I need to check and see if I need to get some gas.");



  // Function with return value


  var getGas = function(milesToWork) {
      var milesToEmpty = 20;



      if (milesToWork > milesToEmpty) {
          console.log("Darn\, I have to get gas!");
          return console.log(" I won\'t be able to get to work if I don\'t.");
      }
      else {
          console.log(" I don\'t need gas.");
        return console.log("I filled up my tank recently.");

      }
  };


  // Second prompt for user input


  var timeNow;
  var timeNow = prompt("How many minutes is it after 7?", "Any number value from 1 to 30.")


    if (timeNow <= 30) {
      console.log("I will be on time for work today.");

    } else {
        console.log("I am going to be late for work!");

  };



  // parseInt to make the string prompt value into number value


  var timeResult = parseInt(timeNow);


  console.log("It\'s " + timeResult + " minutes after 7.");


  // Array method


  essentials.push(" and coffee cup"); /* adds coffee cup to essentials array */

  // Array use


  console.log("I need to make sure I have my " + essentials + "."); /* array method used */






  console.log("THE END.");
