class Paper {
    constructor(x, y, radius) {
        
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        
      }
    }