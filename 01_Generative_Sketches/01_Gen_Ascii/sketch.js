// 01_Gen_Ascii

var myAsciiArt;


var asciiart_width = 120; var asciiart_height = 60;

var ascii_arr;
var gfx;
var img;

function preload(){
  img = loadImage("xman.jpg");

}


function setup() {
  createCanvas(640, 480); // we need some space...
  
  gfx = createGraphics(asciiart_width, asciiart_height);
  gfx.pixelDensity(1);
  myAsciiArt = new AsciiArt(this);
 
  myAsciiArt.printWeightTable();
  
  textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
  noStroke(); fill(255);
  
  frameRate(30);
}

function draw() {
  if(img !== null && img !== undefined) { // safety first
    background(0);
    gfx.background(0);
    gfx.image(img, 0, 0, gfx.width, gfx.height);
    /*
      It is worth experimenting with the value of the parameter defining the
      level of posterization. Depending on the characteristics of the image,
      different values may have the best effect. And sometimes it is worth not
      to apply the effect of posterization on the image.
    */
    gfx.filter(POSTERIZE, 5);
    /*
      Here the processed image is converted to the ASCII art. The convert()
      function in this case is used with just one parameter (image we want to
      convert), so the resultant ASCII graphics will have the same resolution
      as the image. If necessary (especially if the resolution of the converted
      image is relatively high), it is possible to use the converter function
      in the version with three parameters: then the second and third
      parameters will be respectively the width and height of the generated
      glyph table. The convert() function returns a two-dimensional array of
      characters containing the representation of the converted graphics in the
      form of the ASCII art. If the conversion fails, the function returns
      null.
    */
    ascii_arr = myAsciiArt.convert(gfx);
    /*
      We can only watch ASCII art or display it against the background of the
      original image from the camera. The flag controlling the display of the
      image coming from the camera is switched by tap/click.
    */
     //image(img, 0, 0, width, height);
    /*
      Now it's time to show ASCII art on the screen. First, we set drawing
      parametrs. Next, we call the function typeArray2d() embedded in the
      ASCII Art library, that writes the contents of a two-dimensional array
      containing (implicitly) text characters (chars) on the screen. In this
      case, we call a function with 2 parameters: the first is the table
      whose contents we want to print, and the second is the destination (an
      object with "canvas" property). If you use the function with two
      parameters (as we do in this example), it will assume that you need to
      fill the entire surface of the target canvass with a drawing. However,
      the function can be called in 3 variants:
        [AsciiArt instance].typeArray2d(_arr2d, _dst);
        [AsciiArt instance].typeArray2d(_arr2d, _dst, _x, _y);
        [AsciiArt instance].typeArray2d(_arr2d, _dst, _x, _y, _w, _h);
      The parameters are as follows:
        _arr2d - 2-dimentional array containing glyphs (chars)
        _dst - destination (typically the sketch itself)
        _x, _y - coordinates of the upper left corner
        _w, _h - width and height
      It is relatively easy to write your own function that formats the contents
      of an array to ASCII graphics. At the end of this example, I glue the
      function code from a non-minimized version of the library - it can be
      used as a base for your own experiments.
    */
    myAsciiArt.typeArray2d(ascii_arr, this);
  }
  else {
    /*
      If there are problems with the capture device (it's a simple mechanism so
      not every problem with the camera will be detected, but it's better than
      nothing) we will change the background color to alarmistically red.
    */
    background(255, 0, 0);
  }
  typeArray2d = function(_arr2d, _dst, _x, _y, _w, _h) {
  if(_arr2d === null) {
    console.log('[typeArray2d] _arr2d === null');
    return;
  }
  if(_arr2d === undefined) {
    console.log('[typeArray2d] _arr2d === undefined');
    return;
  }
  switch(arguments.length) {
    case 2: _x = 0; _y = 0; _w = width; _h = height; break;
    case 4: _w = width; _h = height; break;
    case 6: /* nothing to do */ break;
    default:
      console.log(
        '[typeArray2d] bad number of arguments: ' + arguments.length
      );
      return;
  }
  /*
    Because Safari in macOS seems to behave strangely in the case of multiple
    calls to the p5js text(_str, _x, _y) method for now I decided to refer
    directly to the mechanism for handling the canvas tag through the "pure"
    JavaScript.
  */
  if(_dst.canvas === null) {
    console.log('[typeArray2d] _dst.canvas === null');
    return;
  }
  if(_dst.canvas === undefined) {
    console.log('[typeArray2d] _dst.canvas === undefined');
    return;
  }
  var temp_ctx2d = _dst.canvas.getContext('2d');
  if(temp_ctx2d === null) {
    console.log('[typeArray2d] _dst canvas 2d context is null');
    return;
  }
  if(temp_ctx2d === undefined) {
    console.log('[typeArray2d] _dst canvas 2d context is undefined');
    return;
  }
  var dist_hor = _w / _arr2d.length;
  var dist_ver = _h / _arr2d[0].length;
  var offset_x = _x + dist_hor * 0.5;
  var offset_y = _y + dist_ver * 0.5;
  for(var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
    for(var temp_x = 0; temp_x < _arr2d.length; temp_x++)
      /*text*/temp_ctx2d.fillText(
        _arr2d[temp_x][temp_y],
        offset_x + temp_x * dist_hor,
        offset_y + temp_y * dist_ver
      );
}
}