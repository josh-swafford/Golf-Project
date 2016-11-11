var options = {
    enableHighAccuracy: true
};

navigator.geolocation.getCurrentPosition(success, error, options);

function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var weatherURL= "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + '&APPID=df5a1ee4bbb1c77e60814e0ef2e038ac';
    $.getJSON(weatherURL, JSONsuccess);
}


function error(error) {

}


function JSONsuccess(data) {
    $("#weather").text(data.weather);
}