// 👇🏽 Variables 👇🏽
var imgHolder = document.querySelector(".img-holder");
var newMessageButton = document.querySelector(".new-message");
var randomMessages = document.querySelector(".random-messages")
var chooseAffirmations = document.getElementById("affirmations")
var chooseMantras = document.getElementById("mantras")
var mainPage = document.querySelector('.the-whole-page')

// 👂🏽Event Listeners 👂
window.addEventListener("load", hideMainPage);
window.addEventListener("load", hideSaying);
newMessageButton.addEventListener("click", hideImage)
newMessageButton.addEventListener("click", showSaying)
newMessageButton.addEventListener("click", showSayings)

// 🤷🏽‍♀️ Functions 🤷🏽‍♀️
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

function showSayings() {
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
