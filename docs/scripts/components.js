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
    this.rock.src = "docs/assets/images/options/rock.png";
    //paper
    this.paper = new Image();
    this.paper.src = "docs/assets/images/options/paper.png";
    //scissors
    this.scissors = new Image();
    this.scissors.src = "docs/assets/images/options/scissors.png";
    //lizard
    this.lizard = new Image();
    this.lizard.src = "docs/assets/images/options/lizard.png";
    //spock
    this.spock = new Image();
    this.spock.src = "docs/assets/images/options/spock.png";
    //rock
    this.rockNPC = new Image();
    this.rockNPC.src = "docs/assets/images/options/rock-npc.png";
    //paper
    this.paperNPC = new Image();
    this.paperNPC.src = "docs/assets/images/options/paper-npc.png";
    //scissors
    this.scissorsNPC = new Image();
    this.scissorsNPC.src = "docs/assets/images/options/scissors-npc.png";
    //lizard
    this.lizardNPC = new Image();
    this.lizardNPC.src = "docs/assets/images/options/lizard-npc.png";
    //spock
    this.spockNPC = new Image();
    this.spockNPC.src = "docs/assets/images/options/spock-npc.png";
  }

  userChoice(choice) {
    this.option = choice;
    switch (choice) {
      case "rock":
        this.ctx.drawImage(
          this.rock,
          canvas.width / 2 - 110,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "paper":
        this.ctx.drawImage(
          this.paper,
          canvas.width / 2 - 110,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "scissors":
        this.ctx.drawImage(
          this.scissors,
          canvas.width / 2 - 110,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "lizard":
        this.ctx.drawImage(
          this.lizard,
          canvas.width / 2 - 110,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "spock":
        this.ctx.drawImage(
          this.spock,
          canvas.width / 2 - 110,
          canvas.height / 2 - 50,
          120,
          120
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
          this.rockNPC,
          canvas.width / 2 + 50,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "paper":
        this.ctx.drawImage(
          this.paperNPC,
          canvas.width / 2 + 50,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "scissors":
        this.ctx.drawImage(
          this.scissorsNPC,
          canvas.width / 2 + 50,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "lizard":
        this.ctx.drawImage(
          this.lizardNPC,
          canvas.width / 2 + 50,
          canvas.height / 2 - 50,
          120,
          120
        );
        break;
      case "spock":
        this.ctx.drawImage(
          this.spockNPC,
          canvas.width / 2 + 50,
          canvas.height / 2 - 50,
          120,
          120
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
