"use strict";
var value = document.getElementById("trueFirst");
var value1 = document.getElementById("first");
var numbers = document.getElementById("+");
var numbers1 = document.getElementById("-");
function hiFriend(){
numbers.addEventListener("click", function(){
					var final = Number(value1.value) + Number(value.value);	
					console.log(value1);				
					console.log(final);
					alert(final);
});

numbers1.addEventListener("click", function(){
					var final =  Number(value.value) - Number(value1.value);	
					console.log(value1);				
					console.log(final);
					alert(final);
				});

}

hiFriend();