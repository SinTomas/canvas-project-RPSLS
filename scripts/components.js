class Component {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = "purple";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  choice(choice) {
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
    return;
  }
}
