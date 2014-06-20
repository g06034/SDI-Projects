//alert("JavaScript works!");

/*
Chris Battle
SDI 1406
Project 3
June 19, 2014
GPA Calculator for worried students.
*/

//GLOBAL VARIABLES
var name="";
var startEnteringGrades=true;
var grades=new Array();
var average=0;
var succeeded=false;
var decision="";


console.log("For this story we will be entering your grades to caculate your GPA.");
console.log("To begin entering your grades simply press the start button above.");


//Json
var json={
	name:"",
	average:"",
	decision:""
};


//PROGRAM START
function start(){

	var n=prompt("What\'s your name? ");//Local variable
	json.name=n;
	if(n==null){
		alert("Bye"); //FINISH
		return;
	}

	if(n!=""){
		name=n;
		var conf=confirm("Welcome\, "+name+"\nDo you want to start entering your grades?"); //Local variable
		startEnteringGrades=conf;
		grades=recordGrades(grades);
		average=calculateAverage(average);
		succeeded=success(succeeded);
		decision=appreciation(decision);

		//OUTPUT
		alert("Your GPA is "+average);
		console.log("Your GPA is "+average);
		alert(decision);
		console.log(decision);


		//Output using json data
		alert("I will display your output using json in the console below.");

		alert("Hello "+json.name+" your average is "+json.average+" and you "+json.decision);
		console.log("Here is your ouput using json data");
		console.log(json.name+" your average is "+json.average+" and you "+json.decision);


	}
}


//PROGRAM END


//FUNCTION THAT RETURNS AN ARRAY
function recordGrades(array){
	var i=1; //Local variable
	
	//WHILE LOOP
		while(startEnteringGrades==true){

		var g=prompt("Grade #"+i);
		if(g==null){
			alert("Calculating your final GPA. Be patient young grasshopper.");  // FINISH
			break;
		}

		if(g < 0){
			alert("Thanks we are going to calculate your GPA.");
			console.log("Thanks, we are going to calculate your GPA.");
			break;
		}
		g=parseFloat(g);
		if(g!="" && !isNaN(g) ){
		array[i-1]=g;
		i++;
		}

		}

		// END OF WHILE LOOP

		return array;


}


//WHILE LOOP
		while(startEnteringGrades==true){

		var g=prompt("Grade #"+i);
		if(g==null){
			alert("Calculating your final GPA. Be patient young grasshopper.");  // FINISH
			break;
		}

		if(g < 0){
			alert("Thanks we are going to calculate your GPA.");
			console.log("Thanks, we are going to calculate your GPA.");
			break;
		}
		g=parseFloat(g);
		if(g!="" && !isNaN(g) ){
		array[i-1]=g;
		i++;
		}

		}

		// END OF WHILE LOOP

		return array;


}


//FUNCTION THAT TAKES A NUMBER AND RETURNS A NUMBER

function calculateAverage(average){
	//Use of array property(length),for loop and a math function
	for(var i=0; i<grades.length; i++){
		average+=grades[i];
	}
	average/=grades.length;
	average=Math.floor(average); //Math function
	json.average=average;
	return average;
}

//FUNCTION THAT TAKES A BOOLEAN AND RETURNS A BOOLEAN
function success(succeeded){
	if(average >=74){
		succeeded=true;
	}else{
	succeeded=false;
	}

	return succeeded;
}
	
	
	