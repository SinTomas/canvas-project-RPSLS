console.log("JS is loaded");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let startButton = document.getElementById("start");

startButton.onclick = function() {
    console.log("Starting");
    let game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
}