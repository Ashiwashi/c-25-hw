
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var  ground, ball, ballIage;
function preload(){

}
function setup() {
	var canvas = createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,800,1500,20);
	ball = new Ball(100, 300, 50);
	trash1 = new Trash(610, 600, 20, 120);
	trash2 = new Trash(690, 600, 20, 120);
	trash3 = new Trash(1000, 360, 230, 230)
		//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  background(255);
  ground.display();
  ball.display();
  trash1.display();
  trash2.display();
  trash3.addPic();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:200, y:-200})

	}


}



