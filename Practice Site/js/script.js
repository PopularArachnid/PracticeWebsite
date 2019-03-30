/* Practice
Author: Sam Hovland
Created: 03/18/19


var today = new Date();
var started = new Date("Aug 28, 2018");
var difference = today.getTime() - started.getTime();
difference = (difference / 86400000);

*/

// document.write("The date today is " + today+ "and I have been learning to code for "+ Math.floor(difference) + " days.");

function duration(){
	current = new Date();
	start = new Date("May 28, 2018");
	diff = (current.getTime() - start.getTime()) / 86400000; //There are 86400000 miliseconds in a day.
	// return diff
	document.getElementById("diff").innerHTML="Ive been studying software development for at least " + Math.floor(diff) + " days.";

}


duration(); 