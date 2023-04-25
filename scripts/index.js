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
    game.createBackground();

    document.getElementsByClassName("rock")[0].onclick = () => {
      //debugger; // ativa, chega aqui
      player.choice("rock");
      npc.choice(generatedChoice);
      game.results(player.option, npc.option);
    };
    document.getElementsByClassName("paper")[0].onclick = () => {
      player.choice("paper");
      npc.choice(generatedChoice);
      game.results(player.option, npc.option);
    };
    document.getElementsByClassName("scissors")[0].onclick = () => {
      player.choice("scissors");
      npc.choice(generatedChoice);
      game.results(player.option, npc.option);
    };
    document.getElementsByClassName("lizard")[0].onclick = () => {
      player.choice("lizard");
      npc.choice(generatedChoice);
      game.results(player.option, npc.option);
    };
    document.getElementsByClassName("spock")[0].onclick = () => {
      player.choice("spock");
      npc.choice(generatedChoice);
      game.results(player.option, npc.option);
    };
    setInterval(() => {
      game.winOrLose();
    }, 1000);
  };
};
