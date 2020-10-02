class Plinko{
    constructor(x,y,radius){
        var plinko_options={
            isStatic : true,
           // 'restitution': 0.9,
            //'friction' :0.5,
            //'density' :1.2
       }
       this.body = Bodies.circle(x, y, radius, plinko_options);
       this.radius = radius;
      
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       push()
      // translate(pos.x,pos.y)
       ellipseMode(CENTER);
       fill("yellow");
       ellipse(pos.x,pos.y,this.radius,this.radius)
       pop();
     }
   
}