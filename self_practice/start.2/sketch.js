const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

//p5.js program has a createCanvas() function that creates a drawing canvas with a specific width and height.
function setup() {
  createCanvas(800, 600);
  noStroke();
  
}

function draw() {
  background(49,51,79);
  var y;
  var x;
  for (y = 0; y <= height; y+=40) {
    for (x = 0; x <= width; x+=40) {
      fill(241,200,32); 

        ellipse (x,y,(x-width)/2/10+y/20,(x-width)/2/10+y/20);
    }
  }

}








