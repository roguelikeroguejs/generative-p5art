// 01_Gen_Aurora_Array
var a = [];
var scalar = 80;
var x = 0;
var y = 0;

function setup() {
  createCanvas(1024, 768);
  background(0);

   // for (var i = 0; i < scalar; i++){
   // x += i + random(0, width);
   // y += i + random(0, height);
    
    
 // }

  for (var i = 0; i < 3; i++){
    //var x = random(width);
    //var y = random(height);
    x += i + random(0, width);
    y += i + random(0, height);
  
    a[i] = new Aurora(x, y);

  }
 
}
 
function draw() {
  
  if (mouseIsPressed){
    for (var i = 0; i < a.length; i++) {
      a[i].move();
      a[i].display();
      
    }
 
  }
}

function Aurora(tempX, tempY){
  this.x = tempX;
  this.y = tempY;
  this.angle = 0.1;
  this.speed = 0.045; 
  
  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };
  
  this.display = function(){
    //aurora  
    ranRed = random(0, 255);
    ranGreen = random(100, 255);
    ranAlpha = random(5, 15);
  
    noStroke();
    fill(ranRed,ranGreen,255,ranAlpha);
    rotate(this.angle);
    beginShape();
    vertex(1024, 768);
    bezierVertex(this.x, this.y, 80, 75, 30, 75);
    bezierVertex(this.x + 50,this.y + 80, 60, 25, 30, 20);
    endShape();
  
    this.angle += this.speed;
  };
  
  
}