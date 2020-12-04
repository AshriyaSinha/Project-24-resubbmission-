
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	papp = new Paper(250,500,10); 	

	ground = new Ground(400,650,800,25);

	box1=new Box(580,640,100,20, {restitution:0, isStatic:false});
	box2=new Box(555,630,20,95, {restitution:0, isStatic:false});
	box3=new Box(654,630,20,95, {restitution:0, isStatic:false});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  papp.display();
}

function keyPressed (){
	if (keyCode == UP_ARROW ){
		Matter.Body.applyForce (papp.body,papp.body.position,
			{
			x:50,
			y:-50,
		});
	}
}


