console.log("JS is loaded");

//Canvas initialization
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerChoice = new Component(x, y, w, h, color, ctx); //change the location on screen define color

window.onload = () => {
  document.getElementsByClassName("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, playerChoice);
    game.start();
  }

  function userChoice(playerChoice) {
    switch (playerChoice) {
      case document.getElementsByClassName('rock'):
        playerChoice.color = "red";
        break;
      case document.getElementsByClassName('paper'):
        playerChoice.color = "blue";
        break;
      case document.getElementsByClassName('scissors'):
        playerChoice.color = "green";
        break;
      case document.getElementsByClassName('lizard'):
        playerChoice.color = "yellow";
        break;
      case document.getElementsByClassName('spock'):
        playerChoice.color = "orange";
        break;
    }
    return;
  }
  userChoice();
};
