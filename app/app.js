/*
*
*
*
*/

/*
**********
GLOBAL DATA
**********
*/
var p1;

/*
**********
MAIN FUNCTIONS
**********
*/
function setup(){
    createCanvas(640,480);
    p1 = new Population();
    p1.growCrop();
    p1.live();

}//end setup()

function draw(){
    background(127);
    for(var i = 0; i < p1.popSize; i++){
        p1.currentGen.members[i].appear();
        p1.crop[i].appear();
    }
}//end draw()
