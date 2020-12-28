class Trash {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.addImage = loadImage("trash can.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
    addPic() {

      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, 600, 600, this.width, this.height);
      pop();

    }
  };