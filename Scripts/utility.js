function hideElementByid(id) {
  document.getElementById(id).classList.replace("flex", "hidden");
}
function showElementById(id) {
  document.getElementById(id).classList.replace("hidden", "flex");
}

function getRandomAlphabet() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
function onFocus(id) {
  document
    .getElementById(id.toLocaleLowerCase())
    .classList.add("bg-blue-500", "border", "border-red-500");
}
function onBlur(id) {
  document
    .getElementById(id.toLocaleLowerCase())
    .classList.remove("bg-blue-500", "border", "border-red-500");
}
function currentAlphabet() {
  return document.getElementById("alphabet-shower").innerText;
}
function getCurrentValue(id) {
  return parseInt(document.getElementById(id).innerText);
}
function increaseById(id) {
  const currentValue = getCurrentValue(id);
  document.getElementById(id).innerText = currentValue + 1;
}

function decreaseById(id) {
  const currentValue = getCurrentValue(id);

  if (currentValue === 0) {
  }
  if (currentValue > 0) {
    document.getElementById(id).innerText = currentValue - 1;
  } else {
    gameOver();
  }
}

function initializeScore() {
  document.getElementById("score").innerText = 0;
  document.getElementById("life").innerText = 3;
}

function gameOver() {
  onBlur(currentAlphabet());
  document.getElementById("playground").classList.replace("flex", "hidden");
  showElementById("game-over");
}

// function clearKey() {
//   const keys = document.querySelectorAll("kbd");
//   keys.forEach((key) => {
//     key.classList.remove("bg-blue-500", "border", "border-red-500");
//   });
// }
