// 01_Gen_Aurora_Threads
var ranRed;
var ranGreen;
var ranAlpha;
var angle = 0.1;
var scalar = 80;
var speed = 0.045;
var x = 0;
var y = 0;

function setup() {
  createCanvas(1024, 1024);
  background(0);
  
  for (var i = 0; i < scalar; i++){
    x += i + random(0, width);
    y += i + random(0, height);
    
    
  }
 
}
 
function draw() {
  
  if (mouseIsPressed){
  
  //aurora
  ranRed = random(0, 255);
  ranGreen = random(100, 255);
  ranAlpha = random(5, 15);
  
  noStroke();
  fill(ranRed,ranGreen,255,ranAlpha);
  rotate(angle);
  beginShape();
  vertex(0, 0);
  bezierVertex(x, y, 80, 75, 30, 75);
  bezierVertex(x + 50,y + 80, 60, 25, 30, 20);
  endShape();
  
  angle += speed;
  }
 

}



