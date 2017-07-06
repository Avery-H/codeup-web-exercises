// $(document).ready(function() {
    	"use strict";
function fillData(data){
	 for(var i = 0; i <= 3; i++){
    	switch(i){
    		case 1:
    		$('#dayOne > .temp').html(KtoF(data.list[0].main.temp_max)+"/"+(KtoF(data.list[0].main.temp_min)));
    		$('#dayOne > .clouds').html("Clouds: " + data.list[0].clouds.all+ "%");
    		$('#dayOne > .humidity').html("Humidity: " + data.list[0].main.humidity);
    		$('#dayOne > .wind').html("Wind: " +data.list[0].wind.speed);
    		$('#dayOne > .pressure').html("Pressure: " +data.list[0].main.pressure);
    		break;
    		case 2:
    		$('#dayTwo > .temp').html(KtoF(data.list[8].main.temp_max)+"/"+(KtoF(data.list[0].main.temp_min)));
    		$('#dayTwo > .clouds').html("Clouds: " + data.list[8].clouds.all+ "%");
    		$('#dayTwo > .humidity').html("Humidity: " + data.list[8].main.humidity);
    		$('#dayTwo > .wind').html("Wind: " +data.list[8].wind.speed);
    		$('#dayTwo > .pressure').html("Pressure: " +data.list[8].main.pressure);
    		break;
    		case 3:
    		$('#dayThree > .temp').html(KtoF(data.list[16].main.temp_max)+"/"+(KtoF(data.list[0].main.temp_min)));
    		$('#dayThree > .clouds').html("Clouds: " + data.list[16].clouds.all+ "%");
    		$('#dayThree > .humidity').html("Humidity: " + data.list[16].main.humidity);
    		$('#dayThree > .wind').html("Wind: " +data.list[16].wind.speed);
    		$('#dayThree > .pressure').html("Pressure: " +data.list[16].main.pressure);
    		break;
    	}
}
};
    $.get("http://api.openweathermap.org/data/2.5/forecast?id={4726206}", {
    APPID: "74bb16782918053ee4b47ab50e1bfb52",
    q:     "San Antonio, TX"
}).done(function(data) {
    console.log(data);
   	fillData(data);
    }
);

function KtoF(a){
	var b = a * (9/5) - 459.67;
	return b.toFixed(1);
}
function findWet(a,b){
	var long = parseInt(a);
	var lat = parseInt(b);
	console.log(long);
	$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"", {
    APPID: "74bb16782918053ee4b47ab50e1bfb52"
}).done(function(data) {
    console.log(data);
   	fillData(data);
    }
);
};
 // Set our map options
    var mapOptions = {
            // Set the zoom level
            zoom: 19,

            // This sets the center of the map at our location
            center: {
                lat:  29.426791,
                lng: -98.489602
            }
        };
   
        // Render the map
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.addListener('click', function(e) {
    placeMarker(e.latLng, map);
  });
    var marker;
    var x = 0;
  function placeMarker(position, map) {
    if(x >= 1){
    	marker.setMap(null);
	}
	x++;
    marker = new google.maps.Marker({
      position: position,
      map: map
    });  
    map.panTo(position);
    console.log(position);
    findWet(position.lng(),position.lat());
  }

// });