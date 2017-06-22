"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'red'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
if( color == 'red'){
	console.log('The blood of my enemies is ' + color);
}
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

else if( color == 'orange'){
	console.log(' The color of Oranges is ' + color);
}
else if( color == 'yellow'){
	console.log('FYI, your piss shouldn\'t be ' + color);
}
else if( color == 'green'){
	console.log('420 blaze it, this is  ' + color);
}
else if( color == 'blue'){
	console.log('prrrreettttyyyy ' + color);
}
else{
	console.log("I do not know anything by that color.")
}

favorite == color ? console.log("really? mine too!") : console.log("ur lame");
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.