
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1;
var g;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   b1=new ball(50,650,20);

   g=new ground(400,690,width,20);

   d1=new dustbin(600,630,20,100);
	d2=new dustbin(660,670,100,20);
	d3=new dustbin(710,630,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
b1.display();
g.display();
d1.display();
d2.display();
d3.display();
 
}

function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:50,y:-90});
	}
}

