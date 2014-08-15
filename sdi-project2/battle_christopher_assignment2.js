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


  console.log("Hey there " + yourName + "\,  It\'s a pleasure meeting you.");
  console.log("I start off by waking up to my wrist vibrating.");
  console.log("I look across the room to see if my " + mainAlarm + " is on the charger.");
  if (iphoneCharging === true) { /* Boolean conditional */
      console.log("My iPhone alarm never wakes me up when I need it to!");

    } else {
        console.log("That\'s why my iPhone alarm didn't wake me. My phone never charged while I slept.");
    }


  console.log("Good thing I have my " + backupAlarm + "\, and my " + backupAlarm2 + ".");
  console.log("I glance at my wrist to check the time.");
  console.log("It\'s " + wakeTime + " A.M.");
  console.log("It\'s way too early to be up\, but my career won\'t allow me to wake up any later.");
  console.log("I head downstairs to brush my teeth\, and wash my face.");
  console.log("Then put my work clothes on.");
  console.log("I quickly throw a K-cup in the Kuerig\, and head out the door with a fresh cup of coffee.");
