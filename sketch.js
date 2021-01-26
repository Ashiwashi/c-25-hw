
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var string1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,200);
	string1 = new String(ball.body, {x: 100, y: 50});


	ball2 = new Ball(200, 200)
	string2 = new String(ball2.body, {x: 200, y: 50})

	ball3 = new Ball(300, 200)
	string3 = new String(ball3.body, {x: 300, y: 50})

	ball4 = new Ball(400, 200)
	string4 = new String(ball4.body, {x: 400, y: 50})

	ball5 = new Ball(700, 0)
	string5 = new String(ball5.body, {x: 500, y: 50})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300,300);
  string1.display();
  ball.display();
  string2.display();
  ball2.display();
  string3.display();
  ball3.display();
  string4.display();
  ball4.display();
  string5.display();
  ball5.display();
  drawSprites();
 
}



