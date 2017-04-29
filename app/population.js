function Population(){
    this.popSize = 20;
    this.currentGen = new Generation(this.popSize);
    this.nextGen = [];
    this.cropSize = 20;
    this.crop = [];

    this.growCrop = function(){
        for(var i = 0; i < this.cropSize; i++){
            this.crop[i] = new Food();
        }
    };//end growCrop()

    this.live = function(){
        this.currentGen.createPop();
        for(var i = 0; i < this.popSize; i++){
            this.crop[i].appear();
        }
    };//end live()

}//end Population
