class Rubber{
    constructor(x,y){
        var options={
    
            'restitution':2,
            'friction':0.5,
            'density':0.02
             }
            this.body= Bodies.rectangle(x,y,50,30,options);
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
        fill("blue");
        strokeWeight(4);
        stroke("blue");
    
        ellipse(0, 0, 55, 55);
        pop();
        }
}