/* Hue Grid JS
In class
*/

//basic grid that does specific things
function Grid(){
    var hueGrid;
    
    var hueDev = 5;
    var maxHue = 360;
    var cellSize = 10;
    
    //Based on size of window
    var nRows = Math.floor(300 / cellSize + 1);
    var nCols = Math.floor(400 / cellSize + 1);
    
    //Initialize array
    hueGrid = Array(nRows);
    
    //Fill array
    for(let i = 0; i < nRows; i++){
        hueGrid[i] = Array(nCols);
        for (let j = 0; j < nCols; j++){
            hueGrid[i][j] = random(maxHue);
            console.log("filled the grid");
        }
    }
    
    //Show it
    this.display = function(){
        //drawing cells of the grid
        //Columns
        for (let i = 0; i < hueGrid.length; i++){
            //Rows
            for(let j = 0; j < hueGrid[i].length; j++){
                //wrap around hue value
                hueGrid[i][j] = hueGrid[i][j] + random(-hueDev, hueDev);
                
                if(hueGrid[i][j] < 0){
                    hueGrid[i][j] = hueGrid[i][j] - maxHue;
                }
                else if(hueGrid[i][j] < 0){
                    hueGrid[i][j] += maxHue;
                }
                

                fill(hueGrid[i][j],100,100);
                rect( j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }
}

//grid with randomized values
function gridRand(){
    var hueGrid;
    
    var hueDev = Math.floor(Math.random()*8);
    var maxHue = 360;
    //var cellSize = 10;
    var cellSize = Math.floor(random(7,15));
    
    //Based on size of window
    var nRows = Math.floor(300 / cellSize + 1);
    var nCols = Math.floor(400 / cellSize + 1);
    
    //Initialize array
    hueGrid = Array(nRows);    
    
    var types = ["(i + j) * 10", "i * j", "random(maxHue)"];
    var thisType = random(types);
    
    //Fill array
    for(let i = 0; i < nRows; i++){

        hueGrid[i] = Array(nCols);
        for (let j = 0; j < nCols; j++){
            
            
            hueGrid[i][j] = eval(thisType);
            console.log("filled the grid");
        }
    }
    
    //Show it
    this.display = function(){
        //drawing cells of the grid
        //Columns
        for (let i = 0; i < hueGrid.length; i++){
            //Rows
            for(let j = 0; j < hueGrid[i].length; j++){
                //wrap around hue value
                hueGrid[i][j] = hueGrid[i][j] + random(-hueDev, hueDev);
                
                if(hueGrid[i][j] < 0){
                    hueGrid[i][j] = hueGrid[i][j] - maxHue;
                }
                else if(hueGrid[i][j] < 0){
                    hueGrid[i][j] += maxHue;
                }
                

                fill(hueGrid[i][j],Math.floor(random(80,101)),Math.floor(random(80,101)));
                rect( j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }
}

    
