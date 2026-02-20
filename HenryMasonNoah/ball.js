class Ball 
{
    constructor(x, y, speed) 
    {
        this.position = createVector(x, y);
        this.speed = speed;
        this.movement = createVector(0, 0);
        this.isPassed = false;
        this.isShot = false;
        this.destination = createVector(0,0);
    }
    
    display()
    {
         push()
        translate(this.position)
        translate(-143,-300)
        fill('yellow')
        ellipse(142, 301, 26, 28);
        line(138, 289, 137, 314);
        line(148, 289, 147, 314);
        line(129, 300, 156, 300);
        pop()
    }
    
    move(dx, dy)
    {
        this.position.x += dx;
        this.position.y += dy;
    }
    
    pass() 
    {
        if(this.isPassed)
        {
            if(this.position.dist(this.destination) > 10)
            {
                this.position.add(this.movement);
            }
            else
            {
                this.isPassed = false;
            }
        }
    }
    shoot()
    {
        if(this.isShot)
        {
            if(this.position.dist(this.destination) > 10)
            {
                this.position.add(this.movement);
            }
            else
            {
                this.isShot = false;
            }
        }
    }
    shootTo(x,y)
    {
         this.destination = createVector(x,y);
         this.movement = this.destination.sub(this.position);
         this.movement.setMag(10)
         this.isShot = true;
         this.destination = createVector(x, y);
    }
    
    passTo(x, y) {
        this.destination = createVector(x, y);
        this.movement = this.destination.sub(this.position);
        this.movement.setMag(this.speed)
        this.isPassed = true;
        this.destination = createVector(x, y); // p5 vector bug????
    }
}