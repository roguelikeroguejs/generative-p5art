var easing = 0.05;
var offset = 0;
var drones = [];


function setup() {
  createCanvas(3000, 4000);
  strokeWeight(2);
  ellipseMode(RADIUS);
  
  
  var numDrones= 40;

  // Create each object
  for (var i = 0; i < numDrones; i++) {
    // Create a random x coordinate
    var x = random(0, 6000);
   // var y = random(-40, height-40);
    // Assign the y coordinate based on the order
    var y = map(i, 0, numDrones, 10000, height);
    var s = random(0.01, 0.5);  
 
    drones[i] = new Makedrone(x, y, s);
 }
  
}

function draw() {
   background(0, 153, 204);
  // Set the background to the "landscape" image
  // This image has to be the same dimensions as the size of the canvas
  //background(landscape);
 //    if (mouseIsPressed){
 // ellipse(mouseX, mouseY, 1, 1);
 // print(" X is " + mouseX);
 // print(" Y is " + mouseY);
 // }
  // Set the left/right offset and apply easing to
  // Make Transition smooth 
  
  for(var i = 0; i < 40; i++){
    drones[i].move();    
    drones[i].display();
    
 }


}


function Makedrone(tempX, tempY, tempS){
  this.x = tempX;
  this.y = tempY;
  this.s = tempS;
  this.yoffset = 0.0;
  this.angle = random(0, TWO_PI);
  
  this.display = function(){
    drone(this.x, this.y + this.yoffset, this.s);
  }
  
  this.move = function(){
    this.angle += 0.08;
    this.yoffset = cos(this.angle) *20;
  }
}

function drone(x, y, s){

push();
var targetOffset = map(mouseY, 0,   height, -40, 40);
  offset += (targetOffset - offset) * easing; 
  
//Drone
noStroke();
scale(s);
fill(56, 47, 193, 254);  //bluish purple
ellipse(x, y, 300, 300);  //Drone body
fill(64, 36, 196, 250);    // bluish purple
ellipse(x, y, 240, 240);  //Drone body
fill(62, 32, 201, 250);    // bluish purple
ellipse(x, y, 200, 200);  //Drone body
 
fill('#F05CA6');              //flesh
triangle(x, y-300, x+100, y, x-100, y);
triangle(x, y+300, x+100, y, x-100, y);

fill(240, 240, 240, 250);     // Grey/White
ellipse(x, y, 90, 90); //Large Eye 
fill('#FFFAFA');                  // White
ellipse(x, y, 86, 86); //Large Eye 
fill('#B41D1D'); // Red
var smallerOffset = offset * 0.6;
ellipse(x + smallerOffset, y  + smallerOffset, 45, 45); // iris 
fill(237, 235, 242, 250);
ellipse((x+30) + smallerOffset, y  + smallerOffset, 5, 5); // iris shine 
fill('#121111');
ellipse(x + offset, y  + offset, 20, 20); // pupil 


//gold 
fill('#EDBF48');
ellipse(x+120, y-200, 20, 20);  
fill('#EDBF48');
ellipse(x+175, y, 20, 20); 
fill('#EDBF48');
ellipse(x+150, y+200, 20, 20);  

fill('#EDBF48');
ellipse(x-100, y-200, 20, 20);  
fill('#EDBF48');
ellipse(x-140, y, 20, 20);  
fill('#EDBF48');
ellipse(x-100, y+200, 20, 20); 

// shine 
fill(x-123, x-125, 242, 250);
ellipse((x+150) - smallerOffset, (y-200)  - smallerOffset, 10, 10); 
pop();
}
