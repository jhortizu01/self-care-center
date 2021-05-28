// 👇🏽 Variables 👇🏽
var imgHolder = document.querySelector(".img-holder");
var newMessageButton = document.querySelector(".new-message");

// 👂🏽Event Listeners 👂
newMessageButton.addEventListener("click", hideImage)


// 🤷🏽‍♀️ Functions 🤷🏽‍♀️
function hideImage(){
  imgHolder.classList.add("hidden")
};
