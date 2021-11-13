// 01_Gen_Jarray

var bugs = [];
var angle = 0.0;
var offset = 200;
var scalar = 80;
var speed = 0.045;

function setup() {
  createCanvas(800, 800);
  background(0);
  for (var i = 0; i < 33; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
  
}

function draw() {
  var sinval = sin(angle);
  var cosval = cos(angle);
  var r = map(sinval, -1, 1, 0, 255);
  var g = map(cosval, -1, 1, 0, 255);
  var b = map(sinval, 1, -1, 0, 255);

  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    fill(r,g,b);
    bugs[i].display();
  }
  angle += speed;
  scalar += speed;
  
}

function JitterBug(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5; // Not passed through = same for every instance
  
  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };
  
  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
  
}

