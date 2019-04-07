var myObj, x;
myObj = {"name":"The Church of Jesus Christ of Latter-day Saints Gorordo Avenue, Barangay Lahug, Cebu City, 6000 Cebu, Philippines",
 "age":"(63) 32-230-1207", 
 "car":"philp@temp.com", 
 "rac":"Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
 "raco":"18 April 2006. Announced-14 November 2007. Groundbreaking-13 June 2010. ", 
 "dog":"M,W,F-(9am-8pm)", 
 "god":"Saturday, 13 April 2019. Monday, 15 July 2019 - Monday, 29 July 2019. Saturday, 12 October 2019. Tuesday, 24 December 2019. Wednesday, 25 December 2019. Tuesday, 31 December 2019"};
x = myObj.name;
y = myObj.age;
z = myObj.car;
a = myObj.rac;
b = myObj.raco;
c = myObj.dog;
d = myObj.god;
document.getElementById("address").innerHTML = x;
document.getElementById("dem").innerHTML = y;
document.getElementById("de").innerHTML = z;
document.getElementById("dev").innerHTML = a;
document.getElementById("devi").innerHTML = b;
document.getElementById("devil").innerHTML = c;
document.getElementById("deve").innerHTML = d;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=1717512&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
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

var myObj, navo;
myObj = {"name":"50 N Wells St Nauvoo IL 62354 United States",
 "age":"(1) 217-453-6252", 
 "car":"Navo@temp.org", 
 "rac":"Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
 "raco":"4 April 1999 Announced, 24 October 1999, Groundbreaking, 27 June 2002 ", 
 "dog":"M,W,F-(9am-8pm)", 
 "god":"Saturday, 6 April 2019. Monday, 29 April 2019 - Sunday, 12 May 2019. Saturday, 5 October 2019. Monday, 11 November 2019 - Monday, 25 November 2019. Wednesday, 27 November 2019 - Thursday, 28 November 2019. Wednesday, 25 December 2019"};
navo = myObj.name;
yar = myObj.age;
zer = myObj.car;
amo = myObj.rac;
bob = myObj.raco;
cat = myObj.dog;
ded = myObj.god;
document.getElementById("add").innerHTML = navo;
document.getElementById("med").innerHTML = yar;
document.getElementById("ed").innerHTML = zer;
document.getElementById("ved").innerHTML = amo;
document.getElementById("ived").innerHTML = bob;
document.getElementById("lived").innerHTML = cat;
document.getElementById("eved").innerHTML = ded;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4896861&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('dmuh').innerHTML = weather.main.humidity; 
    document.getElementById('serp').innerHTML = weather.main.pressure;
    document.getElementById('met').innerHTML = weather.main.temp;
    document.getElementById('xam').innerHTML = weather.main.temp_max;
    document.getElementById('nim').innerHTML = weather.main.temp_min;

}

var myObj, prvo;
myObj = {"name":"50 South University Ave Provo UT 84601 United States",
 "age":"(1) 801-343-2700", 
 "car":"prvo@temp.org", 
 "rac":"Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
 "raco":"4 April 1999 Announced, 24 October 1999, Groundbreaking, 27 June 2002 ", 
 "dog":"M,W,F-(9am-8pm)", 
 "god":"Saturday, 6 April 2019. Monday, 29 April 2019 - Sunday, 12 May 2019. Saturday, 5 October 2019. Monday, 11 November 2019 - Monday, 25 November 2019. Wednesday, 27 November 2019 - Thursday, 28 November 2019. Wednesday, 25 December 2019"};
prvo = myObj.name;
ray = myObj.age;
rez = myObj.car;
oma = myObj.rac;
boby = myObj.raco;
caty = myObj.dog;
dedy = myObj.god;
document.getElementById("addy").innerHTML = prvo;
document.getElementById("mede").innerHTML = ray;
document.getElementById("edu").innerHTML = rez;
document.getElementById("veda").innerHTML = oma;
document.getElementById("ivedy").innerHTML = boby;
document.getElementById("livede").innerHTML = caty;
document.getElementById("evedo").innerHTML = dedy;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('innj').innerHTML = weather.main.humidity; 
    document.getElementById('gooo').innerHTML = weather.main.pressure;
    document.getElementById('mettu').innerHTML = weather.main.temp;
    document.getElementById('xamer').innerHTML = weather.main.temp_max;
    document.getElementById('nimra').innerHTML = weather.main.temp_min;

}

var myObj, Sapp;
myObj = {"name":"1-6-1 Oyachi-Nishi etsu-ku Sapporo, Hokkaido 004-0042, Japan",
 "age":"(81) 11-890-8120", 
 "car":"japp@temp.org", 
 "rac":"Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
 "raco":"4 April 1999 Announced, 24 October 1999, Groundbreaking, 27 June 2002 ", 
 "dog":"M,W,F-(9am-8pm)", 
 "god":"Saturday, 6 April 2019. Monday, 29 April 2019 - Sunday, 12 May 2019. Saturday, 5 October 2019. Monday, 11 November 2019 - Monday, 25 November 2019. Wednesday, 27 November 2019 - Thursday, 28 November 2019. Wednesday, 25 December 2019"};
Sapp = myObj.name;
raven = myObj.age;
rezor = myObj.car;
omana = myObj.rac;
bobyer = myObj.raco;
catyln = myObj.dog;
dedyd = myObj.god;
document.getElementById("andy").innerHTML = Sapp;
document.getElementById("madde").innerHTML = raven;
document.getElementById("enadu").innerHTML = rezor;
document.getElementById("vedas").innerHTML = omana;
document.getElementById("slok").innerHTML = bobyer;
document.getElementById("swim").innerHTML = catyln;
document.getElementById("enjuy").innerHTML = dedyd;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2130404&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('rock').innerHTML = weather.main.humidity; 
    document.getElementById('thhh').innerHTML = weather.main.pressure;
    document.getElementById('bikoo').innerHTML = weather.main.temp;
    document.getElementById('brok').innerHTML = weather.main.temp_max;
    document.getElementById('lasnr').innerHTML = weather.main.temp_min;

}


// var requestURL = 'https://www.lds.org/temples/list';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
   
//     console.log(request.response);
//     console.log(request.response.temples[0].yearFounded);
   
//     document.getElementById('Philippines').innerHTML = request.response.temples[0].yearFounded; 
//     document.getElementById('greenvilleyear').innerHTML = request.response.towns[2].yearFounded;
//     document.getElementById('springfieldyear').innerHTML = request.response.towns[6].yearFounded;

//     document.getElementById('fpop').innerHTML = request.response.towns[0].currentPopulation;
//     document.getElementById('frain').innerHTML = request.response.towns[0].averageRainfall;
//     document.getElementById('gpop').innerHTML = request.response.towns[2].currentPopulation;
//     document.getElementById('grain').innerHTML = request.response.towns[2].averageRainfall;
//     document.getElementById('spop').innerHTML = request.response.towns[6].currentPopulation;
//     document.getElementById('srain').innerHTML = request.response.towns[6].averageRainfall;

//     document.getElementById('fmotto').innerHTML = request.response.towns[0].motto;
//     document.getElementById('gmotto').innerHTML = request.response.towns[2].motto;
//     document.getElementById('smotto').innerHTML = request.response.towns[6].motto;
// }