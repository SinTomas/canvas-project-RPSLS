class Component {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = "red";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  userChoice(playerChoice) {
    switch (playerChoice) {
      case document.getElementsByClassName("rock"):
        this.color = "red";
        console.log("rock is red uh-uh");
        break;
      case document.getElementsByClassName("paper"):
        this.color = "blue";
        break;
      case document.getElementsByClassName("scissors"):
        this.color = "green";
        break;
      case document.getElementsByClassName("lizard"):
        this.color = "yellow";
        break;
      case document.getElementsByClassName("spock"):
        this.color = "orange";
        break;
    }
    return;
  }
}
