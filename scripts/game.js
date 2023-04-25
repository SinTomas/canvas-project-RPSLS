console.log("JS GAME");

let generatedChoice;

class Game {
  constructor(ctx, width, height, playerChoice) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.playerChoice = playerChoice;
    this.intervalId = null;

    // Lives
    this.lives = 2;
  }

  createBackground() {
    let img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
    });

    img.src = "./images/retro-gif.gif";
    this.ctx.drawImage(img, 0, 0, this.width, this.height);

    //ctx.fillStyle = 'white';
    //ctx.font = '30px Helvetica';
    //ctx.fillText(Score ${this.score}, 80, 30) lives( after)
  }

  results(playerChoice, generatedChoice) {
    if (playerChoice === generatedChoice) {
      let result = document.getElementById("round-result");
      result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. The result is a tie!`;
    } else if (playerChoice === "rock") {
      if (generatedChoice === "paper") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Paper covers rock, you lose!`;
        player.lives--;
      } else if (generatedChoice === "scissors") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Rock crushes scissors, you win!`;
        npc.lives--;
      } else if (generatedChoice === "lizard") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Rock crushes lizard, you win!`;
        npc.lives--;
      } else {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Spock vaporizes rock, you lose!`;
        player.lives--;
      }
    } else if (playerChoice === "paper") {
      console.log("paper");
      if (generatedChoice === "rock") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Paper covers rock, you win!`;
        npc.lives--;
      } else if (generatedChoice === "scissors") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Scissors cut paper, you lose!`;
        player.lives--;
      } else if (generatedChoice === "lizard") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Lizard eats paper, you lose!`;
        player.lives--;
      } else {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Paper disproves spock, you win!`;
        npc.lives--;
      }
    } else if (playerChoice === "scissors") {
      if (generatedChoice === "rock") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Rock crushes scissors, you lose!`;
        player.lives--;
      } else if (generatedChoice === "paper") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Scissors cut paper, you win!`;
        npc.lives--;
      } else if (generatedChoice === "lizard") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Scissors decapitate lizard, you win!`;
        npc.lives--;
      } else {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Spock smashes scissors, you lose!`;
        player.lives--;
      }
    } else if (playerChoice === "lizard") {
      if (generatedChoice === "rock") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Rock crushes lizard, you lose!`;
        player.lives--;
      } else if (generatedChoice === "paper") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Lizard eats paper, you win!`;
        npc.lives--;
      } else if (generatedChoice === "scissors") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Scissors decapitate lizard, you lose!`;
        player.lives--;
      } else {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Lizard poisons spock, you win!`;
        npc.lives--;
      }
    } else if (playerChoice === "spock") {
      if (generatedChoice === "rock") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Spock vaporizes rock, you win!`;
        npc.lives--;
      } else if (generatedChoice === "paper") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Paper disproves spock, you lose!`;
        player.lives--;
      } else if (generatedChoice === "scissors") {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Spock smashes scissors, you win!`;
        npc.lives--;
      } else {
        let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Lizard poisons spock, you lose!`;
        player.lives--;
      }
    }
  }

  winOrLose() {
    if (player.lives === 0) {
      console.log("player lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2, canvas.height / 2, 400, 250);
      ctx.font = "16px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Bazinga! Better luck next time!", 400, 250);
      this.stop();
    } else if (npc.lives === 0) {
      console.log("npc lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2, canvas.height / 2, 400, 250);
      ctx.font = "16px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Congratulations! You win!", 400, 250);
      this.stop();
    }
  }

  checkFinishedRound() {} //FALTA FAZER

  stop() {
    if (player.lives === 0 || npc.lives === 0) {
      clearInterval(this.intervalId);
    }
  }
}
