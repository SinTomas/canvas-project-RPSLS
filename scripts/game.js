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
    let bgImg = new Image();
    bgImg.src = "./images/tbbt-wp2.jpg";
    this.img = bgImg;

    let heartImg = new Image();
    heartImg.src = "./images/heart.png";
    this.hearts = heartImg;
  }

  createBackground() {
    this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    this.drawPlayerLives();
    this.drawNpcLives();
  }

  //To draw the player lives
  drawPlayerLives() {
    console.log("life");

    if (player.lives === 3) {
      this.ctx.drawImage(this.hearts, 60, 50, 60, 60);
      this.ctx.drawImage(this.hearts, 125, 50, 60, 60);
      this.ctx.drawImage(this.hearts, 190, 50, 60, 60);
      console.log("3 life");
    } else if (player.lives === 2) {
      this.ctx.drawImage(this.hearts, 60, 50, 60, 60);
      this.ctx.drawImage(this.hearts, 125, 50, 60, 60);
      console.log("2 life");
    } else if (player.lives === 1) {
      this.ctx.drawImage(this.hearts, 60, 50, 60, 60);
      console.log("1 life");
    }
  }

  //To draw the npc lives
  drawNpcLives() {
    console.log("life");

    if (npc.lives === 3) {
      this.ctx.drawImage(this.hearts, canvas.width - 120, 50, 60, 60);
      this.ctx.drawImage(this.hearts, canvas.width - 185, 50, 60, 60);
      this.ctx.drawImage(this.hearts, canvas.width - 250, 50, 60, 60);
      console.log("3 life");
    } else if (npc.lives === 2) {
      this.ctx.drawImage(this.hearts, canvas.width - 120, 50, 60, 60);
      this.ctx.drawImage(this.hearts, canvas.width - 185, 50, 60, 60);
      console.log("2 life");
    } else if (npc.lives === 1) {
      this.ctx.drawImage(this.hearts, canvas.width - 120, 50, 60, 60);
      console.log("1 life");
    }
  }

  //Function that explains the win-lose logic of the game and
  //delivers a message for each round

  results(playerChoice, generatedChoice) {
    if (playerChoice === generatedChoice) {
      //ctx.fillStyle = "white";
      //ctx.fillRect(canvas.width / 2, 400, 1000, 250);
      ctx.font = "30px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText(
        `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
        300,
        500
      );
      ctx.fillText(`The result is a tie!`, 300, 550);
      setTimeout(() => {
        this.clear();
        this.createBackground();
      }, 2000);
    } else if (playerChoice === "rock") {
      if (generatedChoice === "paper") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Paper covers rock, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "scissors") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Rock crushes scissors, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "lizard") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Rock crushes lizard, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Spock vaporizes rock, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      }
    } else if (playerChoice === "paper") {
      if (generatedChoice === "rock") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Paper covers rock, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "scissors") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Scissors cut paper, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "lizard") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Lizard eats paper, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Paper disproves spock, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      }
    } else if (playerChoice === "scissors") {
      if (generatedChoice === "rock") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Rock crushes scissors, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "paper") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Scissors cut paper, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "lizard") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Scissors decapitate lizard, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Spock smashes scissors, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      }
    } else if (playerChoice === "lizard") {
      if (generatedChoice === "rock") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Rock crushes lizard, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "paper") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Lizard eats paper, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "scissors") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Scissors decapitate lizard, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Lizard poisons spock, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      }
    } else if (playerChoice === "spock") {
      if (generatedChoice === "rock") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Spock vaporizes rock, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "paper") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Paper disproves spock, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else if (generatedChoice === "scissors") {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Spock smashes scissors, you win!`, 300, 550);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      } else {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(
          `You picked ${playerChoice} and the opponnent picked ${generatedChoice}.`,
          300,
          500
        );
        ctx.fillText(`Lizard poisons spock, you lose!`, 300, 550);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 2000);
      }
    }
  }

  winOrLose() {
    console.log(player.lives);
    console.log(npc.lives);
    if (player.lives === 0) {
      console.log("player lost");
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText("Bazinga! Better luck next time!", 475, 300);

      //flag = true disables the use of the choice buttons
      this.flag = true;

      setTimeout(() => {
        this.drawPlayerLives();
        this.drawNpcLives();
        this.stop();
        player.lives = 3;
        npc.lives = 3;
        this.clear();
      }, 3000);
    } else if (npc.lives === 0) {
      console.log("npc lost");
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText("Congratulations! You win!", 500, 300);
      //flag = true disables the use of the choice buttons
      this.flag = true;

      setTimeout(() => {
        this.stop();
        npc.lives = 3;
        player.lives = 3;
        this.clear();
      }, 3000);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  stop() {
    console.log("here");
    clearInterval(this.intervalId);
  }
}
