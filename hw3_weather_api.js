function getCity() {
    var city = document.getElementById("city").value;

    var xml = new XMLHttpRequest();
    xml.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d0a795441d5c7d4d04fe04fe36727f8f&units=metric", false);
    xml.send();

    var data = JSON.parse(xml.response);

    var weather = data.weather[0].main;
    var temp = data.main.temp;
    var wind = data.wind.speed;


    document.getElementById("location").innerHTML = city;
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temp").innerHTML = temp + " °C";
    document.getElementById("wind").innerHTML = wind + " km/h";
    document.getElementById("content").style.display = "block";
}
