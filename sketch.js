
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var paper;
var paperimg,dustbinimg;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground1=new Ground(540,640,20,90)
	ground2=new Ground(400,680,800,20)
	ground3=new Ground(680,635,20,90)
	ground4=new Ground(610,660,120,20)

	paper=new Paper(100,100,10)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130);
  ground1.display();
 
  ground3.display();
  ground4.display();
  paper.display();

  drawSprites();
}

function keyPressed(){
	if( keyCode===UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:190,y:-18});
	}
  }