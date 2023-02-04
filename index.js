
var countDownDate = new Date("Feb 12,2023 14:51:00").getTime() / 1000;


function countDown(){
    const today = new Date().getTime() / 1000;
    
    let difference = Math.round(countDownDate - today);

    if (difference<=0 ){
        document.getElementById("timer").innerHTML = "Incorrect Date for Countdown";
        clearInterval(timer);
        return;
    }
    
    let sec, min, hours, days;
    sec = Math.floor(difference % 60);
    difference /= 60;
    min = Math.floor(difference % 60);
    difference /= 60;
    hours = Math.floor(difference % 24);
    days = Math.floor((difference/24) % 60);

    if (sec === 60){
        sec = 0;
        min++;
    }
    if (min === 60){
        min = 0;
        hours++;
    }
    if (hours === 24){
        hours = 0;
        days++;
    }
    document.getElementById("timer").innerHTML= `${days} D: ${hours} H: ${min} M: ${sec} S`;
    console.log("running");

}

var timer = setInterval(countDown,1000);
