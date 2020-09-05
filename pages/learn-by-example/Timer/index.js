function stopWatch() {
  document.querySelector("#stopwatch").classList.add("active");
  document.querySelector("#timer").classList.remove("active");
}

function countDown() {
  stopTimer();
  document.querySelector("#timer").classList.add("active");
  document.querySelector("#stopwatch").classList.remove("active");
}

document.addEventListener("load", timer());

var counter = 1;
var start;
var stopped = false;

function timer() {
  start = setInterval(function() {
    displayProper(counter);
    counter++;
  },1000);
  // console.log("Set Interval value returned: " + start);
}

function stopTimer() {
  // console.log("Timer: " + counter + " Value: " + start);
  clearInterval(start);
  stopped = true;
}

function resumeTimer() {
  // console.log("Timer: " + counter + " Value: " + start);
  if (stopped) {
    timer();
  }
}

function resetTimer() {
  stopTimer();
  // console.log("Timer: " + counter + " Value: " + start);
  counter = 0;
  timer();
  stopped = false;
}

function displayProper(count) {
  var seconds = count % 60;
  var minutes = Math.floor((count / 60) % 60);
  var hours = Math.floor((count / (60 * 60)) % (60 * 60));

  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".hours").innerHTML = hours;
}


// countDown

function startCountdown() {
  var endtime = document.getElementById("countdown").value;
  console.log(endtime);
}
