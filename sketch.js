
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body1,body2,body3;
var trash;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
    world = engine.world;
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background(0);
    Engine.update(engine);
  
  drawSprites();
 
}



