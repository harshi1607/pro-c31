const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var divisionHeight=300
var particles=[];
var plinkos=[];
var divisions=[];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2),10,divisionHeight)
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  
}

function draw() {

  background(255,255,255);  
  drawSprites();
 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var t=0;t<plinkos.length;t++){
    plinkos[t].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }
}

