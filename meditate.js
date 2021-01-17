// gets the time selected by the user

var countDownTime = 0;

function timeSelected(num){
    countDownTime = num;
    document.getElementById("demo").innerHTML = countDownTime;
}

function clicked(){
    document.getElementById("startCD").value = countDownTime;
    var x = document.getElementById("startCD").getAttribute("value");
    document.getElementById("demo").innerHTML = "CD is " + x;
    window.location.href = "countdown.html";
    const startingTime = countDownTime;
    let time = startingTime * 60;
    const countdownEl = document.getElementById('CDtime');
    setInterval(updateCD(time, countdownEl), 1000);
}

function updateCD(t, cd) {
    const minutes = Math.floor(time / 60);
    let seconds = t % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    cd.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

// document.getElementById("startCD").value = countDownTime;

// document.getElementById("demo").innerHTML = "CD time" + document.getElementById("demo").innerHTML = "CD time" + ;

// document.getElementById("startCD").onclick = "selectedTime(" + countDownTime + ")";
// document.getElementById("demo").innerHTML = "CD time" + test;

// var countDownTime = getElementById('startCD').getAttribute('value');

// function selectedTime(num){
//     countDownTime = num;
// }






