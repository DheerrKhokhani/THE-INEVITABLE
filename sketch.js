
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,monster1,monster2,monster3,hole,monsterimage,holeimg,ballimg,ball;
var gameState;
gameState = "serve";
function preload()
{
  monsterimage = loadImage("monsters.png");
  holeimg = loadImage("hole3.png");
  ballimg = loadImage("ball.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  ball = createSprite(150,300,50,50);
  ball.addImage(ballimg);
  ball.scale = 0.3;
ground1 = createSprite(650,50,1300,100)
ground2 = createSprite(650,550,1300,100);
monster1 = createSprite(350,150,50,50);
monster1.addImage(monsterimage);
monster1.scale = 0.3;
monster2 = createSprite(700,450,50,50);
monster2.addImage(monsterimage);
monster2.scale = 0.3;
monster3 = createSprite(1050,150,50,50);
monster3.addImage(monsterimage);
monster3.scale = 0.3;
hole = createSprite(1175,450,30,30);
hole.addImage(holeimg);
hole.scale = 0.3;
monster1.velocityY = 4;
monster2.velocityY = 4;
monster3.velocityY = 4;
hole.velocityY = 8;

ball.debug = true;
monster1.debug = true;
monster2.debug = true;
monster3.debug = true;
hole.debug = true;


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  createEdgeSprites();
  monster1.bounceOff(ground1);
  monster1.bounceOff(ground2);
 
  monster2.bounceOff(ground1);
  monster2.bounceOff(ground2);
  
  monster3.bounceOff(ground1);
  monster3.bounceOff(ground2);
  
  hole.bounceOff(ground1);
  hole.bounceOff(ground2);

if(keyIsDown(ENTER) && gameState === "serve") {
  ball.velocityX = 25;
  gameState = "play";
}

if (ball.isTouching(monster1) || ball.isTouching(monster2) || ball.isTouching(monster3) || ball.x > 1300) {
  gameState = "gameOver";
  monster1.destroy();
  monster2.destroy();
  monster3.destroy();
  hole.destroy();
  ball.destroy();
  ground1.destroy();
  ground2.destroy();
} 

console.log(gameState);

  if (gameState === "gameOver" ) {
    noStroke();
  textSize(35);
  fill ("white");
  text("GAME OVER...HAHAHAHA",450,300); 
  }

if (ball.isTouching(hole) && gameState === "play") {
  noStroke;
  textSize(35);
  fill ("white");
  text("YOU BEAT THE INEVITABLE",400,300);
}



  drawSprites();
}
  



