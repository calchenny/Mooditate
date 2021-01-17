function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function onSignIn(googleUser){
  console.log(googleUser.getBasicProfile())

  var profile = googleUser.getBasicProfile()
  console.log('User is ' + JSON.stringify(profile))

  var element = document.querySelector('#content')
  element.innerText = profile.getGivenName();

  var image = document.createElement('img')
  image.setAttribute('src', profile.getImageurl())
  element.append(image)
}

function signOut(){
  gapi.auth2.getAuthInstance().signOut().then(function(){
    console.log('user signed out')
  })
}

function meExcited() {
    alert("You are excited today!");
}

function meHappy() {
  alert("You are happy today!");
}

function meNeutral() {
  alert("You are feeling okay today.");
}

function meSad() {
  alert("You are sad today.");
}

function meMad() {
  alert("You are mad today.");
}