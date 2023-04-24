console.log("JS GAME")

let computerChoice;


class Game {

    constructor(ctx, width, height, playerChoice){
        this.ctx = ctx;
        this.width = width; 
        this.height = height;
        this.playerChoice = playerChoice;
        // Obstacles / Enemies
        this.enemies = [];
        // Lives
        this.lives = 2;
    }
    
    function Results (generatedChoice) {
        
        if (playerChoice === generatedChoice) {
            return "The result is a tie!";
        } 
        else if (playerChoice === "rock") {
    
        if (generatedChoice === "paper") {
            return "paper covers rock";
        } 
        else if (generatedChoice === "scissors") {
            return "rock crushes scissors";
        } 
        else if (generatedChoice === "lizard") {
            return "rock crushes lizard";
        } 
        else {
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
        }}
    }

    document.addEventListener('keydown', (computerChoice) => {
        userChoice = this.id;
        computerChoice = Math.floor(Math.random() * 5); 
        
        switch (computerChoice) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "scissors";
        break;
      case 3:
        computerChoice = "lizard";
        break;
      case 4:
        computerChoice = "spock";
        break;
    }})

    let result = compare(computerChoice);

}

