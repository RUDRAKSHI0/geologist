class Sand {
    constructor(x,y){
    
     var options={
    
    'restitution':1.3,
    'friction':5,
    'density':1
     }
    this.body= Bodies.rectangle(x,y,5,5,options);
    this.width=50;
    this.height=30;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown");
    strokeWeight(4);
    stroke("brown");

    ellipse(0, 0, 5, 5);
    pop();
    }
    
    
    }