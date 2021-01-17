// gets the time selected by the user
function timeSelected(num){
    localStorage.removeItem("startingCD");
    localStorage.setItem("startingCD", num);
    alert("You have selected " + num + " minute(s)");
}

function soundSelected(){
    var num = document.getElementById("sounds").value;
    setSound(num);
}

function setSound(num){
    localStorage.removeItem("backgroundSounds");
    localStorage.setItem("backgroundSounds", num);
    var testvar = localStorage.getItem("backgroundSounds");
    document.getElementById("demo").innerHTML = testvar;
}

function clicked(){
    window.location.href = "countdown.html";
}