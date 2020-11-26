
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   roof=new Roof(450,50,600,50);
   bob = new Bob (450,500,50)
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  roof.display();
  
  drawSprites();
  
}



