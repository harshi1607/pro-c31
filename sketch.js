var divisionHeight=300
var particles=[];
var plinkos=[];
var division=[];


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  for(var k=0;k<=width;k=k+80){
    division.push= (new division(k,height-divisionHeight/2),10,divisionHeight)
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(widh/2-10,width/2+10),10,10))
  }
}
