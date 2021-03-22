
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxdrops=100
var thunder1, thunder2, thunder3, thunder4
function preload()
{
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//ground=new Ground(0,600,1650,20)
drop1=new Drop(random(0,800),random(0,250),5)
drop2=new Drop(random(0,800),random(0,250),5)
drop3=new Drop(random(0,800),random(0,250),5)
drop4=new Drop(random(0,800),random(0,250),5)
drop5=new Drop(random(0,800),random(0,250),5)
drop6=new Drop(random(0,800),random(0,250),5)
drop7=new Drop(random(0,800),random(0,250),5)
drop8=new Drop(random(0,800),random(0,250),5)
drop9=new Drop(random(0,800),random(0,250),5)
drop10=new Drop(random(0,800),random(0,250),5)
drop11=new Drop(random(0,800),random(0,250),5)
drop12=new Drop(random(0,800),random(0,250),5)
drop13=new Drop(random(0,800),random(0,250),5)
drop14=new Drop(random(0,800),random(0,250),5)
drop15=new Drop(random(0,800),random(0,250),5)
drop16=new Drop(random(0,800),random(0,250),5)
drop17=new Drop(random(0,800),random(0,250),5)
drop18=new Drop(random(0,800),random(0,250),5)
drop19=new Drop(random(0,800),random(0,250),5)
drop20=new Drop(random(0,800),random(0,250),5)
man=new Man(650,600,100)
thunder=new Thunder(random(0,800),random(0,250),250)

Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
 
  //ground.display()
  drop1.display()
  drop2.display()
  drop3.display()
  drop4.display()
  drop5.display()
  drop6.display()
  drop7.display()
  drop8.display()
  drop9.display()
  drop10.display()
  drop11.display()
  drop12.display()
  drop13.display()
  drop14.display()
  drop15.display()
  drop16.display()
  drop17.display()
  drop18.display()
  drop19.display()
  drop20.display()
  man.display()
  thunder.display()
 
  
}
function spawnLightning(){
  if (frameCount % 80 === 0){
    var thunder = createSprite(random(0,800),random(0,150),10,10);
    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: thunder.addImage(thunder1);
               break;
       case 2: thunder.addImage(thunder2);
               break;
       case 3: thunder.addImage(thunder3);
               break;
       case 4: thunder.addImage(thunder4);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     thunder.scale = (random(0.3,0.6))
     //thunder.lifetime = 8
    }
  }

