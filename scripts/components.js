class Component {
  constructor(x, y, w, h, character, ctx, lives) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.character = character;
    this.option = "";
    this.ctx = ctx;
    this.lives = lives;
    //images
    //rock
    this.rock = new Image();
    this.rock.src = "./images/options/rock.png";
    //paper
    this.paper = new Image();
    this.paper.src = "./images/options/paper.png";
    //scissors
    this.scissors = new Image();
    this.scissors.src = "./images/options/scissors.png";
    //lizard
    this.lizard = new Image();
    this.lizard.src = "./images/options/lizzard.png";
    //spock
    this.spock = new Image();
    this.spock.src = "./images/options/spock.png";
  }

  userChoice(choice) {
    this.option = choice;
    switch (choice) {
      case "rock":
        this.ctx.drawImage(
          this.rock,
          canvas.width / 2 - 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "paper":
        this.ctx.drawImage(
          this.paper,
          canvas.width / 2 - 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "scissors":
        this.ctx.drawImage(
          this.scissors,
          canvas.width / 2 - 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "lizard":
        this.ctx.drawImage(
          this.lizard,
          canvas.width / 2 - 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "spock":
        this.ctx.drawImage(
          this.spock,
          canvas.width / 2 - 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
    }
  }

  generatedChoice() {
    let generatedChoice = Math.floor(Math.random() * 5);

    switch (generatedChoice) {
      case 0:
        generatedChoice = "rock";
        break;
      case 1:
        generatedChoice = "paper";
        break;
      case 2:
        generatedChoice = "scissors";
        break;
      case 3:
        generatedChoice = "lizard";
        break;
      case 4:
        generatedChoice = "spock";
        break;
    }
    this.option = generatedChoice;
    switch (generatedChoice) {
      case "rock":
        this.ctx.drawImage(
          this.rock,
          canvas.width / 2 + 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "paper":
        this.ctx.drawImage(
          this.paper,
          canvas.width / 2 + 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "scissors":
        this.ctx.drawImage(
          this.scissors,
          canvas.width / 2 + 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "lizard":
        this.ctx.drawImage(
          this.lizard,
          canvas.width / 2 + 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
      case "spock":
        this.ctx.drawImage(
          this.spock,
          canvas.width / 2 + 70,
          canvas.height / 2 - 100,
          520,
          190
        );
        break;
    }
  }

  choice(choice) {
    if (this.character === "player") {
      this.userChoice(choice);
    } else {
      this.generatedChoice();
    }

    return;
  }
}
