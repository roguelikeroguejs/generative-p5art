// 01_Gen_Frames

var numFrames = 12;
var images = [];
var currentFrame = 0; 

function preload() {
  for (var i = 0; i < numFrames; i++) {
    var imageName = "frame-" + nf(i, 4) + ".png";
    images[i] = loadImage(imageName); // Load each image into array 
  }

}

function setup() {
  createCanvas(240, 120);
  frameRate(24);
  
}

function draw() {
  image(images[currentFrame], 0, 0);
  currentFrame++; // Next Frame
  if (currentFrame == images.length) {
    currentFrame = 0; // Return to first frame
  }

}

