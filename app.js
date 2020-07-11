var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var btn = document.getElementById("start");
var laps = document.getElementById("laps");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++;
        secHeading.innerHTML = "0" + sec;
        if(sec >= 10){
            secHeading.innerHTML = sec
        }
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = "0" + min;
        if(min >= 10){
            minHeading.innerHTML = min;
        }
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer, 10);
    btn.disabled = true;
}

function stop(){
    clearInterval(interval);
    btn.disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "0" + min;
    secHeading.innerHTML = "0" + sec;
    msecHeading.innerHTML = "0" + msec;
    clearInterval(interval);
    btn.disabled = false;
    laps.innerHTML = "";
}

function lap() {
    laps.innerHTML += "<li class='list-group-item mt-1'>" + min + ":" + sec + ":" + msec + "</li>";
}