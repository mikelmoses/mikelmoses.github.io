
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('humd').innerHTML = weather.main.humidity; 
    document.getElementById('pres').innerHTML = weather.main.pressure;
    document.getElementById('tem').innerHTML = weather.main.temp;
    document.getElementById('max').innerHTML = weather.main.temp_max;
    document.getElementById('min').innerHTML = weather.main.temp_min;

}

var request5day = new XMLHttpRequest();
request5day.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request5day.send();


request5day.onload = function() {
   
    var weather5day = JSON.parse(request5day.responseText);
    console.log(weather5day);
    
    document.getElementById('Mon').innerHTML = weather5day.list[0].main.temp; 
    document.getElementById('Tue').innerHTML = weather5day.list[1].main.temp;
    document.getElementById('Wed').innerHTML = weather5day.list[2].main.temp;
    document.getElementById('Thus').innerHTML = weather5day.list[3].main.temp;
    document.getElementById('Fri').innerHTML = weather5day.list[4].main.temp;
    document.getElementById('Sat').innerHTML = weather5day.list[5].main.temp;

}

