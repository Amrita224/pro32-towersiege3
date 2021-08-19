const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var ground, stand1, stand2;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9;
var polygon, polygonImg, polySp;
var slingShot;
var bgImg;

function preload() {
  polygonImg = loadImage("images/hexagon2.png");
  backgroundback();
}

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(width / 2, 680, width, 15);
  stand1 = new Ground(1000, 350, 200, 15);
  stand2 = new Ground(650, 500, 250, 15);
  //1st line
  b1 = new Box(560, 470, 30, 40);
  b2 = new Box2(590, 470, 30, 40);
  b3 = new Box3(620, 470, 30, 40);
  b4 = new Box4(650, 470, 30, 40);
  b5 = new Box3(680, 470, 30, 40);
  b6 = new Box2(710, 470, 30, 40);
  b7 = new Box(740, 470, 30, 40);
  //2nd  line
  b8 = new Box(590, 430, 30, 40);
  b9 = new Box2(620, 430, 30, 40);
  b10 = new Box3(650, 430, 30, 40);
  b11 = new Box2(680, 430, 30, 40);
  b12 = new Box(710, 430, 30, 40);
  //3rd line
  b13 = new Box(620, 390, 30, 40);
  b14 = new Box2(650, 390, 30, 40);
  b15 = new Box(680, 390, 30, 40);
  //top
  b16 = new Box(650, 350, 30, 40);

  //stand 2: 1st line
  bb1 = new Box(940, 320, 30, 40);
  bb2 = new Box2(970, 320, 30, 40);
  bb3 = new Box3(1000, 320, 30, 40);
  bb4 = new Box2(1030, 320, 30, 40);
  bb5 = new Box(1060, 320, 30, 40);
  //3rd line
  bb6 = new Box(970, 280, 30, 40);
  bb7 = new Box2(1000, 280, 30, 40);
  bb8 = new Box(1030, 280, 30, 40);
  //4th line
  bb9 = new Box(1000, 240, 30, 40);



  polygon = Bodies.circle(50, 200, 50);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, { x: 200, y: 400 });


  Engine.run(engine);


}


function draw() {
  if(bgImg)
  background(bgImg);
  
  Engine.update(engine);
 
  text(mouseX + " : " + mouseY, 100, 80);


  ground.display();
  stand1.display();
  stand2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();

  b16.display();

  // stand 2
  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();

  bb6.display();
  bb7.display();
  bb8.display();

  bb9.display();
  push();
  fill(rgb(110, 60, 60));
  imageMode(CENTER);
  polySp=image(polygonImg, polygon.position.x, polygon.position.y,40,40);
  tint(155, 12);
  polySp=image(polygonImg, polygon.position.x, polygon.position.y,50,50);
  pop();

  slingShot.display();
  


  drawSprites();
  fill("red");
  textFont("bold");
  textSize(20);
  text("DRAG THE STONE AND RELEASE IT TOWARDS THE BLOCKS", 300, 50);
  fill("green");
  textFont("cursive");
  text("PRESS 'SPACE' FOR MORE CHANCE", 600, 650);
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}


function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}

async function backgroundback(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var time=responseJSON.datetime;
  var hour=time.slice(11,13)
  console.log(hour);

  if(hour >=06 && hour <=18){
    bg="images/bg2.jpg"
  }
  else{
    bg="images/bg.png"
  }
  bgImg=loadImage(bg);

}