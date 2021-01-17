// gets the time selected by the user

var countDownTime = 0;
function timeSelected(num){
    countDownTime = num;
    document.getElementById("demo").innerHTML = countDownTime;
}

function clicked(){
    document.getElementById("startCD").value = countDownTime;
    var x = document.getElementById("startCD").getAttribute("value");
    document.getElementById("demo").innerHTML = "value is" + x;
}


// document.getElementById("startCD").value = countDownTime;

// document.getElementById("demo").innerHTML = "CD time" + document.getElementById("demo").innerHTML = "CD time" + ;

// document.getElementById("startCD").onclick = "selectedTime(" + countDownTime + ")";
// document.getElementById("demo").innerHTML = "CD time" + test;

