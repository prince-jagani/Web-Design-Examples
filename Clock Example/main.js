var clockIndex = 1;
var stopwatch_m=0;
var stopwatch_s=0;
var stopwatch_h=0;
var stopwatch_ms=0;

var timer_m=0;
var timer_s=0;
var timer_h=0;

var updatorClock = setInterval(worldClock, 1000);

var is_sw_Start = false;
var is_timer_Start = false;


function checkIndex(btn_id)
{
    // alert(btn_id);
    switch(btn_id){
        case "nav-btn-1":{
            clockIndex = 1;
            document.getElementsByClassName("clock-main")[0].id = "id-clock";
            clearInterval(updatorClock);
            updatorClock = setInterval(worldClock, 1000);
            worldClock();
            break;
        }
        case "nav-btn-2":{
            clockIndex = 2;
            document.getElementsByClassName("clock-main")[0].id = "id-stopwatch";
            clearInterval(updatorClock);
            resetStopWatch();
            break;
        }
        case "nav-btn-3":{
            clockIndex = 3;
            document.getElementsByClassName("clock-main")[0].id = "id-timer";
            clearInterval(updatorClock);
            resetTimer();
            break;
        }
    }
    // alert(clockIndex);
}

function worldClock()
{
    UpdateTimeClock(new Date());
}

function UpdateTimeClock(date){
    // console.log("Updating Time");
    document.getElementById("txt-hr").innerHTML = String(date.getHours()).padStart(2,'0') 
                                                    + '<span class="time-hint">Hours</span>';
    document.getElementById("txt-min").innerHTML = String(date.getMinutes()).padStart(2,'0') 
                                                    + '<span class="time-hint">Minutes</span>';
    document.getElementById("txt-sec").innerHTML = String(date.getSeconds()).padStart(2,'0')
                                                    + '<span class="time-hint">Seconds</span>';
}

function stopWatch(){
    // console.log("Updating Time");

    stopwatch_ms++;
    if(stopwatch_ms==100){    stopwatch_ms=0;       stopwatch_s++;    }
    if(stopwatch_s==60)  {    stopwatch_s=0;        stopwatch_m++;    }
    if(stopwatch_m==60)  {    stopwatch_m=0;        stopwatch_h++;    }
    
    document.getElementById("txt-hr").innerHTML = String(stopwatch_h).padStart(2,'0')
                                                        + '<span class="time-hint">Hours</span>';
    document.getElementById("txt-min").innerHTML = String(stopwatch_m).padStart(2,'0')
                                                        + '<span class="time-hint">Minutes</span>';
    document.getElementById("txt-sec").innerHTML = String(stopwatch_s).padStart(2,'0')
                                                        + '<span class="time-hint">Seconds</span>';
    document.getElementById("txt-msec").innerHTML = String(stopwatch_ms).padStart(2,'0')
                                                        + '<span class="time-hint">ms</span>';
}
function resetStopWatch(){
    // console.log("Updating Time");

    stopwatch_h=0;
    stopwatch_m=0;
    stopwatch_s=0;
    stopwatch_ms=0;

    clearInterval(updatorClock);
    
    document.getElementById("txt-hr").innerHTML = String(stopwatch_h).padStart(2,'0')
                                                        + '<span class="time-hint">Hours</span>';
    document.getElementById("txt-min").innerHTML = String(stopwatch_m).padStart(2,'0')
                                                        + '<span class="time-hint">Minutes</span>';
    document.getElementById("txt-sec").innerHTML = String(stopwatch_s).padStart(2,'0')
                                                        + '<span class="time-hint">Seconds</span>';
    document.getElementById("txt-msec").innerHTML = String(stopwatch_ms).padStart(2,'0')
                                                        + '<span class="time-hint">ms</span>';
    
    document.getElementById("strt-stp-btn").innerHTML = "Start";
    is_sw_Start = false;


}

function startStopwatch()
{
    
    clearInterval(updatorClock);
    if (!is_sw_Start) {
        document.getElementById("strt-stp-btn").innerHTML = "Stop";
        updatorClock = setInterval(stopWatch, 10);
        is_sw_Start = true;
    }
    else{
        document.getElementById("strt-stp-btn").innerHTML = "Start";
        is_sw_Start = false;
    }
}

function startTimer()
{
    clearInterval(updatorClock);
    if (!is_timer_Start) {
        document.getElementById("strt-timer-btn").innerHTML = "Stop";
        var timeInput = document.getElementById("id-time-input").value.split(":");
        updatorClock = setInterval(timerFunc, 1000);
        is_timer_Start = true;

        timer_h= timeInput[0];
        timer_m= timeInput[1];
        timer_s= timeInput[2];
    }
    else{
        document.getElementById("strt-timer-btn").innerHTML = "Start";
        console.log(timeInput);
        document.getElementById("id-time-input").value = (timer_h.toString() +":"+
                                        timer_m.toString() + ":" + timer_s.toString());
        is_timer_Start = false;
    }
    // console.log(timeInput);

    
    // console.log(timer_h);
}

function resetTimer(){
    // console.log("Updating Time");

    // document.getElementById("strt-timer-btn").value = "timer_h:timer_m:timer_s:timer_ms";
    document.getElementById("id-time-input").value = "00:00:00";

    is_timer_Start = false;
    document.getElementById("strt-timer-btn").innerHTML = "Start";

    timer_h=0;
    timer_m=0;
    timer_s=0;

    clearInterval(updatorClock);
    
    document.getElementById("txt-hr").innerHTML = String(timer_h).padStart(2,'0')
                                                        + '<span class="time-hint">Hours</span>';
    document.getElementById("txt-min").innerHTML = String(timer_m).padStart(2,'0')
                                                        + '<span class="time-hint">Minutes</span>';
    document.getElementById("txt-sec").innerHTML = String(timer_s).padStart(2,'0')
                                                        + '<span class="time-hint">Seconds</span>';
    
    document.getElementById("strt-stp-btn").innerHTML = "Start";


}
function timerFunc(){
    // console.log("Updating Time");

    if (timer_h==0 && timer_m==0 && timer_s==0) {
        clearInterval(updatorClock);    
        is_timer_Start = false;
        document.getElementById("strt-timer-btn").innerHTML = "Start";    
    }
    else{
    timer_s--;
    if (timer_s == 0) {     timer_m--;  timer_s = 59;   }
    if (timer_m == 0) {     timer_h--;  timer_m = 59;   }
    
    
    document.getElementById("txt-hr").innerHTML = String(timer_h).padStart(2,'0')
                                                        + '<span class="time-hint">Hours</span>';
    document.getElementById("txt-min").innerHTML = String(timer_m).padStart(2,'0')
                                                        + '<span class="time-hint">Minutes</span>';
    document.getElementById("txt-sec").innerHTML = String(timer_s).padStart(2,'0')
                                                        + '<span class="time-hint">Seconds</span>';
    }
}
