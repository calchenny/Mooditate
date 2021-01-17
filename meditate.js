// gets the time selected by the user
var countDownTime = 0;
function timeSelected(num){
    //document.getElementById("demo").innerHTML = num;
    localStorage.removeItem("startingCD");
    localStorage.setItem("startingCD", num);
}

function clicked(){
    // document.getElementById("startCD").value = countDownTime;
    // var x = document.getElementById("startCD").getAttribute("value");
    //localStorage.setItem(countDownTime, CDMin);
    window.location.href = "countdown.html";
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






