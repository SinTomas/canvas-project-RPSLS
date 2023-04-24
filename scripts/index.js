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
    game.createBackground();
  };

  document.getElementsByClassName("rock")[0].onclick = () => {
    //debugger; // ativa, chega aqui
    playerChoice.choice("rock");
    generatedEnemy.choice(generatedChoice);
  };
  document.getElementsByClassName("paper")[0].onclick = () => {
    playerChoice.choice("paper");
    generatedEnemy.choice(generatedChoice);
  };
  document.getElementsByClassName("scissors")[0].onclick = () => {
    playerChoice.choice("scissors");
    generatedEnemy.choice(generatedChoice);
  };
  document.getElementsByClassName("lizard")[0].onclick = () => {
    playerChoice.choice("lizard");
    generatedEnemy.choice(generatedChoice);
  };
  document.getElementsByClassName("spock")[0].onclick = () => {
    playerChoice.choice("spock");
    generatedEnemy.choice(generatedChoice);
  };
};
