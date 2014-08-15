//alert("JavaScript works!");


  /*
  Christopher Battle
  August 14, 2014
  Project 2
  An expansion of my weekday morning routine
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


// Console Outputs


  console.log("I set 3 different alarms to ensure I wake up in the morning.");
  console.log("I'm a heavy sleeper\,so sounds are pretty much useless for waking me.");
  console.log("I don't want to wake my wife up while she sleeps\, so I set 2 silent alarms.");
  var mentalConfirm = confirm("Are you mentally prepared to take a peek into " + storyName + "?"); /* Required Confirm */


if (mentalConfirm === true) { /* Boolean Conditional */
      console.log("I knew you were up for it! I never doubted you.");

  } else {
      console.log("Your not ready. Try again another time.");
  }


  // First required Prompt for User Input


  var yourName;


  yourName = prompt("And you are?");


  // Console Log Inputs
