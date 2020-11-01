class SlingShot{
    constructor(bodyA, pointB){//constructor takes a body and a point
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,//flexibilty of the constraint
            length: 10//length of the constraint
        }
        //images loaded
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB//assign pointB to the slingshot
        this.sling = Constraint.create(options);//sling created #Constraint used
        World.add(world, this.sling);//sling added to world
    }

    fly(){//to release the bird once the mouse is released
        this.sling.bodyA = null;//bird is set free from the slingshot
    }

    display(){
        //images for the sling shot
        image(this.sling1, 200,20);
        image(this.sling2, 170,20);

        if(this.sling.bodyA){//if bird is attached to sling
            var pointA = this.sling.bodyA.position;//pos of the bird
            var pointB = this.pointB;//pos of the attaching point
            push();
            if(pointA.x < 220){//if the bird is pulled behind
                strokeWeight(4);//thickness of the border
                stroke(49,23,8);//used to give border to text and lines
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x-30,pointA.y-10,15,30);//image for the rubber band
            }
            else{//if the bird is pulled in front
                strokeWeight(4);
                stroke(49,23,8);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x+25,pointA.y-10,15,30)
            }
            pop();
            
        }
    }
    
}