const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject
var world, paperObject;


function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, height - 10, width, 20);
	dustbinObj = new dustbin(1000, 470);
	paperObject = new paper(100, 100, 30);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);

	keyPressed();

	groundObject.display();
	dustbinObj.display();
	paperObject.display();
	
}	
	function keyPressed(){
	if (keyCode == UP_ARROW){		
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{xx:55,y:-63});

	}
}
