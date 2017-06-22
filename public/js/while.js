// // var x = 2, i = 1;
// // while(i <= 16){
// // 	console.log(x);
// // 	x *= 2;
// // 	i++;
// // }

//  var allCones = Math.floor(Math.random() * 50) + 50;
 

//  do {
//  	var cones = Math.floor(Math.random() * 5) + 1;
//  	if(cones > allCones){
//  		console.log("connot sell, not enough ice cream");
//  		continue;
//  	}
//  	allCones -= cones;
//  	console.log(cones + "cones sold...");
//  	console.log(allCones);
//  }while (allCones !== 0)
//  console.log("yay sold em all!");

// var numb = prompt("Give me a number between 1-10");
// if(numb > 0 && numb < 11){
// 	for(var x = 1; x <= 10; x++){
// 		var newNumb = numb * x;
// 		console.log(numb + "X" + x + "=" + newNumb);
// 	}
// }
// else{
// 	alert("Dont be that way");
// }

// for(var x = 0; x < 10; x++){
// 	var rand = Math.floor(Math.random() * 180) + 20;
// 	var evod = rand % 2;
// 	if(evod == 0){
// 		console.log(rand + " is Even");
// 	}
// 	else{
// 		console.log(rand + " is Odd");	
// 	}
// }

for(var x = 1; x <= 10; x++){
	var k ="";
	for(var i = 0; i < x; i++){
	k += x % 10;
}
console.log(k);
}

// for(var x = 100; x > 0;x -=5){
// 	console.log(x);
	
// // }
// var x = 1;
// while(x > 0){
// var numb = prompt("Give me a number between 1-50");
// if (numb > 0 && numb <= 50){
// 	break;
// }
// }
// for (var i = 1; i <= 50; i++){
// 	var odd = i % 2;
// 	if(odd == 0){
// 	continue;
// }
// 	else{
// 		if(i == numb){
// 			console.log("yikes! skipping number: " + numb);
// 			continue;
// 		}
// 	console.log("Here is an odd number: " + i);
// 	}
	
// }

