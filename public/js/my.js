"use strict";
var value = document.getElementById("trueFirst");
var value3 = document.getElementById("third");
var value1 = document.getElementById("first");
var value2 = document.getElementById("second");
function hiFriend() {
        var numbers = document.getElementsByClassName("numbers");
         for (var i = 0; i < numbers.length; i++){
         	numbers[i].addEventListener("click", function(){
				var numValue = this.getAttribute("data-value");
        		if(document.getElementById("second").classList.contains('democlass')){
        		value3.innerHTML += numValue;
        		value.innerHTML = value3.innerHTML;
        	}else{
        		value1.innerHTML += numValue;
        		value.innerHTML += numValue;
        	}
          	})
}
}
function clearing(){
				var clear = document.getElementById('clear');
				clear.addEventListener("click", function(){
        		value1.innerHTML = "";
        		value2.innerHTML = "";
        		value3.innerHTML = "";
        		value.innerHTML = "";
        		document.getElementById("second").removeAttribute("class");	
        		document.getElementById("trueFirst").setAttribute("placeholder", "Calc like you're Genghis Khan");
        	})
}
function notQuiteClearing(){
        		value3.innerHTML = "";
        		document.getElementById("second").removeAttribute("class");	
        	}
function notClearing(){
			value2.innerHTML = "";
        	value3.innerHTML = "";
        	document.getElementById("second").removeAttribute("class");	
}		        		
	
function equals(){
			var truFal = value.innerHTML.indexOf("^");
			var falTru = value.innerHTML.indexOf("√");
			var final;
			if(truFal != -1){
				console.log(truFal);
				if(document.getElementById("second").classList.contains('democlass')){
					final = Math.pow(value.innerHTML.substring(0,truFal),value.innerHTML.substring(truFal+1));
					value3.innerHTML = final;
					value.innerHTML = final;
				}
				else{
					final = Math.pow(value.innerHTML.substring(0,truFal),value.innerHTML.substring(truFal+1));
					value1.innerHTML = final;
					value.innerHTML = final;
				}
			} 
			else if(falTru != -1){
				console.log(falTru);
				if(document.getElementById("second").classList.contains('democlass')){
					console.log(falTru);
					final = Math.pow(value.innerHTML.substring(0,falTru),(1/value.innerHTML.substring(falTru+1)));
					value3.innerHTML = final;
					value.innerHTML = final;
				}
				else{
					final = Math.pow(value.innerHTML.substring(0,falTru),(1/value.innerHTML.substring(falTru+1)));
					value1.innerHTML = final;
					value.innerHTML = final;
				}
			}
			else{
			switch (value2.innerHTML){
				case "+":
					final = Number(value1.innerHTML) + Number(value3.innerHTML);						
					
					notQuiteClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					
				break;
				case "-":
					final = Number(value1.innerHTML) - Number(value3.innerHTML);
					notQuiteClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					
				break;
				case "*":
					final = Number(value1.innerHTML) * Number(value3.innerHTML);
					notQuiteClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					
				break;
				case "/":
					final = Number(value1.innerHTML) / Number(value3.innerHTML);
					notQuiteClearing();
					if (final != Infinity){
					value.innerHTML = final;
					value1.innerHTML = final;
					
				}
				
				else{
					value.innerHTML = 0;
					value1.innerHTML = 0;
				}
				break;
				case "%":
					final = (value1.innerHTML / 100);
					value1.innerHTML = final;
					value.innerHTML = final;

				break;
			}
		}
}
function operators(){
		  var operators = document.getElementsByClassName("operator");
		     for (var x = 0; x < operators.length; x++){
         		operators[x].addEventListener("click", function(){
         			if(document.getElementById("second").classList.contains('democlass')){
			var final;
			switch (value2.innerHTML){
				case "+":
					final = Number(value1.innerHTML) + Number(value3.innerHTML);						
					notClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					notClearing()
					
				break;
				case "-":
					final = Number(value1.innerHTML) - Number(value3.innerHTML);
					notClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					notClearing()
				break;
				case "*":
					final = Number(value1.innerHTML) * Number(value3.innerHTML);
					notClearing();
					value.innerHTML = final;
					value1.innerHTML = final;
					notClearing()

				break;
				case "/":
					final = Number(value1.innerHTML) / Number(value3.innerHTML);
					notClearing();
					if (final != Infinity){
					value.innerHTML = final;
					value1.innerHTML = final;
					notClearing()
				}
				
				else{
					value.innerHTML = 0;
					value1.innerHTML = 0;
				}
				break;
				case "%":
					final = (value1.innerHTML / 100) * Number(value3.innerHTML);
					value1.innerHTML = final;
					value.innerHTML = final;

				break;
			}
			var newVar = this.getAttribute("data-value");
        		value2.innerHTML = newVar;
        		document.getElementById("second").setAttribute("class", "democlass");
        		document.getElementById("trueFirst").setAttribute("placeholder", "" + value1.innerHTML + "");
        		value.innerHTML = "";
		}

		
		else{
				var newVar = this.getAttribute("data-value");
        		value2.innerHTML = newVar;
        		document.getElementById("second").setAttribute("class", "democlass");
        		document.getElementById("trueFirst").setAttribute("placeholder", "" + value1.innerHTML + "");
        		value.innerHTML = "";
		}	
          	})
 }
}
function backGs(){
var bGrounds = ['../img/dynamic_back/back1.jpg','../img/dynamic_back/back2.jpg','../img/dynamic_back/back3.jpg','../img/dynamic_back/back4.jpg','../img/dynamic_back/back5.jpg','../img/dynamic_back/back6.jpg','../img/dynamic_back/back7.jpg','../img/dynamic_back/back8.jpg','../img/dynamic_back/back9.jpg','../img/dynamic_back/back10.jpg','../img/dynamic_back/back11.jpg','../img/dynamic_back/back12.jpg','../img/dynamic_back/back13.jpg','../img/dynamic_back/back14.jpg','../img/dynamic_back/back15.jpg','../img/dynamic_back/back16.jpg','../img/dynamic_back/back17.jpg','../img/dynamic_back/back18.jpg','../img/dynamic_back/back19.jpg','../img/dynamic_back/back20.jpg','../img/dynamic_back/back21.jpg','../img/dynamic_back/back22.jpg','../img/dynamic_back/back23.jpg','../img/dynamic_back/back24.jpg','../img/dynamic_back/back25.jpg','../img/dynamic_back/back26.jpg','../img/dynamic_back/back27.jpg','../img/dynamic_back/back28.jpg','../img/dynamic_back/back29.jpg','../img/dynamic_back/back30.jpg','../img/dynamic_back/back31.jpg','../img/dynamic_back/back32.jpg','../img/dynamic_back/back33.jpg','../img/dynamic_back/back34.jpg','../img/dynamic_back/back35.jpg','../img/dynamic_back/back36.jpg','../img/dynamic_back/back37.jpg'];
var randomBackgroundIndex = bGrounds[Math.floor(Math.random()*bGrounds.length)];
document.body.style.backgroundImage = "url('"  + randomBackgroundIndex + "')";
}
function squared(){
	var input = document.getElementById("squared");
	input.addEventListener("click", function(){
		if(document.getElementById("second").classList.contains('democlass')){
			var newVar = value3.innerHTML * value3.innerHTML;
			value3.innerHTML = newVar;
			value.innerHTML = newVar;
		}
		else{
			var newVar = value1.innerHTML * value1.innerHTML;
			value1.innerHTML = newVar;
			value.innerHTML = newVar;
		}
	})
}
function negative(){
	var input = document.getElementById("neg");
	input.addEventListener("click", function(){	
		if(document.getElementById("second").classList.contains('democlass')){
			var newVar = -value3.innerHTML;
			value3.innerHTML = newVar;
			value.innerHTML = newVar;
		}
		else{
			var newVar = -value1.innerHTML;
			value1.innerHTML = newVar;
			value.innerHTML = newVar;
		}		
	})
}
function decimole(){
	var input = document.getElementById("dec");
	input.addEventListener("click", function(){
		var truFal = value1.innerHTML.indexOf(".");
		var truFal2 = value3.innerHTML.indexOf(".");
		console.log(truFal);
			if(document.getElementById("second").classList.contains('democlass')){
				if (truFal2 == -1){
				value3.innerHTML = value3.innerHTML + ".";
				value.innerHTML = value.innerHTML + ".";
			}
			}
			else{
				if (truFal == -1){
				value1.innerHTML = value1.innerHTML + ".";
				value.innerHTML = value.innerHTML + ".";
			}
			}	
	})
}
function squaredBy(){
	var input = document.getElementById("power");
	input.addEventListener("click", function(){
		if(document.getElementById("second").classList.contains('democlass')){
			value.innerHTML = value.innerHTML + "^";
		}
		else{
			value.innerHTML = value.innerHTML + "^";
		}		
	})
}
function squareRoot(){
	var input = document.getElementById("squareRoot");
	input.addEventListener("click", function(){
	if(document.getElementById("second").classList.contains('democlass')){
			var newVar = Math.sqrt(value3.innerHTML);
			value3.innerHTML = newVar;
			value.innerHTML = newVar;
		}
		else{
			var newVar = Math.sqrt(value1.innerHTML);
			value1.innerHTML = newVar;
			value.innerHTML = newVar;
		}	
	})
}

function intsOnly(){
	var input = document.getElementById("ints");
	input.addEventListener("click", function(){
		if(document.getElementById("second").classList.contains('democlass')){
			var newVar = parseInt(value3.innerHTML).toFixed(0);
			value3.innerHTML = newVar;
			value.innerHTML = newVar;
		}
		else{
			var newVar = parseInt(value1.innerHTML);
			value1.innerHTML = newVar;
			value.innerHTML = newVar;
		}	
	})
}
function root(){
	var input = document.getElementById("squareBy");
	input.addEventListener("click", function(){
		if(document.getElementById("second").classList.contains('democlass')){
			value.innerHTML = value.innerHTML + "√";
		}
		else{
			value.innerHTML = value.innerHTML + "√";
		}	
	})
}
function workaround(){
	if(document.getElementById("second").classList.contains('democlass')){
			
		}
		else{
			
		}	
}
var equalsNu = document.getElementById('equals');
		equalsNu.addEventListener("click", function(){
			equals();
})
workaround();
hiFriend();
operators();
equals();
clearing();
backGs();
squared();
negative();
decimole();
squaredBy();
squareRoot();
intsOnly()
root();