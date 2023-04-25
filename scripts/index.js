console.log("JS is loaded");

//Canvas initialization
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let player = new Component(
  canvas.width / 2 - 50,
  canvas.height / 2,
  50,
  50,
  "player",
  ctx,
  2
);
let npc = new Component(
  canvas.width / 2 + 50,
  canvas.height / 2,
  50,
  50,
  "npc",
  ctx,
  2
);

window.onload = () => {
  document.getElementsByClassName("start-button")[0].onclick = () => {
    let game = new Game(ctx, canvas.width, canvas.height, player);
    game.clear();
    game.createBackground();
    //game.start();
    game.gameOn();
  };
};
