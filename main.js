const buttonInitGame = document.querySelector(".btn-init-game");
const divButtons = document.querySelector(".container-buttons");
const buttonEasy = document.querySelector(".btn-easy-level");
const buttonMedium = document.querySelector(".btn-medium-level");
const buttonHard = document.querySelector(".btn-hard-level");

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  initGame();
});

function initGame() {
  divButtons.style.display = "flex";

  buttonEasy.addEventListener("click", function () {
    removeButtons();
    easyLevel();
  });

  buttonMedium.addEventListener("click", function () {
    removeButtons();
    mediumLevel();
  });

  buttonHard.addEventListener("click", function () {
    removeButtons();
    hardLevel();
  });
}

function easyLevel() {
  setInterval(createBalloon, 1500);
}

function mediumLevel() {
  setInterval(createBalloon, 1000);
}

function hardLevel() {
  setInterval(createBalloon, 500);
}

function removeButtons() {
  buttonEasy.remove();
  buttonMedium.remove();
  buttonHard.remove();
}

const balloonsContainer = document.querySelector(".container-balloons");

function createBalloon() {
  const elementImg = document.createElement("img");

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balloon");

  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalloon(this);
  });

  balloonsContainer.appendChild(elementImg);
}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}
