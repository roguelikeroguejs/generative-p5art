// 01_Gen_Cubes
var numImgs = 14;
var imgs = [];
var scale = 0.10;
var frames = 0.003;
var music;
var drums;
var follow;


function preload() {
  //Load music
 // music = loadSound("mechLoop.mp3");

  //Load all images into array imgs
   for (var i = 0; i < numImgs; ++i) {
     imgs[i] = loadImage("ptq" + (i+1) + ".png");
   }
 }

function setup() {
  cnv = createCanvas(800, 800, WEBGL);
  music = loadSound("mechLoop.mp3");


   amp = new p5.Amplitude();

    cnv.mousePressed(function() {
      if (music.isPlaying() ){
        music.stop();
      } else {
        music.play();
      }
    });

 }

function draw() {
  
 // follow.getValue() * 255
  background(0);
  
   var level = amp.getLevel();
   var stage = amp.getLevel();
   var size = map(level, 0, 1, 150, 350);
   var spin = map(stage, 0, 1, 0.003, 0.004);
     rotateZ(frameCount * frames + spin);
     rotateX(frameCount * frames + spin);
     rotateY(frameCount * frames + spin);
     texture(imgs[1]);
     box(size);
 
     for (var i = 0; i < imgs.length; ++i) {
       rotateZ(frameCount * frames);
       rotateX(frameCount * frames);
       rotateY(frameCount * frames);
       translate(-800 + i,-800 + i, 200);
       texture(imgs[i]);
       box(size);

    }
   
}








