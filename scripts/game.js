console.log("JS GAME");

let generatedChoice;

class Game {
  constructor(ctx, width, height, flag, playerChoice) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.playerChoice = playerChoice;
    this.intervalId = null;
    this.flag = flag;
  }

  createBackground() {
    let img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
    });

    img.src = "./images/tbbt-wp2.jpg";
    this.ctx.drawImage(img, 0, 0, this.width, this.height);

    //ctx.fillStyle = 'white';
    //ctx.font = '30px Helvetica';
    //ctx.fillText(Score ${this.score}, 80, 30) lives( after)
  }

  gameOn() {
    document.getElementsByClassName("rock")[0].onclick = () => {
      if (this.flag === null) {
        player.choice("rock");
        npc.choice(generatedChoice);
        this.results(player.option, npc.option);
        this.winOrLose();
      }
    };
    document.getElementsByClassName("paper")[0].onclick = () => {
      if (this.flag === null) {
        player.choice("paper");
        npc.choice(generatedChoice);
        this.results(player.option, npc.option);
        this.winOrLose();
      }
    };
    document.getElementsByClassName("scissors")[0].onclick = () => {
      if (this.flag === null) {
        player.choice("scissors");
        npc.choice(generatedChoice);
        this.results(player.option, npc.option);
        this.winOrLose();
      }
    };
    document.getElementsByClassName("lizard")[0].onclick = () => {
      if (this.flag === null) {
        player.choice("lizard");
        npc.choice(generatedChoice);
        this.results(player.option, npc.option);
        this.winOrLose();
      }
    };
    this.spock = document.getElementsByClassName("spock")[0].onclick = () => {
      if (this.flag === null) {
        player.choice("spock");
        npc.choice(generatedChoice);
        this.results(player.option, npc.option);
        this.winOrLose();
      }
    };
  }
  //Function that explains the win-lose logic of the game and
  //delivers a message for each round
  results(playerChoice, generatedChoice) {
    if (playerChoice === generatedChoice) {
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
      ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
      ctx.fillText(`The result is a tie!`, 475, 360);
    } else if (playerChoice === "rock") {
      if (generatedChoice === "paper") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Paper covers rock, you lose!`, 475, 360);
        player.lives--;
      } else if (generatedChoice === "scissors") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Rock crushes scissors, you win!`, 475, 360);
        player.lives--;
        npc.lives--;
      } else if (generatedChoice === "lizard") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Rock crushes lizard, you win!`, 475, 360);
        npc.lives--;
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Spock vaporizes rock, you lose!`, 475, 360);
        player.lives--;
      }
    } else if (playerChoice === "paper") {
      if (generatedChoice === "rock") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Paper covers rock, you win!`, 475, 360);
        npc.lives--;
      } else if (generatedChoice === "scissors") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Scissors cut paper, you lose!`, 475, 360);
        player.lives--;
      } else if (generatedChoice === "lizard") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Lizard eats paper, you lose!`, 475, 360);
        player.lives--;
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Paper disproves spock, you win!`, 475, 360);
        npc.lives--;
      }
    } else if (playerChoice === "scissors") {
      if (generatedChoice === "rock") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Rock crushes scissors, you lose!`, 475, 360);
        player.lives--;
      } else if (generatedChoice === "paper") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Scissors cut paper, you win!`, 475, 360);
        npc.lives--;
      } else if (generatedChoice === "lizard") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Scissors decapitate lizard, you win!`, 475, 360);
        npc.lives--;
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Spock smashes scissors, you lose!`, 475, 360);
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. Spock smashes scissors, you lose!`;
        player.lives--;
      }
    } else if (playerChoice === "lizard") {
      if (generatedChoice === "rock") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Rock crushes lizard, you lose!`, 475, 360);
        player.lives--;
      } else if (generatedChoice === "paper") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Lizard eats paper, you win!`, 475, 360);
        npc.lives--;
      } else if (generatedChoice === "scissors") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Scissors decapitate lizard, you lose!`, 475, 360);
        player.lives--;
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Lizard poisons spock, you win!`, 475, 360);
        npc.lives--;
      }
    } else if (playerChoice === "spock") {
      if (generatedChoice === "rock") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Spock vaporizes rock, you win!`, 475, 360);
        npc.lives--;
      } else if (generatedChoice === "paper") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Paper disproves spock, you lose!`, 475, 360);
        player.lives--;
      } else if (generatedChoice === "scissors") {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Spock smashes scissors, you win!`, 475, 360);
        npc.lives--;
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `, 475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `, 475, 330);
        ctx.fillText(`Lizard poisons spock, you lose!`, 475, 360);
        player.lives--;
      }
    }
  }

  winOrLose() {
    console.log(player.lives);
    console.log(npc.lives);
    if (player.lives === 0) {
      console.log("player lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 - 125, 400, 250);
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Bazinga! Better luck next time!", 475, 300);
      //flag = true disables the use of the choice buttons
      this.flag = true;

      setTimeout(() => {
        this.stop();
        this.clear();
        player.lives = 2;
      }, 5000);
    } else if (npc.lives === 0) {
      console.log("npc lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 190, canvas.height / 2 - 125, 400, 250);
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Congratulations! You win!", 500, 300);
      //flag = true disables the use of the choice buttons
      this.flag = true;
      setTimeout(() => {
        this.stop();
        this.clear();
        npc.lives = 2;
      }, 3000);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  checkFinishedRound() {} //FALTA FAZER

  /*start() {
    this.intervalId = setInterval(this.gameOn, 10);
  }*/

  stop() {
    console.log("here");
    clearInterval(this.intervalId);
  }
}
