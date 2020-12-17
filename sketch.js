
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var backgroundImg ;

function preload(){
  backgroundImg = loadImage("lab.jpg");
}


function setup() {
	createCanvas(900, 900);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(450,100,600,40)
	bob1 = new Bob(250,600,100)
	bob2 = new Bob(350,600,100)
	bob3 = new Bob(450,600,100)
	bob4 = new Bob(550,600,100)
	bob5 = new Bob(650,600,100)
  rope1 = new Rope(bob1.body, roof.body, -35*5.5,0);
	rope2 = new Rope(bob2.body, roof.body, -35*3,0);
	rope3 = new Rope(bob3.body, roof.body, -35*0,0);
	rope4 = new Rope(bob4.body, roof.body, -35*-3,0);
  rope5 = new Rope(bob5.body, roof.body, -35*-5.5,0);
  
  Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg );
 
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}
