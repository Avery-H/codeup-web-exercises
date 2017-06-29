(function(){
var x = 0;
var wins1 = 0;
var wins2 = 0;
var tttArray = [[0,0,0],[0,0,0],[0,0,0]];
$('.g').click(function(){
	var row = $(this).attr("data-row");
	var col = $(this).attr("data-col");
	if (x == 0){
		$(this).css('background-color','red');
		$(this).css('pointer-events','none');
		x += 1;
		switch(row){
			case"1":
				switch(col){
					case"1":
						tttArray[0][0] = 1;
					break;
					case"2":
						tttArray[0][1] = 1;
					break;
					case"3":
						tttArray[0][2] = 1;
					break;
				}
			break;
			case"2":
				switch(col){
					case"1":
						tttArray[1][0] = 1;
					break;
					case"2":
						tttArray[1][1] = 1;
					break;
					case"3":
						tttArray[1][2] = 1;
					break;
				}
			break;
			case"3":
				switch(col){
					case"1":
						tttArray[2][0] = 1;
					break;
					case"2":
						tttArray[2][1] = 1;
					break;
					case"3":
						tttArray[2][2] = 1;
					break;
				}
			break;
		}
		$(this).data('info', 1);
	}
	else{
		$(this).css('background-color','blue');
		$(this).css('pointer-events','none');
		x -= 1;
		switch(row){
			case"1":
				switch(col){
					case"1":
						tttArray[0][0] = 2;
					break;
					case"2":
						tttArray[0][1] = 2;
					break;
					case"3":
						tttArray[0][2] = 2;
					break;
				}
			break;
			case"2":
				switch(col){
					case"1":
						tttArray[1][0] = 2;
					break;
					case"2":
						tttArray[1][1] = 2;
					break;
					case"3":
						tttArray[1][2] = 2;
					break;
				}
			break;
			case"3":
				switch(col){
					case"1":
						tttArray[2][0] = 2;
					break;
					case"2":
						tttArray[2][1] = 2;
					break;
					case"3":
						tttArray[2][2] = 2;
					break;
				}
			break;
		}
	}	
if((tttArray[0][0] == 1 && tttArray[0][1] == 1 && tttArray[0][2] == 1/*row1*/) || (tttArray[1][0] == 1 && tttArray[1][1] == 1 && tttArray[1][2] == 1/*row2*/) || (tttArray[2][0] == 1 && tttArray[2][1] == 1 && tttArray[2][2] == 1/*row3*/) || (tttArray[0][0] == 1 && tttArray[1][0] == 1 && tttArray[2][0] == 1/*col1*/) || (tttArray[0][1] == 1 && tttArray[1][1] == 1 && tttArray[2][1] == 1/*col2*/) || (tttArray[0][2] == 1 && tttArray[1][2] == 1 && tttArray[2][2] == 1/*col3*/) || (tttArray[0][0] == 1 && tttArray[1][1] == 1 && tttArray[2][2] == 1/*dia1*/) || (tttArray[0][2] == 1 && tttArray[1][1] == 1 && tttArray[2][0] == 1/*dia2*/)){
		victory(1);
	}
if((tttArray[0][0] == 2 && tttArray[0][1] == 2 && tttArray[0][2] == 2/*row1*/) || (tttArray[1][0] == 2 && tttArray[1][1] == 2 && tttArray[1][2] == 2/*row2*/) || (tttArray[2][0] == 2 && tttArray[2][1] == 2 && tttArray[2][2] == 2/*row3*/) || (tttArray[0][0] == 2 && tttArray[1][0] == 2 && tttArray[2][0] == 2/*col1*/) || (tttArray[0][1] == 2 && tttArray[1][1] == 2 && tttArray[2][1] == 2/*col2*/) || (tttArray[0][2] == 2 && tttArray[1][2] == 2 && tttArray[2][2] == 2/*col3*/) || (tttArray[0][0] == 2 && tttArray[1][1] == 2 && tttArray[2][2] == 2/*dia1*/) || (tttArray[0][2] == 2 && tttArray[1][1] == 2 && tttArray[2][0] == 2/*dia2*/)){
		victory(2);
	}
});
$('.g').hover(
	function(){
		$(this).css('opacity','.5');
	},
	function(){
		$(this).css('opacity','1');
	}
);
$('#reset').click(function(){
	$('.g').removeData('info');
	$('.g').css({'background-color':'grey', 'pointer-events' : ''});
	tttArray = [[0,0,0],[0,0,0],[0,0,0]];
})
function victory(a){
	$('.g').css('pointer-events','none');
	if(a == 1){
		wins1++;
		alert("player 1 wins!");
		$('#scr1').html("score "+wins1);
	}
	else{
		wins2++;
		alert("player 2 wins!");
		$('#scr2').html(wins2 +" score");
	}
}

})();