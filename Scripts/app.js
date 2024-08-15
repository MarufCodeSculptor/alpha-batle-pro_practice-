function continueGame() {
  const randomAlpha = getRandomAlphabet();
  document.getElementById("alphabet-shower").innerText = randomAlpha;
  onFocus(randomAlpha);

  document.addEventListener("keyup", handleButtonPress);
}

const play = () => {
  initializeScore();
  hideElementByid("home");
  hideElementByid("game-over");
  showElementById("playground");
  continueGame();
};

function handleButtonPress(e) {
  const pressedKey = e.key;
  console.log(pressedKey);
  const currentAlpha = currentAlphabet();
  if (pressedKey.toLowerCase() === currentAlpha.toLowerCase()) {
    onBlur(currentAlpha);
    increaseById("score");
    continueGame();
    document.getElementById("final-score").innerText = getCurrentValue('score');
  } else {
    decreaseById("life");
    document.getElementById("final-score").innerText = getCurrentValue('score');
  }
  if(pressedKey === "Escape"){
    gameOver();
  }
}
