
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var paper , paperImage
 var ground 
 var bin , binImage
  

 function preload(){
 



 }
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,100,70)
	paperImage = loadImage("paper.png")

	ground = new Ground( 600,650,1200,30)
	bin = new Dustbin(800, 620 )
    binImage = loadImage("bin.png")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

 ground.display()
 
 paper.display()
 bin.display()
}

function keyPressed(){
 if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:175 , y : -175})
 }

}



