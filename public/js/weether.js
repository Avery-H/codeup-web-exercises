// $(document).ready(function() {
    	"use strict";
function fillData(data){
	$('h2').html(data.city.name);
	//sunny
	if ((data.list[0].weather[0].icon == "01d") || (data.list[0].weather[0].icon == "01n")){
		$('body').css({
			"background-image": "url(img/gif1.gif)",
			"background-size": "100% 120%"

		});
	}
	// Rainy
	else if ((data.list[0].weather[0].icon == "09d") || (data.list[0].weather[0].icon == "09n") || (data.list[0].weather[0].icon == "10d") || (data.list[0].weather[0].icon == "10n"))
	{
		$('body').css("background-image", "url(img/gif2.gif)");
	}
	//Stormy
	else if ((data.list[0].weather[0].icon == "11d") || (data.list[0].weather[0].icon == "11n")){
		$('body').css("background-image", "url(img/gif4.gif)");
	}
	//snowing
	else if ((data.list[0].weather[0].icon == "13d") || (data.list[0].weather[0].icon == "13n")){
		$('body').css("background-image", "url(img/gif11.gif)");
	}
	// misty
	else if ((data.list[0].weather[0].icon == "50d") || (data.list[0].weather[0].icon == "50d")){
		$('body').css("background-image", "url(img/source.gif)");
	}
	// Cloudy
	else {
		$('body').css("background-image", "url(img/giphy.gif)");
	}
	 for(var i = 0; i <= 3; i++){
    	switch(i){
    		case 1:
    		$('#dayOne > .temp').html(KtoF(data.list[0].main.temp_max)+"º/"+(KtoF(data.list[0].main.temp_min))+"º");
    		$('#dayOne > .clouds').html("Clouds: " + data.list[0].clouds.all+ "%");
    		$('#dayOne > .duck').html('<img src="http://openweathermap.org/img/w/'+data.list[0].weather[0].icon+'.png">');
    		$('#dayOne > .suck').html(data.list[0].weather[0].description);
    		$('#dayOne > .humidity').html("Humidity: " + data.list[0].main.humidity);
    		$('#dayOne > .wind').html("Wind: " +data.list[0].wind.speed);
    		$('#dayOne > .pressure').html("Pressure: " +data.list[0].main.pressure);
    		break;
    		case 2:
    		$('#dayTwo > .temp').html(KtoF(data.list[8].main.temp_max)+"º/"+(KtoF(data.list[8].main.temp_min))+"º");
    		$('#dayTwo > .clouds').html("Clouds: " + data.list[8].clouds.all+ "%");
    		$('#dayTwo > .duck').html('<img src="http://openweathermap.org/img/w/'+data.list[8].weather[0].icon+'.png">');
    		$('#dayTwo > .suck').html(data.list[8].weather[0].description);
    		$('#dayTwo > .humidity').html("Humidity: " + data.list[8].main.humidity);
    		$('#dayTwo > .wind').html("Wind: " +data.list[8].wind.speed);
    		$('#dayTwo > .pressure').html("Pressure: " +data.list[8].main.pressure);
    		break;
    		case 3:
    		$('#dayThree > .temp').html(KtoF(data.list[16].main.temp_max)+"º/"+(KtoF(data.list[16].main.temp_min)+"º"));
    		$('#dayThree > .clouds').html("Clouds: " + data.list[16].clouds.all+ "%");
    		$('#dayThree > .duck').html('<img src="http://openweathermap.org/img/w/'+data.list[16].weather[0].icon+'.png">');
    		$('#dayThree > .suck').html(data.list[16].weather[0].description);
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
   	fillData(data);
    }
);

function KtoF(a){
	var b = a * (9/5) - 459.67;
	return b.toFixed(1);
}
function findWet(a,b){
	var long = Number(a);
	var lat = Number(b);
	$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"", {
    APPID: "74bb16782918053ee4b47ab50e1bfb52"
}).done(function(data) {
   	fillData(data);
   	console.log(data);
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
      map: map,
      draggable: true
    });  
    map.panTo(position);
    findWet(position.lng(),position.lat());
  }

// });