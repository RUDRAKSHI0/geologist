
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1;
var stone;
var rubber;
var sand1,sand2,sand3;
var iron;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20);
	hammer1 = new Hammer(100,100);
	stone = new Stone(100,100,80,80);
	rubber = new Rubber(60,60)
	sand1=new Sand(350,400);
	sand2=new Sand(500,400);
	sand3=new Sand(430,400);
	iron=new Iron(600,400);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background("lightblue");
  plane.display();
  hammer1.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  iron.display();
  drawSprites();
 
}



