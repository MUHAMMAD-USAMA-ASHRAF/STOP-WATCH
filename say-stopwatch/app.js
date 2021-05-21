var msec = 00;
var sec = 00;
var min = 00;
var hour = 00;


var msechead = document.getElementById("msec");
var sechead = document.getElementById("sec");
var minhead = document.getElementById("min");
var hourhead = document.getElementById("hour");
var btndis = document.getElementById('disabled')
var interval;


function timer() {
    msec++;
    msechead.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        sechead.innerHTML = sec;
        msec = 00;

    } else if (sec == 60) {
        min++;
        minhead.innerHTML = min;
        sec = 00
    } else if (min >= 60) {
        hour++;
        hourhead.innerHTML = hour;
        min = 00;

    }
}


function start() {
    interval = setInterval(timer, 10)
    btndis.disabled = true
}

function pause() {
    clearInterval(interval);
    btndis.disabled = false
}

function reset() {
    msec = 00;
    sec = 00;
    min = 00;
    hour = 00;

    msechead.innerHTML = msec;
    sechead.innerHTML = sec;
    minhead.innerHTML = min;
    hourhead.innerHTML = hour;
    clearInterval(interval);
    btndis.disabled = false
}