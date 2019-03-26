//step1 get tempetature from the page//
var t = 10;

//step 2: get the windspeed from the page
var s = 10;

//step 3: do the calculation
var windspeed = (35.75 * s**0.16 + 0.4275 * t * s**0.16 + 35.74 + 0.6215 * t)
//step 4: use document.getElementById to put the windchill back on the page
document.getElementById("windchill").innerHTML = windspeed.toFixed(2)

