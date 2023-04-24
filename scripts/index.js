console.log("JS is loaded");

//Canvas initialization
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerChoice = new Component(
  canvas.width / 2 - 50,
  canvas.height / 2,
  50,
  50,
  ctx
);
let generatedEnemy = new Component(
  canvas.width / 2 + 50,
  canvas.height / 2,
  50,
  50,
  ctx
);

window.onload = () => {
  document.getElementsByClassName("start-button")[0].onclick = () => {
    let game = new Game(ctx, canvas.width, canvas.height, playerChoice);
    console.log('click');
    game.createBackground();
  };

  document.getElementsByClassName("rock").onclick = () => {
    userChoice(playerChoice);
  };
  document.getElementsByClassName("paper").onclick = () => {
    userChoice(playerChoice);
  };
  document.getElementsByClassName("scissors").onclick = () => {
    userChoice(playerChoice);
  };
  document.getElementsByClassName("lizard").onclick = () => {
    userChoice(playerChoice);
  };
  document.getElementsByClassName("spock").onclick = () => {
    userChoice(playerChoice);
  };
};
