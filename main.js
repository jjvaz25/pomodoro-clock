

/*
function startTimer (duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function() {
    let minutes = parseInt((timer/60), 10);
    let seconds = parseInt((timer%60), 10);
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }
    display.textContent = minutes + ":" + seconds
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000)
}

window.onload = function() {
  let twentyFiveMins = 60 * 25;
  let display = document.querySelector('.timerContainer');
  startTimer(twentyFiveMins, display)
}
*/