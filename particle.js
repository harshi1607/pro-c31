class Particle{
    constructor(x,y,radius){
        var particle_options={
            isStatic : false,
            'restitution': 0.9,
            'friction' :0.5,
            'density' :1.2
       }
       this.body = Bodies.circle(x, y, radius, particle_options);
       this.radius = radius;
      this.color=color(random(0,255),random(0,255),random(0,255))
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       var angle =this.body.angle;
       push()
       translate(pos.x,pos.y)
       noStroke();
       fill(this.color);
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius)
       pop();
     }
   
}