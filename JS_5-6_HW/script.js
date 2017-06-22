var currentTime = 0;
var stepInterval = 10;
var intervalId = 0;
var hoursElem = document.getElementById("hours");
var minutesElem = document.getElementById("minutes");
var secondsElem = document.getElementById("seconds");
var mlsecElem = document.getElementById("mlsec");

var flag = false;
function oneStep() {
    currentTime += stepInterval;
    /*console.log(currentTime);*/
    calculateTime(currentTime);
}

function startTimer() {
  if(!flag)
    intervalId = setInterval(oneStep, stepInterval);

  flag=true;
}

function stopTimer() {
    clearInterval(intervalId);
    flag = false;
}

function clearTimer(){
    stopTimer();
    currentTime = 0;
    calculateTime(currentTime);
}


function calculateTime(mill) {
  var milliseconds = mill % 1000;
  var hours = Math.floor(mill/(1000 * 60 * 60));
  var temp = mill % (1000 * 60 * 60);
  var minutes = Math.floor(temp/(1000 * 60));
  temp = temp % (1000 * 60);
  var seconds  = Math.floor(temp/1000);
  var milliseconds = temp % 1000;
  /*alert(hours+" h "+minutes+" min "+seconds+" sec "+milliseconds+" mill");*/
  hoursElem.innerHTML=hours;
  minutesElem.innerHTML=minutes;
  secondsElem.innerHTML=seconds;
  mlsecElem.innerHTML=milliseconds;
}


