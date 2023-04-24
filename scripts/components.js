class Component {
  constructor(x, y, w, h, character, ctx, lives) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.character = character;
    this.color = "purple";
    this.option = "";
    this.ctx = ctx;
    this.lives = lives;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  userChoice(choice) {
    this.option = choice;
    switch (choice) {
      case "rock":
        this.color = "red";
        console.log("rock is red uh-uh");
        this.draw();
        break;
      case "paper":
        this.color = "blue";
        this.draw();
        break;
      case "scissors":
        this.color = "green";
        this.draw();
        break;
      case "lizard":
        this.color = "yellow";
        this.draw();
        break;
      case "spock":
        this.color = "orange";
        this.draw();
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
        this.color = "red";
        console.log("rock is red uh-uh");
        this.draw();
        break;
      case "paper":
        this.color = "blue";
        this.draw();
        break;
      case "scissors":
        this.color = "green";
        this.draw();
        break;
      case "lizard":
        this.color = "yellow";
        this.draw();
        break;
      case "spock":
        this.color = "orange";
        this.draw();
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
