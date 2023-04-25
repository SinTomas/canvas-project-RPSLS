console.log("JS GAME");

let generatedChoice;

class Game {
  constructor(ctx, width, height, playerChoice) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.playerChoice = playerChoice;
    this.intervalId = null;
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

  gameOn(){
    document.getElementsByClassName("rock")[0].onclick = () => {
      player.choice("rock");
      npc.choice(generatedChoice);
      this.results(player.option, npc.option);
      this.winOrLose();
    };
    document.getElementsByClassName("paper")[0].onclick = () => {
      player.choice("paper");
      npc.choice(generatedChoice);
      this.results(player.option, npc.option);
      this.winOrLose();
    };
    document.getElementsByClassName("scissors")[0].onclick = () => {
      player.choice("scissors");
      npc.choice(generatedChoice);
      this.results(player.option, npc.option);
      this.winOrLose();
    };
    document.getElementsByClassName("lizard")[0].onclick = () => {
      player.choice("lizard");
      npc.choice(generatedChoice);
      this.results(player.option, npc.option);
      this.winOrLose();
    };
    document.getElementsByClassName("spock")[0].onclick = () => {
      player.choice("spock");
      npc.choice(generatedChoice);
      this.results(player.option, npc.option);
      this.winOrLose();
    };
  }

  results(playerChoice, generatedChoice) {
    if (playerChoice === generatedChoice) {
      let result = document.getElementById("round-result");
        result.innerHTML = `You picked ${playerChoice} and the opponnent picked ${generatedChoice}. It's a tie!`;
        /*ctx.fillStyle = "white";
        ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 -100, 400, 250);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`You picked ${playerChoice} and `,475, 300);
        ctx.fillText(`the opponnent picked ${generatedChoice}. `,475, 300);
        ctx.fillText(`The result is a tie!`,475, 300);*/
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
    console.log(player.lives)
    console.log(npc.lives)
    if (player.lives === 0) {
      console.log("player lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - 175, canvas.height / 2 -125, 400, 250);
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Bazinga! Better luck next time!",475, 300);

      setTimeout(() => {
      this.stop();
      this.clear()
      player.lives = 2
      }, 3000);
      
    } else if (npc.lives === 0) {
      console.log("npc lost");
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 -190, canvas.height / 2 - 125, 400, 250);
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("Congratulations! You win!", 500, 300);
      setTimeout(() => {
      this.stop();
      this.clear()
      npc.lives = 2
      }, 3000);
    }
  }

  clear() {
    this.ctx.clearRect(0,0,this.width, this.height);
  }

  checkFinishedRound() {} //FALTA FAZER

  start() {
    this.intervalId = setInterval(this.gameOn, 10);
  }

  stop() {
    console.log('here')
      clearInterval(this.intervalId);
      

    }
}
