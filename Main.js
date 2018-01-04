//Main File
//Connects to HueGrid.js
var testGrid;

function setup(){
    createCanvas (windowWidth,windowHeight);
    colorMode(HSB);
    
    background(61);
    noStroke();
    
    testGrid = new Grid();
}

function draw(){
    testGrid.display();
}

//Allows to change window width
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}