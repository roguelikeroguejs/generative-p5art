// 01_Gen_Sincos

var angle = 0.0;
var offset = 200;
var scalar = 80;
var speed = 0.045;


function setup() {
  createCanvas(300, 340);
  background(204);
}

function draw() {
  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;
  var y4 = offset + sin(angle + 1.2) * scalar;
  var y5 = offset + cos(angle) * scalar;
  var y6 = offset + cos(angle + 0.4) * scalar;
  var y7 = offset + cos(angle + 0.8) * scalar;
  var y8 = offset + cos(angle + 1.2) * scalar;
  
  var sinval = sin(angle);
  var cosval = cos(angle);
  var r = map(sinval, -1, 1, 0, 255);
  var g = map(cosval, -1, 1, 0, 255);
  var b = map(sinval, 1, -1, 0, 255);
 
  fill(r,g,b);
  ellipse(80, y1, 40, 40);
  ellipse(120, y2, 40, 40);
  ellipse(160, y3, 40, 40);
  ellipse(200, y4, 40, 40);
  fill(r,g,b);
  ellipse(80, y5, 40, 40);
  ellipse(120, y6, 40, 40);
  ellipse(160, y7, 40, 40);
  ellipse(200, y8, 40, 40);
  
  angle += speed;
  scalar += speed;
}