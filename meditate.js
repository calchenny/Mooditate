// gets the time selected by the user
const countDownTime = 0;
function timeSelected(num){
    countDownTime = num;
    localStorage.setItem('CDMins', 'num');  
    document.getElementById("demo").innerHTML = countDownTime;
    const test = localStorage.getItem('CDMins');
    document.getElementById('demo2').innerHTML = "test: " test;  
}

function clicked(){
    // document.getElementById("startCD").value = countDownTime;
    // var x = document.getElementById("startCD").getAttribute("value");
    //localStorage.setItem(countDownTime, CDMin);
    window.location.href = "countdown.html";
    // const startingTime = countDownTime;
    // let time = startingTime * 60;
    // document.getElementById('CDtime').innerHTML = "hello";
    // const countdownEl = document.getElementById('CDtime');
    // setInterval(updateCD(time, countdownEl), 1000);
}

// function updateCD(t, cd) {
//     const minutes = Math.floor(t / 60);
//     let seconds = t % 60;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     cd.innerHTML = `${minutes}: ${seconds}`;
//     t--;
// }

// document.getElementById("startCD").value = countDownTime;

// document.getElementById("demo").innerHTML = "CD time" + document.getElementById("demo").innerHTML = "CD time" + ;

// document.getElementById("startCD").onclick = "selectedTime(" + countDownTime + ")";
// document.getElementById("demo").innerHTML = "CD time" + test;

// var countDownTime = getElementById('startCD').getAttribute('value');

// function selectedTime(num){
//     countDownTime = num;
// }






