 function first(var numbers = document.getElementsByClassName("numbers");
         for (var i = 0; i < numbers.length; i++){
         	numbers[i].addEventListener("click", function(){
				var numValue = this.getAttribute("data-value");
				var value1 = document.getElementById("first");
        		value1.innerHTML += numValue;
          	})
});

