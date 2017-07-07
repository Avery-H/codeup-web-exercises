var food = $('#sneekFood');
var cont = $('#canvas');
var sneek = $('#sneek');
var left;//65-37
var right;//68-39
var up;//87-38
var down;//83-40
var safe;
var sneekP = sneek.position(); 
var foodArray =[[],[]];
$(document).keydown(function(event){
	//left event
	if((event.keyCode == 65) || (event.keyCode == 37)){
		safe = "left";
		move("left");
	}
	//right event
	else if ((event.keyCode == 68) || (event.keyCode == 39)){
		safe = "right";
		move("right");
	}
	//up event
	else if ((event.keyCode == 87) || (event.keyCode == 38)){
		safe = "up";
		move("up");
	}
	//down event
	else if ((event.keyCode == 83) || (event.keyCode == 4)){
		safe = "down";
		move("down");
	}
	else if (event.keyCode == 32){
		alert("pause");
	}
});

function arrayPopulator(){
	var b = 71;
	var a = 19;
	foodArray.forEach(function(smallArray){
		if (smallArray == 0){
			for(var i = 0; i <= a; i++){
		smallArray.push(b);
		b += 25;
	}
	a = 27;
	b = 59;
}
	});
}
arrayPopulator();
//height-71 x-59,84,109,134,159,184....734
//x-59, height-96,121,146....546
function checkOut(){
	sneekP = sneek.position();
	console.log(sneekP.left);
	console.log(sneekP.top);
		if ((sneekP.left > 734) || (sneekP.left < 50) || (sneekP.top > 570) || (sneekP.top < 70)){
			gameOver();
		}
}

function gameOver(){
	alert("You lost!");
	location.reload();
}
function food1(){
	var placement1 = Math.floor(Math.random()* 19);
	var placement2 = Math.floor(Math.random()* 27);
	var foodY = foodArray[0][placement1];
	console.log(foodY);
	var foodX = foodArray[1][placement2];
	console.log(foodX);
    food.css.left = foodX + "px";
    food.css.top = foodY + "px";
}

food1();

function move(a){
		console.log("some");
			switch (a){
				case "left":
				if ((safe != "left") && (safe != undefined)){
					break;
				} 
				safe = "left";
				sneek.animate({left: "-=25"},0,function(){
						checkOut();
						setTimeout(function(){
							move("left");
						},500);
					});
				break;
				case "right":
				if ((safe != "right") && (safe != undefined)){
					break;
				} 
				safe = "right";
				sneek.animate({left: "+=25"},0,function(){
					checkOut();
						setTimeout(function(){
							move("right");
						},500);
					});
				break;
				case "up":
				if((safe != "up") && (safe != undefined)){
					break;
				} 
				safe = "up";
				sneek.animate({top: "-=25"},0,function(){
					checkOut();
						setTimeout(function(){
							move("up");
						},500);
					});
				break;
				case "down":
				if ((safe != "down") && (safe != undefined)){
					break;
				} 
				safe = "down";
				sneek.animate({top: "+=25"},0,function(){
					checkOut();
						setTimeout(function(){
							move("down");
						},500);
					});
				break;
			}
}