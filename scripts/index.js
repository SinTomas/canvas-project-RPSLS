console.log("JS is loaded");

//Canvas initialization
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerChoice = new Component(x, y, w, h, color, ctx); //change the location on screen define color

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, playerChoice);
    game.start();
  }

  let startButton = document.getElementById("start");

  startButton.onclick = function () {
    console.log("Starting");
    let game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
  };
};
