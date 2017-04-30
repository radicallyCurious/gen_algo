function Phoenix(){
    //DATA
    this.pos = createVector(random(0,width), random(0,height));
    this.vel = createVector(random(-5,5),random(-5,5));
    this.accel = createVector(0,0);
    this.lifeSpan = 255;
    this.col = color(0,0,255, this.lifeSpan);
    this.size = 20;

    this.applyForce = function(force){
        this.accel.add(force);//adding a force to the acceleration
    };//end applyForce()

    this.update = function(){
        this.vel.add(this.accel);
        this.pos.add(this.vel);
        this.accel.mult(0);//reset the acceleration or else all hell breaks loose
    };//end update()

    this.appear = function(){
        this.col = color(0,0,255, this.lifeSpan);
        this.update();
        fill(this.col);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size);
    };//end appear()
}
