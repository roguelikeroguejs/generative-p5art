// 01_Gen_Data_Satellites

var output;
 

function setup() {
  createCanvas(720, 480);
  // Create the new file 
  output = createWriter("satelliteDisplay.tsv");
  // Write a header line with the column titles
  output.print("type\tx\ty");
  for (var y = 0; y <= height; y += 60) {
    for (var x = 0; x<= width; x += 20) {
      var satelliteType = int(random(1,4));
      output.print(satelliteType + "\t" + x + "\t" + y);
      ellipse(x, y, 12, 12);
    }
  }
  output.close(); // Finish the file
}






