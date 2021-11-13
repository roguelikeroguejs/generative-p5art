// 01_Gen_Satellite_Array

var dishImage;
var dishImage2;
var dishImage3;
var earthImage;
var dishes = [];
var stars = [];
var speed;
//var muzak;
 

function preload() {
  dishImage = loadImage("satellite.svg");
  dishImage2 = loadImage("Recon_Satellite.svg");
  dishImage3 = loadImage("Nav_Satellite.svg");
  earthImage = loadImage("Earth.jpg");
  //muzak = loadSound("atmos1.wav");

}

function setup() {
  createCanvas(1041, 1564);
 
  var numDishes = 60; // Sets the number of satellites to display

  // Create each object
  for (var i = 0; i < numDishes; i++) {
    // Create a random x coordinate
    var x = random(-40, width-40);
    // Assign the y coordinate based on the order
    var y = map(i, 0, numDishes, -100, height-200);
    let r = random(100);
    if (r <= 33){
      dishes[i] = new Satellite(dishImage, x, y);
    }else if (r <= 67 ){
      dishes[i] = new Satellite(dishImage2, x, y);
    }else {
      dishes[i] = new Satellite(dishImage3, x, y);
    }
  }

  for (var i = 0; i < 7500; i++) {   // Create array for stardust
    stars[i] = random(-1000, 200);
  }
}

function draw() {

  background(earthImage);
  //muzak.play();
  
  

  for (var i = 0; i < dishes.length; i++) {
    dishes[i].update(.30, .50);
    dishes[i].display();
  }


// Random twinkling stars 
// TODO change this to a while loop to keep start onscreen
  let speed = random(0.5, 2.0);
  
    for (var i = 0; i < stars.length; ++i) {
      stars[i] += speed;
      let yStar = i * 0.4;
     Stardust(stars[i], yStar);
    } 
  
}

function Stardust(x,y) {
  fill('White');
  ellipse(x, y, 2, 2);
}


function Satellite(img, tempX, tempY) {
  // set initial values for properties
  
  this.xpos = tempX;
  this.ypos = tempY;
  this.scale = random(0.20, 1.0);  // Create a random scalar for width and height 
  this.angle = random(0, TWO_PI); // Create a random angle for offsets
  this.dishImage = img;
  this.xoffset = 0.0;
  this.yoffset = 0.0;

  this.update = function(scale1, scale2) {
    this.angle += 0.02;
    this.xoffset = cos(this.angle) * 20; // Combine x and y offsets to create circular motion
    this.yoffset = sin(this.angle) * 20;
    this.scale1 = scale1 * 300;
    this.scale2 = scale2 * 300;
  }
  this.display = function() {
    image(this.dishImage, this.xpos + this.xoffset, this.ypos + this.yoffset, this.scale1, this.scale2);
  }
}




