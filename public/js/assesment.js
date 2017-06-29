"use strict";
function isNegative(x){
	if (x >= 0){
		return false;
	}
	else if (x < 0){
		return true;
	}
	else{
		return NaN;
	}
}

function average(x){
	var y = 0;
	for (var i = 0; i < x.length; i++)
	{
		y = y + x[i];
	}
	var z = y / x.length;
	return z;
}

function countOdds(x){
	var y = 0;
	for (var i = 0; i < x.length; i++)
	{
		if((x[i] % 2) == 1){
			y = y + 1;
		}
	}
	return y;
}

function convertNameToObject(x){
	var arr = x.split(' ');
	var obj = new Object();
	obj.firstName = arr[0];
	obj.lastName = arr[1];
	return obj;
}
function fiveTo(x){
	var y = [];
	for (var i = 5; i < x; i++){
		y.push(i);
	}
	return y;
}

function upperCaseLastNames(x){
for(var i = 0; i < x.length; i++){
	x[i].lastName = x[i].lastName.charAt(0).toUpperCase() + x[i].lastName.slice(1);
	
}
return x;
}
