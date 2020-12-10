class Kite extends BaseClass {
    constructor(x,y,height,width){
      super(x,y,height,width);
      this.image = loadImage("Kite10.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      fill(0)
      super.display();
    }
  }