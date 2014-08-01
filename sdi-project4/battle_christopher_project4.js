alert("JavaScript works!");


var myLibrary = function()		{
/*---------------------------------------------------------------*/
//Function that matches phone number pattern like this xxx-xxx-xxxx
//There are a lot of different ways to do it, for instance we could use recursion and the indexOf function
//but I believe this is the cleanest and simplest one


function phoneNumberPattern(phoneNumberStr)
{
  var countOfErrors = 0; // declare the variable for counting our errors
  var tokens = phoneNumberStr.split("-"); //split the passed in string on the dash,
                      //splits the string into an array of strings each element seperated by dash
  if (tokens[0].length==3)//check the length of the first substring (area code) should be 3 characters
  {
    if(isNaN(parseInt(tokens[0])))//if it was 3 characters long make sure those chars are numbers
        countOfErrors++; //otherwise add an error to our error counter


    if(tokens[1].length==3) //if the length of the second segment equals to 3 (the first part of phone number after area code)
    {
      if(isNaN(parseInt(tokens[1])))//and its a not a number add the errors other wise go to the next validation
        countOfErrors++;
    }
    else
    {
      countOfErrors++;//if it wasn't 3 chars long then add another error to the error counter
    }

    if(tokens[2].length==4)//check that the final segment of phone number is 4 chars long
    {
      if(isNaN(parseInt(tokens[2])))//check if it is not a number
        countOfErrors++; //if its not a number add the error to the counter
    }
    else
    {
      countOfErrors++; // if final segment is not 4 chars long add an error to the counter
    }


    return countOfErrors > 0 ? false: true; //check if there were any errors if not return true if there were any return false

  }
  else
  {
    return false;//the first segment wasn't 3 chars long so right away return false

  }

}


/*---------------------------------------------------------------*/
//Function title case a string
//@parameter string
//@return bool
//Description
//Take a string then splits it into words and for each word capitalizes the first letter


function titleCase(titleString)
{
  var wordsArray = titleString.split(" "); //first split the sentence into an array of strings(words)
  for (var i in wordsArray) //for each word position in array
  {
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase()+wordsArray[i].slice(1); //set the word at that position to capitalized first letter and rest of the word
  }

  var returnTitle = wordsArray.join(" "); //now convert the array back to a string with space as a delimiter and assign it to a new var called returnstring

  return returnTitle; //return the string with uppercase first letters
}


/*---------------------------------------------------------------*/
//Function title: dateDiffCalculation()
//@parameter: date, date, string
//@return: int
//Description
//Takes two dates and a string that says what is the unit of measure for the difference
//either hours or days
//returns the difference in the specified choice


function dateDiffCalculation(d1, d2, units)
{
  var difference = 0; //variable to store our difference
  var differenceinMS = 0; //variable to store difference in milliseconds
  var one_day=1000*60*60*24; //conversion formula to convert from milliseconds to one day
  var one_hour = 1000*60*60;//conversion formula to convert from milliseconds to one hour

var d1_MilliSecs = d1.getTime(); // get the first date in milliseconds
var d2_MilliSecs = d2.getTime(); // get the second date in milliseconds

//switch on units to perform our calculation, could be expanded to calculate in seconds or minutes or weeks or months
  switch(units){
    case "days":
        if(d1>d2){//if date 1 is greater than date 2
          differenceinMS = d1_MilliSecs - d2_MilliSecs;//subtraction in milliseconds
          difference = Math.round(differenceinMS/one_day); //conversion back to days
        }
        else if (d2>d1){//if date 2 is greater than date 1
          differenceinMS = d2_MilliSecs - d1_MilliSecs;//subtraction in milliseconds
          difference = Math.round(differenceinMS/one_day); //conversion back to days
        }else
          difference = 0;	//if both dates are the same there is no difference between them
        break;
    case "hours":

        if(d1>d2){
          differenceinMS = d1_MilliSecs - d2_MilliSecs;
          difference = Math.round(differenceinMS/one_hour); //conversion back to hours
        }
        else if (d2>d1){
          differenceinMS = d2_MilliSecs - d1_MilliSecs;
          difference = Math.round(differenceinMS/one_hour); //conversion back to hours
        }else
          difference = 0;
    break;
    default:
      alert("You have entered incorrect unit type");//some other string passed in that isn't days or hours
    break;
  }
  return difference.toString(); //return the difference converted to a String
}
