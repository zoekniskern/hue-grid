//Main File
//Connects to HueGrid.js
var testGrid;
var ranGrid;
var gridArray;
var arrayLength;
var startx = 10;
var starty = 10;
var len = 300;
var wid = 200; 

function setup(){
    createCanvas (940, 640);
    colorMode(HSB);
    
    background(256);
    noStroke();
    
    //testGrid = new Grid();
    //ranGrid = new gridRand();
    arrayLength = 11;
    gridArray = Array(arrayLength);
    
    for(var i = 0; i < arrayLength; i++){
           
        gridArray[i] = new gridRand(startx, starty, len, wid);
        
        if(startx < 850){
            startx += 310;
        }
        else{
            startx = 10;
            if(starty < 430){
            starty += 210;
        }
        else{
            starty = 10;
        }
        }
        
    }
    
    
    //gridArray[0] = new gridRand(10,10,300,200);
    
}

function draw(){
    //testGrid.display();
    //ranGrid.display();
    //gridArray[0].display();
    
    
    for(var i = 0; i < arrayLength; i++){
        gridArray[i].display();
    }
    
}
