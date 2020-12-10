const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var kite1,kite2;
var girlImg,boyImg;
var finishLine,finishline_gp;
var invisible,invisibleGp;

function preload(){

boyImg = loadImage("boy.png");
girlImg = loadImage("girl.png");

kite1Img = loadImage("Kite10.png");
kite2Img = loadImage("Kite2.png");

finishLine = loadImage("Finish Line.png");
}

function setup() {
  createCanvas(800,1000);

  engine = Engine.create();
  world = engine.world;

  invisibleGp = new Group();

  boy = createSprite(430, 780, 1, 1);
  girl = createSprite(130,770,1,1);
  ground = new Ground(600,height,1200,30);

  
  //string1 = new String(boy.body,kite1.body);

  kite1 = createSprite(500,740,1,1);
  kite2 = createSprite(15,700,1,1);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  finish_line = createSprite(1,1,1,1);
  
  invisible = createSprite(400,180,800,1);
  invisibleGp.add(invisible);

  image(finishLine,finish_line.x,finish_line.y,790,450);

  image(boyImg, boy.x, boy.y, 170, 230);
  image(girlImg,girl.x,girl.y,250,230);

  image(kite1Img,kite1.x,kite1.y,170,300); 
  image(kite2Img,kite2.x,kite2.y,300,400);

  
  ground.display();

  if(keyDown("SPACE")){
    kite2.velocityY = random(-4,5);
  }

  if(keyDown("UP_ARROW")){
    kite1.velocityY = -4;
 }

  drawSprites();
  createEdgeSprites();

  if(kite2.isTouching(invisibleGp)){
    kite2.velocityY = 0;
    kite1.velocityY = 0;
    textSize(20);
    text("You Lose!",400,500);
  }

  if(kite1.isTouching(invisibleGp)){
    kite1.velocityY = 0;
    kite2.velocityY = 0;
    textSize(20);
    text("You Win!!",400,500);  
  }
}