"use strict";
function hiFriend() {
        var numbers = document.getElementsByClassName("numbers");
         for (var i = 0; i < numbers.length; i++){
         	numbers[i].addEventListener("click", function(){
				var numValue = this.getAttribute("data-value");
				var IDFK = document.getElementById("trueFirst");
				var value3 = document.getElementById("third");
				var value1 = document.getElementById("first");
        		if(document.getElementById("second").classList.contains('democlass')){
        		value3.innerHTML += numValue;
        		IDFK.innerHTML += numValue;
        	}else{
        		value1.innerHTML += numValue;
        		IDFK.innerHTML += numValue;
        	}
          	})
}
}
function operators(){
		  var operators = document.getElementsByClassName("operator");
		     for (var x = 0; x < operators.length; x++){
         		operators[x].addEventListener("click", function(){
				var newVar = this.getAttribute("data-value");
				var value2 = document.getElementById("second");
        		value2.innerHTML = newVar;
        		var value1 = document.getElementById("first").innerHTML;
        		document.getElementById("second").setAttribute("class", "democlass");
        		var IDFK = document.getElementById("trueFirst");
        		document.getElementById("trueFirst").setAttribute("placeholder", "" + value1 + "");
        		IDFK.innerHTML = "";
          	})
 }
}
function clearing(){
				var value1 = document.getElementById("first");
        		value1.innerHTML = "";
				var value2 = document.getElementById("second");
        		value2.innerHTML = "";
				var value3 = document.getElementById("third");
        		value3.innerHTML = "";
        		var IDFK = document.getElementById("trueFirst");
        		IDFK.innerHTML = "";
        		document.getElementById("second").removeAttribute("class");	
        		document.getElementById("trueFirst").setAttribute("placeholder", "Calc like you're Genghis Khan");
}

function notQuiteClearing(){
				
				var value2 = document.getElementById("second");
        		value2.innerHTML = "";
				var value3 = document.getElementById("third");
        		value3.innerHTML = "";
        		document.getElementById("second").removeAttribute("class");	
        		
}
		var clear = document.getElementById('clear');
			clear.addEventListener("click", function(){
				clearing();
			})
			
function equals(){
		var equals = document.getElementById('equals');
			equals.addEventListener("click", function(){
				var valueFirst = document.getElementById("first").innerHTML;
				var valueSecond = document.getElementById("third").innerHTML;
				var operator1 = document.getElementById("second").innerHTML;
				var theReturn = document.getElementById("trueFirst");
				var valueFirst1 = document.getElementById("first");
				switch (operator1){
					case "+":
						var final = Number(valueFirst) + Number(valueSecond);						
						notQuiteClearing();
						theReturn.innerHTML = final;
						valueFirst1.innerHTML = final;
					break;
					case "-":
						var final = Number(valueFirst) - Number(valueSecond);
						notQuiteClearing();
						theReturn.innerHTML = final;
						valueFirst1.innerHTML = final;
					break;
					case "*":
						var final = Number(valueFirst) * Number(valueSecond);
						notQuiteClearing();
						theReturn.innerHTML = final;
						valueFirst1.innerHTML = final;
					break;
					case "/":
					var final = Number(valueFirst) / Number(valueSecond);
						notQuiteClearing();
						theReturn.innerHTML = final;
						valueFirst1.innerHTML = final;
					break;
				}
			})
}
function backGs(){
var bGrounds = ['../img/dynamic_back/back1.jpg','../img/dynamic_back/back2.jpg','../img/dynamic_back/back3.jpg','../img/dynamic_back/back4.jpg','../img/dynamic_back/back5.jpg','../img/dynamic_back/back6.jpg','../img/dynamic_back/back7.jpg','../img/dynamic_back/back8.jpg','../img/dynamic_back/back9.jpg','../img/dynamic_back/back10.jpg','../img/dynamic_back/back11.jpg','../img/dynamic_back/back12.jpg','../img/dynamic_back/back13.jpg','../img/dynamic_back/back14.jpg','../img/dynamic_back/back15.jpg','../img/dynamic_back/back16.jpg','../img/dynamic_back/back17.jpg','../img/dynamic_back/back18.jpg','../img/dynamic_back/back19.jpg','../img/dynamic_back/back20.jpg','../img/dynamic_back/back21.jpg','../img/dynamic_back/back22.jpg','../img/dynamic_back/back23.jpg','../img/dynamic_back/back24.jpg','../img/dynamic_back/back25.jpg','../img/dynamic_back/back26.jpg','../img/dynamic_back/back27.jpg','../img/dynamic_back/back28.jpg','../img/dynamic_back/back29.jpg','../img/dynamic_back/back30.jpg','../img/dynamic_back/back31.jpg','../img/dynamic_back/back32.jpg','../img/dynamic_back/back33.jpg','../img/dynamic_back/back34.jpg','../img/dynamic_back/back35.jpg','../img/dynamic_back/back36.jpg','../img/dynamic_back/back37.jpg'];
var randomBackgroundIndex = bGrounds[Math.floor(Math.random()*bGrounds.length)];
document.body.style.backgroundImage = "url('"  + randomBackgroundIndex + "')";
}
function squared(){
	var input = document.getElementById("squared");
	input.addEventListener("click", function(){

			})
}
function negative(){
	var input = document.getElementById("neg");
	input.addEventListener("click", function(){
	var value1 = document.getElementById("trueFirst").innerHTML;			
			})
}
function decimole(){
	var input = document.getElementById("dec");
	input.addEventListener("click", function(){
	var value1 = document.getElementById("trueFirst").innerHTML;			
			})
}
function squaredBy(){
	var input = document.getElementById("power");
	input.addEventListener("click", function(){
	var value1 = document.getElementById("trueFirst").innerHTML;			
			})
}
hiFriend();
operators();
equals();
backGs();
squared();
negative();
decimole();
squaredBy();


