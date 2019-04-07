var myObj, x;
myObj = { name: "Gorordo Avenue, Barangay Lahug, Cebu City, 6000 Cebu, Philippines", 
age: "(63) 32-230-1207", 
city: "Phep@lds.org", 
ser: "Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
her: "18 April 2006 - Announced, 14 November 2007 - Groundbreaking, 13 June 2010", 
jaan: "M, W, F - 11am-9pm", 
heer: "Saturday, 13 April 2019 . Monday, 15 July 2019 - Monday, 29 July 2019. Saturday, 12 October 2019. Tuesday, 24 December 2019. Wednesday, 25 December 2019. Tuesday, 31 December 2019" };
x = myObj.name;
y = myObj.age;
z = myObj.city;
a = myObj.ser;
b = myObj.her;
c = myObj.jaan;
d = myObj.heer;
document.getElementById("demo").innerHTML = x;
document.getElementById("dem").innerHTML = y;
document.getElementById("med").innerHTML = z;
document.getElementById("door").innerHTML = a;
document.getElementById("noor").innerHTML = b;
document.getElementById("nana").innerHTML = c;
document.getElementById("par").innerHTML = d;


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

var myObj, y;
myObj = { jaja: "50 N Wells St Nauvoo IL 62354 United States", 
svjsdv: "(1) 217-453-6252", 
jeye: "Navoo@lds.org", 
ieye: "Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
pget: "18 April 2006 - Announced, 14 November 2007 - Groundbreaking, 13 June 2010", 
uawt: "M, W, F - 11am-9pm", 
irtt: "Saturday, 13 April 2019 . Monday, 15 July 2019 - Monday, 29 July 2019. Saturday, 12 October 2019. Tuesday, 24 December 2019. Wednesday, 25 December 2019. Tuesday, 31 December 2019" };
xe = myObj.jaja;
ya = myObj.svjsdv;
ze = myObj.jeye;
ax = myObj.ieye;
bf = myObj.pget;
cv = myObj.uawt;
dg = myObj.irtt;
document.getElementById("medo").innerHTML = xe;
document.getElementById("din").innerHTML = ya;
document.getElementById("fo").innerHTML = ze;
document.getElementById("hlo").innerHTML = ax;
document.getElementById("spl").innerHTML = bf;
document.getElementById("hye").innerHTML = cv;
document.getElementById("uri").innerHTML = dg;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4896861&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('veer').innerHTML = weather.main.humidity; 
    document.getElementById('roar').innerHTML = weather.main.pressure;
    document.getElementById('term').innerHTML = weather.main.temp;
    document.getElementById('uimm').innerHTML = weather.main.temp_max;
    document.getElementById('groo').innerHTML = weather.main.temp_min;

}

var myObj, z;
myObj = { one: "50 South University Ave Provo UT 84601 United States", 
two: "(1) 801-343-2700", 
thre: "prvoo@lds.org", 
four: "Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
five: "18 April 2006 - Announced, 14 November 2007 - Groundbreaking, 13 June 2010", 
six: "M, W, F - 11am-9pm", 
seve: "Saturday, 13 April 2019 . Monday, 15 July 2019 - Monday, 29 July 2019. Saturday, 12 October 2019. Tuesday, 24 December 2019. Wednesday, 25 December 2019. Tuesday, 31 December 2019" };
xeq = myObj.one;
yaq = myObj.two;
zeq = myObj.thre;
axq = myObj.four;
bfq = myObj.five;
cvq = myObj.six;
dgq = myObj.seve;
document.getElementById("jan").innerHTML = xeq;
document.getElementById("feb").innerHTML = yaq;
document.getElementById("mar").innerHTML = zeq;
document.getElementById("apr").innerHTML = axq;
document.getElementById("may").innerHTML = bfq;
document.getElementById("jun").innerHTML = cvq;
document.getElementById("jul").innerHTML = dgq;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('ten').innerHTML = weather.main.humidity; 
    document.getElementById('ton').innerHTML = weather.main.pressure;
    document.getElementById('taty').innerHTML = weather.main.temp;
    document.getElementById('foty').innerHTML = weather.main.temp_max;
    document.getElementById('fity').innerHTML = weather.main.temp_min;

}

var myObj, d;
myObj = { elev: "1-6-1 Oyachi-Nishi Atsubetsu-ku Sapporo, Hokkaido 004-0042, Japan", 
twel: "(81) 11-890-8120", 
thet: "sapparoo@lds.org", 
xixe: "Clothing rental available No cafeteria available Patron housing available Distribution center nearby", 
uiikk: "18 April 2006 - Announced, 14 November 2007 - Groundbreaking, 13 June 2010", 
quio: "M, W, F - 11am-9pm", 
deten: "Saturday, 13 April 2019 . Monday, 15 July 2019 - Monday, 29 July 2019. Saturday, 12 October 2019. Tuesday, 24 December 2019. Wednesday, 25 December 2019. Tuesday, 31 December 2019" };
xeq = myObj.elev;
yaq = myObj.twel;
zeq = myObj.thet;
axq = myObj.xixe;
bfq = myObj.uiikk;
cvq = myObj.quio;
dgq = myObj.deten;
document.getElementById("ekk").innerHTML = xeq;
document.getElementById("dho").innerHTML = yaq;
document.getElementById("then").innerHTML = zeq;
document.getElementById("char").innerHTML = axq;
document.getElementById("panc").innerHTML = bfq;
document.getElementById("che").innerHTML = cvq;
document.getElementById("saat").innerHTML = dgq;


var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2130404&appid=3da6c32fc144856c7600d0fa1baf603d&units=imperial', true);
request.send();


request.onload = function() {
   
    var weather = JSON.parse(request.responseText);
    console.log(weather);
    
    document.getElementById('aat').innerHTML = weather.main.humidity; 
    document.getElementById('nou').innerHTML = weather.main.pressure;
    document.getElementById('gyra').innerHTML = weather.main.temp;
    document.getElementById('gyra').innerHTML = weather.main.temp_max;
    document.getElementById('bara').innerHTML = weather.main.temp_min;

}