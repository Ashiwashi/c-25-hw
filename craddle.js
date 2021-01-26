class Craddle extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,200,height,angle);
      this.image = loadImage("wood2.png");
      Matter.Body.setAngle(this.body, angle);
      translate(width/2, height/2);
      rotate(PI / 3);
      rect(-26, -26, 52, 52);
    }
  }