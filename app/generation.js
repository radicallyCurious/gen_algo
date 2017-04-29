function Generation(size){
    this.members = [];
    this.genSize = size;

    this.createPop = function(){
        for(var i = 0; i < this.genSize; i++){
            this.members[i] = new Phoenix();
        }
    };//end createPop()

}//end Generation
