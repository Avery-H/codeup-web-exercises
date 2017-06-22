"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
//  function sayHello(name){
 	
//  	return name;
//  }

// var helloMessage = sayHello("myNameIs");

// console.log(helloMessage);
/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
// var random = Math.floor((Math.random() * 100) + 1);

// function isOdd(x){
// 	if (x % 2 == 0){
// 	return x + " is not odd";
// }
// else{
// 	return x + " is Odd";
// }
// }

// console.log(isOdd(random));
/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

// function calculateTip(){
// 	var bill = prompt("what is the bill total?");
// 	var tipPercent = prompt("what is the percentage you wish to tip?");
// var tip = bill * (tipPercent / 100); 
// alert("$" + tip.toFixed(2));
// }

// calculateTip();
/*
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// function identity(input){
// 	return
// }

// function getRandomNumbers(min, max){
// 	var random = Math.floor((Math.random() * max) + min);
// return random;
// }
// function first(input){
//  return input.substring(0,1);
// }

// console.log(first("f u dog"));

// function last(input){
// 	return input.substring(input.length-1,input.length);
// }

// function rest(input){
// 	return input.substring(1,input.length);
// }
// function reverse(input){
// 	var array = input.split("");
// 	array.reverse();
// 	var newt = array.join("");
// 	return newt;
// }

// console.log(reverse("youre pretty lame mate"));
def sum_two_smallest_numbers(numbers):
    watch = 0
    watch1 = 0
    sum = 0
    watch = min(numbers)
    numbers.pop(numbers.index(min(numbers)))
    watch1 = min(numbers)
    sum = watch + watch1
    return sum

// function isNumeric(input){
// 	if(isNaN(input)){
// return false;
// }
// else{ 
// return true;
// }
// }
// function count(input){
// 	return input.length;
//}
// function add(a,b){
// 	return a + b;
// }
// function subtract(a,b){
// 	return a - b;
// }
// function mutiply(a,b){
// 	return a * b;
// }
// function divide(numerator,den){
// 	return numerator / den;
// }
// function remainder(number,diviser){
// 	return number % diviser;
// }
// function square(a){
// 	return a * a;
// }

// function sumOfSquares(a, b){
// return add(square(a),square(b));
// }

// function doMath(operator, a, b){
// switch (operator){
// 	case "+":
// 		return a + b;
// 		break;
// 	case "-":
// 		return a - b;
// 		break;
// 	case "*":
// 	return a * b;
// 		break;
// 	case "/":
// 	return a / b;
// 		break;
// 	default:
// 		return "Error, Not an operator";
// }
// }
// console.log(doMath("5",6,10));

