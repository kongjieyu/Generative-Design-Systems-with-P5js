const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

//p5.js program has a createCanvas() function that creates a drawing canvas with a specific width and height.
function setup() {
  createCanvas(800, 600);
  //fill (0,102);
  //noStroke();
  
  stroke(49,51,79)
  
}

function draw() {
  //background(204);
  //line(mouseX,mouseY,pmouseX,pmouseY)
  //get the position of the mouse
  ellipse(mouseX,mouseY,9,9)
  //print('mouseX:' + mouseX + 'mouseY:' + mouseY + 'pmouseX,'+pmouseX+ 'pmouseY:'+pmouseX)
  var weight = dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(1);
  line(mouseX,mouseY,pmouseX,pmouseY);
  // background(204); 
  // line(mouseX, 20, pmouseX, 80); 
  // print(mouseX + " : " + pmouseX);
}








