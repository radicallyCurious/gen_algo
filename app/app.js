/*
* Luc Pitre
* 29 April 2017
*playing with genetic algorithms
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
    p1.initalizePop();

}//end setup()

function draw(){
    background(127);
    p1.live();
}//end draw()
