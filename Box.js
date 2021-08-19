class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':1.0,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if (this.body.speed < 5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(rgb(118,252,111));
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
    }
  }
};
