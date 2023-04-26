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
  3
);
let npc = new Component(
  canvas.width / 2 + 50,
  canvas.height / 2,
  50,
  50,
  "npc",
  ctx,
  3
);

let flag = null;
let game = new Game(ctx, canvas.width, canvas.height, flag, player);

document.getElementsByClassName("start-button")[0].onclick = () => {
  //flag = null enables the choice buttons
  game.clear();
  game.createBackground();
  console.log("die");
};

document.getElementsByClassName("rock")[0].onclick = () => {
  if (game.flag === null) {
    player.choice("rock");
    npc.choice(generatedChoice);
    game.results(player.option, npc.option);
    game.winOrLose();
  }
};
document.getElementsByClassName("paper")[0].onclick = () => {
  if (game.flag === null) {
    player.choice("paper");
    npc.choice(generatedChoice);
    game.results(player.option, npc.option);
    game.winOrLose();
  }
};
document.getElementsByClassName("scissors")[0].onclick = () => {
  if (game.flag === null) {
    player.choice("scissors");
    npc.choice(generatedChoice);
    game.results(player.option, npc.option);
    game.winOrLose();
  }
};
document.getElementsByClassName("lizard")[0].onclick = () => {
  if (game.flag === null) {
    player.choice("lizard");
    npc.choice(generatedChoice);
    game.results(player.option, npc.option);
    game.winOrLose();
  }
};
document.getElementsByClassName("spock")[0].onclick = () => {
  if (game.flag === null) {
    player.choice("spock");
    npc.choice(generatedChoice);
    game.results(player.option, npc.option);
    game.winOrLose();
  }
};
