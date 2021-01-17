// gets the time selected by the user
function timeSelected(num){
    document.getElementById("demo").innerHTML = num;
    localStorage.removeItem("startingCD");
    localStorage.setItem("startingCD", num);
}

function clicked(){
    window.location.href = "countdown.html";
}