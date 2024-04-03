const startButton = document.getElementById("button--start");
const stopButton = document.getElementById("button--stop");
const resetButton = document.getElementById("button--reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("timer--seconds");
const minutesTimer = document.getElementById("timer--minutes");

let timer;

startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
        timer = setInterval(function(){
        seconds = seconds+1;
        if(seconds ===60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }secondsTimer.innerText = seconds;
        
    }, 1000);
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function(){
    clearInterval(timer);
    minutes = 0;
    minutesTimer.innerText = minutes;
    seconds = 0;
    secondsTimer.innerText = seconds;
    running = false;
}

const rangeValue = document.getElementById("slider--rangeValue");
const slider = document.getElementById("slider--slider");
const body = document.getElementById("body--body")
console.log(slider.value);
slider.value = 1
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}
const img = document.getElementById("js--img");
const imgText = document.getElementById("js--img-txt");
fetch("data.json")
    .then(res => res.json())
    .then(data => {
        img.src = data.src;
        imgText.innerText = data.text;
    });
