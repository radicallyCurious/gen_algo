function Food(){
    this.xpos = random(10,(width-10));
    this.ypos = random(10,(height-10));
    this.attraction = createVector(1,1);
    this.attraction = random(1,3);
    this.spoiled = false;
    this.lifeSpan = 255;
    this.eaten = false;
    this.size = 5;


    this.update = function(){
        if (this.lifeSpan <= 0) {
            this.spoiled = true;
            this.col = color(255,0,0);
        }else if (this.lifeSpan > 0) {
            this.lifeSpan--;
            this.col = color(0,this.lifeSpan,0);
        }//end if block
    };//end update()

    this.appear = function(){
        if (this.eaten == false) {
            this.update();
            fill(this.col);
            noStroke();
            ellipse(this.xpos, this.ypos, this.size);
        }
    };//end appear()

}//end Food()
