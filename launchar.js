class launchar{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.launchar = Constraint.create(options);

        World.add(world, this.launchar)
    }

    fly(){
        this.launchar.bodyA = null;
    }

    display(){
       
      
            var pointA = this.launchar.bodyA.position;
            var pointB = this.pointB;
            push();
           translate(pointA.x,pointA.y)
            stroke(48,22,8);
         
fill(0)
                strokeWeight(7);
            line(0,0,width,height)
            
            
            pop();
        }
    }
    
