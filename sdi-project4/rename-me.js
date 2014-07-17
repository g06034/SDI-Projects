alert("JavaScript works!");

/*
Chris Battle
SDI 1406
Project 4
June 26, 2014

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
	
};

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
};


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
};

/*---------------------------------------------------------------*/
//Function title: validateEmail()
//@parameter: string
//@return: bool
//Description
//function takes in a string and performs validation to see if email is valid
//and then returns true or false based on the validity
/*Basic Rules for validating email
 The email address must have @ character
The email address must have .(dot) character
There must be at lease 2 characters between @ and .(dot)
 * */
//function can be expanded to check for known extension names .com .net .bex or at least for 3 or max 4 chars length
// also could check that it can't start with the number or a symbol.
function validateEmail(email){
		var atSymb=email.indexOf('@'); //get the index of @ symbol
		var dot=email.lastIndexOf('.'); // get the index of last occurence of .symbol
 
		if(atSymb==-1 || dot==-1 || (atSymb+2)>=dot){ //if any of symbols aren't present or distance is less than 2 chars email is invalid
			return false;
		}
		else{
			return true;
		}
};


/*---------------------------------------------------------------*/
//Function title: validateURL()
//@parameter: string
//@return: bool
//Description
//function takes in a string and performs validation to see if url start is valid
function validateURL(url)
{
	var regURL = url.indexOf("http://");//get the index of regular url
	var secureURL = url.indexOf("https://"); // get the index of secured url
	
	//first check for appearance of either http or https
		if((regURL!=-1) ||(secureURL!=-1)) //if index of both regular and secure is not found go to else otherwise step inside
		{
			//make sure it appears at the beginning of the string
			if(regURL!=-1)//if regular url found check to see if it appears at the beginning of the string
				return (regURL!=0) ? false : true;//if not return false otherwise true
			
			if(secureURL!=-1)//if secure url found check to see if it appears at the beginning of the string
				return (secureURL!=0) ? false : true;//if not return false otherwise true		
		}
		else
		{
			//both are absent so url incorrect return false
			return false;
		}
	
};

/*---------------------------------------------------------------*/
//Function title: searchMinGreaterValue
//@parameters:array, number
//@return: number
//Description
//function takes in an array and a number and then find the smallest number in 
//the array which is greater than a passed in number
function searchMinGreaterValue(arr, e){
	arr.sort(function (a, b) {
    		 return a - b;});//sort the array in ascending numeric order
	//since the array is sorted now we can perform linear search
	var minElement = 0;
	for (i=0; i<arr.length-1; i++)
	{
		if(arr[i]>e)
		{
			minElement = arr[i];
			return minElement;//as soon as the first value found return and exit the loop
		}	
			
	}
	
};w






