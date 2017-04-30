function Population(){
    this.popSize = 20;
    this.currentGen = new Generation(this.popSize);
    this.nextGen = [];
    this.cropSize = 20;
    this.crop = [];

    this.findFood = function(pho, food){
        var d = int(dist(pho.pos.x, pho.pos.y, food.xpos, food.ypos));
        
        if (d < pho.size+food.size) {
            food.eaten = true;
        }
    };//end findFood()

    this.growCrop = function(){
        for(var i = 0; i < this.cropSize; i++){
            this.crop[i] = new Food();
        }
    };//end growCrop()

    this.initalizePop = function(){
        this.currentGen.createPop();
        this.growCrop();
    };

    this.live = function(){
        for(var i = 0; i < this.popSize; i++){
            p1.currentGen.members[i].appear();
            p1.crop[i].appear();
            this.findFood(this.currentGen.members[i], this.crop[i]);
        }
    };//end live()

}//end Population
