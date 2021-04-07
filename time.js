function startTime() {

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);

document.getElementById("watch").innerHTML =  h + ":" + m + ":" + s; 
 
 var time = setTimeout(startTime, 500);
}


function checkTime(h) {
if (h < 10) {h = "0" + h};
return h;
} 

var myDate = new Date();
var currentHour = myDate.getHours();

 var msg;

   if (currentHour < 12)
     msg = 'Good Morning';
   else if(currentHour == 12)
	msg = 'Good Noon';
    else if (currentHour >= 12 && currentHour <= 17)
        msg = 'Good Afternoon';
    else if (currentHour >= 17 && currentHour <= 24)
        msg = 'Good Evening';

 document.getElementById('greeting').innerHTML =
        '<b>' + msg + '</b>';
 