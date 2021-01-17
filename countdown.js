// gets the time selected by the user
var countDownTime = 0;
function timeSelected(num){
    countDownTime = num;
    document.getElementById("demo").innerHTML = countDownTime;
}

// Update the count down every 1 second
function startMeditation(){
var x = setInterval(function() {
    document.getElementById("demo").innerHTML = countDownTime;

    // Get today's date and time
    var now = new Date().getTime();
    document.getElementById("demo").innerHTML = now;
    var newTime = new Date(now.getTime() + countDownTime*60000);
    // Find the distance between now and the count down date
    var distance = countDownTime - now;
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Your meditation is over";
    }
  }, 1000);
}