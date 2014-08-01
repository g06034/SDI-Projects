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
