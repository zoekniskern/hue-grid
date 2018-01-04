//Main File
//Connects to HueGrid.js
var testGrid;
var ranGrid;

function setup(){
    createCanvas (windowWidth,windowHeight);
    colorMode(HSB);
    
    background(61);
    noStroke();
    
    //testGrid = new Grid();
    ranGrid = new gridRand();
    
}

function draw(){
    //testGrid.display();
    ranGrid.display();
}

//Allows to change window width
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}