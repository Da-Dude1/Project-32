
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0

function preload()
{
  img1=loadImage("boy.png")
  img2= loadImage("tree.png")
}

function setup() {
  createCanvas(800, 700);
 console.log(score)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground= new Ground(400,680,800,20)
	
	mango= new Mango(530,430,30,40)
	mango1= new Mango(500,430,30,40)
  mango2= new Mango(560,430,30,40)
  mango3= new Mango(590,430,30,40)
  mango4= new Mango(610,430,30,40)
  mango5= new Mango(640,430,30,40)
  mango6= new Mango(670,430,30,40)
  mango7= new Mango(690,430,30,40)
  mango8= new Mango(515,390,30,40)
  mango9= new Mango(545,390,30,40)
  mango10= new Mango(575,390,30,40)
  mango11= new Mango(605,390,30,40)
  mango12= new Mango(635,390,30,40)
  mango13= new Mango(665,390,30,40)
  mango14= new Mango(535,350,30,40)
  mango15= new Mango(565,350,30,40)
  mango16= new Mango(595,350,30,40)
  mango17= new Mango(625,350,30,40)


  tree=new Tree(600,460,280,20)
 

	stone= new Stone(200,200,50)
	chain= new SlingShot(stone.body,{x:200,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  textSize(35)
  text("Score: "+score,width-300,50)
 
  ground.display()
  
  mango.display()
  mango.score()
  mango1.display()
  mango1.score()
  mango2.display()
  mango2.score()
  mango3.display()
  mango3.score()
  mango4.display()
  mango4.score()
  mango5.display()
  mango5.score()
  mango6.display()
  mango6.score()
  mango7.display()
  mango7.score()
  mango8.display()
  mango8.score()
  mango9.display()
  mango9.score()
  mango10.display()
  mango10.score()
  mango11.display()
  mango11.score()
  mango12.display()
  mango12.score()
  mango13.display()
  mango13.score()
  mango14.display()
  mango14.score()
  mango15.display()
  mango15.score()
  mango16.display()
  mango16.score()
  mango17.display()
  mango17.score()


  
  tree.display()
  mango.display()
  mango1.display()
  mango2.display()
  chain.display()
  stone.display()
  
  
  drawSprites();
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed() {
  if (keyCode === 32) {
      chain.attach(stone.body)
  }
}