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