// 01_Gen_Jitter


//var speed = 2.5;  assigned as a property in JitterBug constructor
//var diameter = 20; passed through constructor
//var x; passed through constructor
//var y; passed through constructor
var bug; // object variable declared for JitterBug
var jit;

function setup() {
  createCanvas(480, 120);
  background(204);
 
  //x = width/2; moved into new instance of JitterBug
  //y = height/2; moved into new instance of JitterBug
  
  // Create new JitterBug object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20);
  jit = new JitterBug(width * 0.66, height/2, 50);
  
  
}

function draw() {
  // x += random(-speed, speed);  converted into method "move" below
 // y += random(-speed, speed);   converted into method "move" below
 // ellipse(x, y, diameter, diameter); converted into method "display" below
  
  //Calling methods from Jitterbug instance in setup
  fill('red');
  bug.move();
  bug.display();
  fill('blue');
  jit.move();
  jit.display();
  
}

