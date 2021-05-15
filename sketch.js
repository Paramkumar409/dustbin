
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,670,1600,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(550,600,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body , paperObj.body.position , {x : 145 , y: -120} );
      
  
	}
}
