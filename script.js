const msecText = document.getElementById('msec');
const secText = document.getElementById('sec');
const minText =  document.getElementById('min');
const hrText = document.getElementById('hr');

const resetButton = document.getElementById('resetButton');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');


resetButton.addEventListener('click', reset)
startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)

let interval= null 
let millisecond = 0
let second = 0
let minute = 0
let hour= 0

function reset(){
    clearInterval(interval)
    
    millisecond = 0
    second = 0
    minute = 0
    hour= 0

    updateDisplay()
}

function start(){
    // if(interval)return 

   interval = setInterval(()=>{
    millisecond++


    if(millisecond>99){
        millisecond = 0
        second++
    }

    if (second > 59){
        second = 0
        minute++
    }

    if (minute > 59){
        minute = 0
        hour++
    }

   updateDisplay()
    },10)
 
}

function pause(){
   clearInterval(interval)
}

function updateDisplay(){
    msecText.textContent =  
    millisecond < 10 ? '0' + millisecond : millisecond
    secText.textContent = 
     second < 10 ? '0' + second : second
    minText.textContent = 
     minute < 10 ? '0' + minute : minute
    hrText.textContent = 
     hour < 10 ? '0' + hour : hour
}