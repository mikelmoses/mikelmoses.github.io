var myObj, x;
myObj = {"name":"Busitema University, Busitema, 2007",
 "age":"Gulu University, Gulu, 2004", 
 "car":"Kabale University, Kabale, 2001", 
 "rac":"Kyambogo University, Kyambogo, 2003", 
 "raco":"Lira University, Lira, 2012", 
 "dog":"Makerere University, Makerere, 1922", 
 "god":"Makerere University Business School, Nakawa, 1997",
 "rat":"Mbarara University of Science and Technology, Mbarara, 1989",
 "bat":"Muni University, Arua, 2014",
 "man":"Soroti University, Soroti, 2015"};
x = myObj.name;
y = myObj.age;
z = myObj.car;
a = myObj.rac;
b = myObj.raco;
c = myObj.dog;
d = myObj.god;
e = myObj.rat;
f = myObj.bat;
g = myObj.man;
document.getElementById("demo").innerHTML = x;
document.getElementById("dem").innerHTML = y;
document.getElementById("med").innerHTML = z;
document.getElementById("door").innerHTML = a;
document.getElementById("noor").innerHTML = b;
document.getElementById("nana").innerHTML = c;
document.getElementById("par").innerHTML = d;
document.getElementById("var").innerHTML = e;
document.getElementById("nar").innerHTML = f;
document.getElementById("muo").innerHTML = g;

var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2344415&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
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