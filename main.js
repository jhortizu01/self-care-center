// 👇🏽 Variables 👇🏽
var imgHolder = document.querySelector(".img-holder");
var newMessageButton = document.querySelector(".new-message");
var randomMessages = document.querySelector(".random-messages")
var chooseAffirmations = document.getElementById("affirmations").checked


// 👂🏽Event Listeners 👂
window.addEventListener("load", hideSaying);
newMessageButton.addEventListener("click", hideImage)
newMessageButton.addEventListener("click", showSaying)
newMessageButton.addEventListener("click", showAffirmations)
// 🤷🏽‍♀️ Functions 🤷🏽‍♀️
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

function checkAffirmations() {
    document.getElementById("affirmations").checked = true;
}

function uncheckAffirmations() {
    document.getElementById("affirmations").checked = false;
}

function showAffirmations() {
  if (chooseAffirmations === true);
  randomMessages.textContent = affirmations[getRandomIndex(affirmations)]
}



/// when affirmation is checked
///click newMessageButton
///pull from affirmations array
///display onto page
