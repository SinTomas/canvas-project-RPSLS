console.log("JS GAME");

let generatedChoice;

class Game {
  constructor(ctx, width, height, playerChoice) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.playerChoice = playerChoice;

    // Lives
    this.lives = 2;
  }

  createBackground (){
    let img = new Image();
        img.addEventListener('load', ()=>{
            this.img = img;
        });

        img.src= "../images/truck.jpg";
        this.ctx.drawImage(img, 0, 0, this.width, this.height);

        //ctx.fillStyle = 'white';
        //ctx.font = '30px Helvetica';
        //ctx.fillText(Score ${this.score}, 80, 30) lives( after)
  }

  results(generatedChoice) {
    if (playerChoice === generatedChoice) {
      return "The result is a tie!";
    } else if (playerChoice === "rock") {
      if (generatedChoice === "paper") {
        return "paper covers rock";
      } else if (generatedChoice === "scissors") {
        return "rock crushes scissors";
      } else if (generatedChoice === "lizard") {
        return "rock crushes lizard";
      } else {
        return "spock vaporizes rock";
      }
    } else if (playerChoice === "paper") {
      if (generatedChoice === "rock") {
        return "paper covers rock";
      } else if (generatedChoice === "scissors") {
        return "scissors cut paper";
      } else if (generatedChoice === "lizard") {
        return "lizard eats paper";
      } else {
        return "paper disproves spock";
      }
    } else if (playerChoice === "scissors") {
      if (generatedChoice === "rock") {
        return "rock crushes scissors";
      } else if (generatedChoice === "paper") {
        return "scissors cut paper";
      } else if (generatedChoice === "lizard") {
        return "scissors decapitate lizard";
      } else {
        return "spock smashes scissors";
      }
    } else if (playerChoice === "lizard") {
      if (generatedChoice === "rock") {
        return "rock crushes lizard ";
      } else if (generatedChoice === "paper") {
        return "lizard eats paper";
      } else if (generatedChoice === "scissors") {
        return "scissors decapitate lizard";
      } else {
        return "lizard poisons spock";
      }
    } else if (playerChoice === "spock") {
      if (generatedChoice === "rock") {
        return "spock vaporizes rock";
      } else if (generatedChoice === "paper") {
        return "paper disproves spock ";
      } else if (generatedChoice === "scissors") {
        return "spock smashes scissors";
      } else {
        return "lizard poisons spock";
      }
    }
  }
}

document.addEventListener("keydown", (generatedChoice) => {
  playerChoice = this.id;
  generatedChoice = Math.floor(Math.random() * 5);

  switch (generatedChoice) {
    case 0:
        generatedChoice = "rock";
      break;
    case 1:
        generatedChoice = "paper";
      break;
    case 2:
        generatedChoice= "scissors";
      break;
    case 3:
        generatedChoice= "lizard";
      break;
    case 4:
        generatedChoice= "spock";
      break;
  }
});
// this is not working let result = compare(generatedChoice);

