var minute=0;
var second=0;
var msecond=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
function timer(){
    msecond++
    msecHeading.innerHTML=msecond;
    if(msecond>=100){
        second++;
        secHeading.innerHTML=second;
        msecond=0;
    }else if(second>=60){
        minute++;
        minHeading.innerHTML=minute;
        second=0;
    }
}
function start(){
    interval=setInterval(timer,10);

}

function abc(){
    clearInterval(interval)
}
function re(){
    msecHeading.innerHTML=0;
    secHeading.innerHTML=0;
    minHeading.innerHTML=0;
    clearInterval(interval)
}
