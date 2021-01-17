// gets the time selected by the user
function timeSelected(num){
    localStorage.removeItem("startingCD");
    localStorage.setItem("startingCD", num);
    alert("You have selected " + num + " minute(s)");
}

function soundSelected(){
    var num = document.getElementById("sounds").value;
    localStorage.removeSound("backgroundSounds");
    localStorage.setItem("backgroundSounds", num);
    document.getElementById("demo").innerHTML = localStorage.ge;

}

function setSound(num){
    const n = num;
    var sound;
    if (num == 1){
        sound = "rain.wav";
    } else if (num == 2){
        sound = "ocean.wav";
    } else if (num == 3){
        sound = "nature.wav";
    } else sound = "";

    document.getElementById("demo2").innerHTML = num;
}

function clicked(){
    window.location.href = "countdown.html";
}