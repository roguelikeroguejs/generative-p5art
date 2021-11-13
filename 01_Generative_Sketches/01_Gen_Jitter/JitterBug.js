
// JitterBug Constructor

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