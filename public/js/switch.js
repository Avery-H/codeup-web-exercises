"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
	case "red":
		console.log('The blood of my enemies is ' + color);
	break;
	case "orange":
		console.log('The color of Oranges is ' + color);
	break;
	case "yellow":
		console.log('FYI, your piss shouldn\'t be ' + color);
	break;
	case "green":
		console.log('420 blaze it, this is ' + color);
	break;
	case "blue":
		console.log('prrrreettttyyyy ' + color);
	break;
	default:
			console.log("I do not know anything by that color.")
	break;
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}
/*
var pay, discount, afterDis;
var name = prompt("What is your name?");
var price = prompt("how much is your total?");

if (price >= 200){
	discount = price / 10;
	afterDis = price - discount;
	alert(name + ", your new total with the discount is " + afterDis);
}
else{
	alert(name + ", your total is" + price);
}
*/ 
/*
 var flipACoin = Math.floor(Math.random()* 2);
if(flipACoin == 1){
	alert("Guess you\'re buying a Car?");
	console.log(flipACoin);
}
else{
	alert("Guess you\'re buying a House!");
		console.log(flipACoin);

}
*/
/*
var luckyNumber = Math.floor(Math.random()* 6);
var price, discount, afterDis;
price = 60;
switch (luckyNumber){
	case 1:
	discount = price / 10;
	afterDis = price - discount;
	console.log("Total after discount is " + afterDis);
	break;
	case 2:
	discount = price /4;
	afterDis = price - discount;
	console.log("Total after discount is " + afterDis);
	break;
	case 4:
	discount = price / 2;
	afterDis = price - discount;
	console.log("Total after discount is " + afterDis);
	break;
	case 5:
	afterDis = "Free!";
	console.log("Total after discount is " + afterDis);
	break;
	default:
	console.log("Total is " +price);
	break;
}
*/
var numb, plus100;

if(confirm("Would you like to enter a number?")){
	numb = prompt("Number");
	if(isNaN(numb) == false){
		if((numb % 2) == 0){
			alert("This number is even!");
		}
		else{
			alert("This number is odd!");
		}
	
		plus100 = parseInt(numb) + 100;
		
		alert("if you add 100 it equals " + plus100);
		if (numb < 0){
			alert("This number is Negative!");
		}
		else if (numb > 0){
			alert("This number is Positive!");
		}
		else {
			alert("Did you really choose 0?");
		}
	}
	else{
		alert("Don't do that");
	}
}
else{
	alert("Fine, be that way.");
}





