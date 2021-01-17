
const countDownTime = localStorage.getItem(countDownTime);
document.getElementById('CDTime').innerHTML = countDownTime;

  //   let time = countDownTime * 60;
  //   const countdownEl = document.getElementById('CDtime');
  //   setInterval(updateCD, 1000);

  //   function updateCD() {
  //     const minutes = Math.floor(time / 60);
  //     let seconds = time % 60;
  //     seconds = seconds < 10 ? '0' + seconds : seconds;
  //     countdownEl.innerHTML = `${minutes}: ${seconds}`;
  //     time--;
  // }