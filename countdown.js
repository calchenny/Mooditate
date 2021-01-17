
var countDownTime = getElementById('startCD').getAttribute('value');

function selectedTime(num){
    countDownTime = num;
}

let time = countDownTime * 60;

const countdownEl = document.getElementById('CDtime');

setInterval(updateCD, 1000);
function updateCD() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}