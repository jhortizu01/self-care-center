// 👇🏽 Variables 👇🏽
var imgHolder = document.querySelector(".img-holder");
var newMessageButton = document.querySelector(".new-message");
var randomMessages = document.querySelector(".random-messages")
var chooseAffirmations = document.getElementById("affirmations")
var chooseMantras = document.getElementById("mantras")
var mainPage = document.querySelector(".the-whole-page")
var loginPage = document.querySelector(".login-page")
var submit = document.getElementById("login-button")
var loginName = document.getElementById("login-name")
var welcome = document.querySelector(".welcome")


// 👂🏽Event Listeners 👂
window.addEventListener("load", hideSaying);
newMessageButton.addEventListener("click", hideImage)
newMessageButton.addEventListener("click", showSaying)
newMessageButton.addEventListener("click", showRandomSayings)
submit.addEventListener("click", letsLogIn)

// 🤷🏽‍♀️ Functions 🤷🏽‍♀️


function letsLogIn(){
  event.preventDefault();
  mainPage.classList.remove("hidden")
  loginPage.classList.add("hidden")
  var theirName = loginName.value
  welcome.innerText = `Welcome to your new inner-calm, ${theirName} !`;
}


function hideMainPage() {
  mainPage.classList.add("hidden")
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideImage(){
  imgHolder.classList.add("hidden")
};

function hideSaying(){
  randomMessages.classList.add("hidden")
}

function showSaying(){
  randomMessages.classList.remove("hidden")
}

function showRandomSayings() {
  if (chooseAffirmations.checked === true){
  randomMessages.textContent = affirmations[getRandomIndex(affirmations)]
  } else if (chooseMantras.checked === true) {
  randomMessages.textContent = mantras[getRandomIndex(mantras)]
  }
}








/// when affirmation is checked
///click newMessageButton
///pull from affirmations array
///display onto page
