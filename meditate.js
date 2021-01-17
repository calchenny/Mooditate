// gets the time selected by the user
function timeSelected(num){
    document.getElementById("demo").innerHTML = num;
    localStorage.removeItem("startingCD");
    localStorage.setItem("startingCD", num);
    alert("You have selected " + num + " minute(s)");

}

function clicked(){
    window.location.href = "countdown.html";
}