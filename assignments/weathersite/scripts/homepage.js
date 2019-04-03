var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
   
    console.log(request.response);
    console.log(request.response.towns[0].yearFounded);
   
    document.getElementById('franklinyear').innerHTML = request.response.towns[0].yearFounded; 
    document.getElementById('greenvilleyear').innerHTML = request.response.towns[2].yearFounded;
    document.getElementById('springfieldyear').innerHTML = request.response.towns[6].yearFounded;

    document.getElementById('fpop').innerHTML = request.response.towns[0].currentPopulation;
    document.getElementById('frain').innerHTML = request.response.towns[0].averageRainfall;
    document.getElementById('gpop').innerHTML = request.response.towns[2].currentPopulation;
    document.getElementById('grain').innerHTML = request.response.towns[2].averageRainfall;
    document.getElementById('spop').innerHTML = request.response.towns[6].currentPopulation;
    document.getElementById('srain').innerHTML = request.response.towns[6].averageRainfall;

    document.getElementById('fmotto').innerHTML = request.response.towns[0].motto;
    document.getElementById('gmotto').innerHTML = request.response.towns[2].motto;
    document.getElementById('smotto').innerHTML = request.response.towns[6].motto;
}