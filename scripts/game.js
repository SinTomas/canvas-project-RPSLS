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
    bgImg.src = "./images/bg-rules.png";
    this.img = bgImg;

    let heartImg = new Image();
    heartImg.src = "./images/heart.png";
    this.hearts = heartImg;

    let winImg = new Image();
    winImg.src = "./images/results/win.png";
    this.winImg = winImg;

    let loseImg = new Image();
    loseImg.src = "./images/results/lose.png";
    this.loseImg = loseImg;

    //images results
    //tie
    let tie = new Image();
    tie.src = "./images/results/tie.png";
    this.tie = tie;

    //player chooses rock
    let rockPaper = new Image();
    rockPaper.src = "./images/results/rock-paper-lose.png";
    this.rockPaper = rockPaper;
    
    let rockScissors = new Image();
    rockScissors.src = "./images/results/rock-scissors-win.png";
    this.rockScissors = rockScissors;
    
    let rockLizard = new Image();
    rockLizard.src = "./images/results/rock-lizard-win.png";
    this.rockLizard = rockLizard;
    
    let rockSpock = new Image();
    rockSpock.src = "./images/results/rock-spock-lose.png";
    this.rockSpock  = rockSpock ;

  //player chooses paper
  let paperRock = new Image();
  paperRock.src = "./images/results/paper-rock-win.png";
  this.paperRock  = paperRock ;
  let paperScissors = new Image();
  paperScissors.src = "./images/results/paper-scissors-lose.png";
  this.paperScissors  = paperScissors ;
  let paperLizard = new Image();
  paperLizard.src = "./images/results/paper-lizard-lose.png";
  this.paperLizard  = paperLizard ;
  let paperSpock = new Image();
  paperSpock.src = "./images/results/paper-spock-win.png";
  this.paperSpock  = paperSpock ;

  //player chooses scissors
  let scissorsRock = new Image();
  scissorsRock.src = "./images/results/scissors-rock-lose.png";
  this.scissorsRock  = scissorsRock ;
  let scissorsPaper = new Image();
  scissorsPaper.src = "./images/results/scissors-paper-win.png";
  this.scissorsPaper  = scissorsPaper ;
  let scissorsLizard = new Image();
  scissorsLizard.src = "./images/results/scissors-lizard-win.png";
  this.scissorsLizard  = scissorsLizard ;
  let scissorsSpock = new Image();
  scissorsSpock.src = "./images/results/scissors-spock-lose.png";
  this.scissorsSpock  = scissorsSpock ;

  //player chooses lizard
  let lizardRock = new Image();
  lizardRock.src = "./images/results/lizard-rock-lose.png";
  this.lizardRock  = lizardRock ;
  let lizardPaper = new Image();
  lizardPaper.src = "./images/results/lizard-paper-win.png";
  this.lizardPaper  = lizardPaper ;
  let lizardScissors = new Image();
  lizardScissors.src = "./images/results/lizard-scissors-lose.png";
  this.lizardScissors  = lizardScissors ;
  let lizardSpock = new Image();
  lizardSpock.src = "./images/results/lizard-spock-win.png";
  this.lizardSpock  = lizardSpock ;

  //player chooses spock
  let spockRock = new Image();
  spockRock.src = "./images/results/spock-rock-win.png";
  this.spockRock  = spockRock ;
  let spockPaper = new Image();
  spockPaper.src = "./images/results/spock-paper-lose.png";
  this.spockPaper  = spockPaper ;
  let spockScissors = new Image();
  spockScissors.src = "./images/results/spock-scissors-win.png";
  this.spockScissors  = spockScissors ;
  let spockLizard = new Image();
  spockLizard.src = "./images/results/spock-lizard-lose.png";
  this.spockLizard  = spockLizard ;

  //adding sounds
  this.carlos = new Audio('./sounds/bazinga.mp3')
  this.carlos.volume = 1
  this.carlos.loop = false
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
      this.ctx.drawImage(this.tie, 150, 300, 900, 490);
      setTimeout(() => {
        this.clear();
        this.createBackground();
      }, 1500);
    } else if (playerChoice === "rock") {
      if (generatedChoice === "paper") {
        this.ctx.drawImage(this.rockPaper, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "scissors") {
        this.ctx.drawImage(this.rockScissors, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "lizard") {
        this.ctx.drawImage(this.rockLizard, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else {
        this.ctx.drawImage(this.rockSpock, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      }
    } else if (playerChoice === "paper") {
      if (generatedChoice === "rock") {
        this.ctx.drawImage(this.paperRock, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "scissors") {
        this.ctx.drawImage(this.paperScissors, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "lizard") {
        this.ctx.drawImage(this.paperLizard, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else {
        this.ctx.drawImage(this.paperSpock, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      }
    } else if (playerChoice === "scissors") {
      if (generatedChoice === "rock") {
        this.ctx.drawImage(this.scissorsRock, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "paper") {
        this.ctx.drawImage(this.scissorsPaper, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "lizard") {
        this.ctx.drawImage(this.scissorsLizard, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else {
        this.ctx.drawImage(this.scissorsSpock, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      }
    } else if (playerChoice === "lizard") {
       if (generatedChoice === "rock") {
        this.ctx.drawImage(this.lizardRock, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "paper") {
        this.ctx.drawImage(this.lizardPaper, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "scissors") {
        this.ctx.drawImage(this.lizardScissors, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else {
        this.ctx.drawImage(this.lizardSpock, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      }


    } else if (playerChoice === "spock") {
      if (generatedChoice === "rock") {
        this.ctx.drawImage(this.spockRock, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "paper") {
        this.ctx.drawImage(this.spockPaper, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else if (generatedChoice === "scissors") {
        this.ctx.drawImage(this.spockScissors, 150, 300, 900, 490);
        npc.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      } else {
        this.ctx.drawImage(this.spockLizard, 150, 300, 900, 490);
        player.lives--;
        this.drawPlayerLives();
        this.drawNpcLives();
        setTimeout(() => {
          this.clear();
          this.createBackground();
        }, 1500);
      }
    }
  }

  winOrLose() {
    console.log(player.lives);
    console.log(npc.lives);
    if (player.lives === 0) {
      console.log("player lost");
      //lose
      this.ctx.drawImage(
        this.loseImg,
        canvas.width / 2 - 175,
        canvas.height / 2 - 200,
        400,
        125
      );

      //flag = true disables the use of the choice buttons
      this.flag = true;
      this.carlos.play();

      setTimeout(() => {
        this.drawPlayerLives();
        this.drawNpcLives();
        this.stop();
        player.lives = 3;
        npc.lives = 3;
        this.clear();
        this.flag = true;
      }, 3000);
    } else if (npc.lives === 0) {
      console.log("npc lost");
      //win
      this.ctx.drawImage(
        this.winImg,
        canvas.width / 2 - 175,
        canvas.height / 2 - 200,
        400,
        125
      );
      //flag = true disables the use of the choice buttons
      this.flag = null;

      setTimeout(() => {
        this.stop();
        npc.lives = 3;
        player.lives = 3;
        this.clear();
        this.flag = true;
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
