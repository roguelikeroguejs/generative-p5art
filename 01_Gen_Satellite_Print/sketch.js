// 01_Gen_Satellite_Print
var numDishTypes = 3;
var dishes = [];
var scaling = 0.14;
var dishDisplay;
 
// Load Images and Table File 
function preload() {
  for (var i = 0; i < numDishTypes; ++i) {
    dishes[i] = loadImage("dish" + (i+1) + ".svg");
  }
  dishDisplay = loadTable("satelliteDisplay.tsv", "header");
}


function setup() {
  createCanvas(720, 520);
  background(75,0, 130);
  imageMode(CENTER);
  // For each row 
  for (var i = 0; i < dishDisplay.getRowCount(); ++i)
  {
    var dishType = dishDisplay.getNum(i, "type");
    var x = dishDisplay.getNum(i, "x");
    var y = dishDisplay.getNum(i, "y");

    var dish = dishes[dishType - 1];
    image(dish, x, y, dish.width * scaling, dish.height * scaling);
    }

  }
  






