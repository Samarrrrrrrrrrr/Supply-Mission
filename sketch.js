var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1, wall2, wall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	opitions={
		isStatic:true

	}
	wall1 = Bodies.rectangle(350, 500, 25, 75, opitions)
	World.add(world, wall1)

	wall2 = Bodies.rectangle(450, 500, 25, 75, opitions)
	World.add(world, wall2)

	wall3 = Bodies.rectangle(400, 525, 100, 25, opitions)
	World.add(world, wall3)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  rect(wall1.position.x, wall1.position.y, 25, 75)

  rect(wall2.position.x, wall2.position.y, 25, 75)

  rect(wall3.position.x, wall3.position.y, 100, 25)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false)
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



