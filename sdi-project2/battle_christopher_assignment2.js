//alert("JavaScript works!");

  /*
  Christopher Battle
  July 17, 2014
  Project 2
  An expansion of my daily morning routine
  Chris's World 2.0
  */

  //Global Variables(Internal Storage)

  var wakeTime = 7; /* Number Variable */
  var mainAlarm = "iPhone"; /* String Variable */
  var backupAlarm = "FitBit Flex"; /* String Variable */
  var backupAlarm2 = "Pebble Smartwatch"; /* String Variable */
  var workTime = 8; /* Number Variable */
  var storyName = "Chris\'s World 2\.0"; /* Variable with escapes */
  var iphoneCharging = true; /* Boolean Variable */




  var mentalConfirm = confirm("Are you mentally prepared to take a peek into " + storyName + "?"); /* Required confirm */

  if (mentalConfirm === true) { /* Boolean conditional */
      console.log("I knew you were up for it! I never doubted it.");

  } else {
      console.log("Wax on and wax off until you are ready.");
  }

  // First required prompt for user input

  var yourName;


  yourName = prompt("Who are you?");


  // Console log inputs


  console.log("Hey there " + yourName + "\, nice to meet you.");
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
  console.log("I head downstairs to brush my teeth\, and wash my face.");
  console.log("Then put my work clothes on.");


  // Second prompt for user input


  var timeNow;
  timeNow = prompt("How many minutes is it after 7?", "Any number value from 1 to 30.");

  if (timeNow <= 30) {
      console.log("I will be on time for work today.");

    } else {
        console.log("I am going to be late!");
    }

    console.log(" THE END.");
