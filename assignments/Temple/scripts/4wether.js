var weatherRequest0 = new XMLHttpRequest();
weatherRequest0.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=1717512&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
weatherRequest0.send();


weatherRequest0.onload = function() {
   
    var weather = JSON.parse(weatherRequest0.responseText);
    console.log(weather);
    
    document.getElementById('humd').innerHTML = weather.main.humidity; 
    document.getElementById('pres').innerHTML = weather.main.pressure;
    document.getElementById('tem').innerHTML = weather.main.temp;
    document.getElementById('max').innerHTML = weather.main.temp_max;
    document.getElementById('min').innerHTML = weather.main.temp_min;

}

var weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4896861&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
weatherRequest1.send();


weatherRequest1.onload = function() {
   
    var weather = JSON.parse(weatherRequest1.responseText);
    console.log(weather);
    
    document.getElementById('dmuh').innerHTML = weather.main.humidity; 
    document.getElementById('serp').innerHTML = weather.main.pressure;
    document.getElementById('met').innerHTML = weather.main.temp;
    document.getElementById('xam').innerHTML = weather.main.temp_max;
    document.getElementById('nim').innerHTML = weather.main.temp_min;

}

var weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
weatherRequest2.send();


weatherRequest2.onload = function() {
   
    var weather = JSON.parse(weatherRequest2.responseText);
    console.log(weather);
    
    document.getElementById('innj').innerHTML = weather.main.humidity; 
    document.getElementById('gooo').innerHTML = weather.main.pressure;
    document.getElementById('mettu').innerHTML = weather.main.temp;
    document.getElementById('xamer').innerHTML = weather.main.temp_max;
    document.getElementById('nimra').innerHTML = weather.main.temp_min;

}

var weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2130404&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
weatherRequest3.send();


weatherRequest3.onload = function() {
   
    var weather = JSON.parse(weatherRequest3.responseText);
    console.log(weather);
    
    document.getElementById('rock').innerHTML = weather.main.humidity; 
    document.getElementById('thhh').innerHTML = weather.main.pressure;
    document.getElementById('bikoo').innerHTML = weather.main.temp;
    document.getElementById('brok').innerHTML = weather.main.temp_max;
    document.getElementById('lasnr').innerHTML = weather.main.temp_min;

}