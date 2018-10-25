// determine basic structure of a crystal
// draw test shapes
//   - outline circle
//   - "spoke" lines
const CRYSTAL_SIZE = 300;
const CRYSTAL_SIZE2 = 200;
const SIDES = 60;
let PALETTE = []

// function setup() {
//    createCanvas(500, 500);

// }


// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 90, 90);
// }


// function draw() {
//   background(204);
//   point(240, 60);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(255);
//   } else {
//     fill(0);
//   }
//   ellipse(mouseX, mouseY, 2, 2);
// }

function setup() {
  createCanvas(500, 500);
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

// function draw() {
// ellipse(50, 50, 33, 33); // Left circle

// push(); // Start a new drawing state
// strokeWeight(10);
// fill(204, 153, 0);
// translate(50, 0);
// ellipse(50, 50, 33, 33); // Middle circle
// pop(); // Restore original state

// ellipse(150, 50, 33, 33); // Right circle
// }

// make a umbralla
function draw() {
  fill(255)
  stroke(0)
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    ellipse(0, 0, CRYSTAL_SIZE2, CRYSTAL_SIZE2)
    for (let i = 0; i < SIDES; i++) {
      line(0, 0, 0, CRYSTAL_SIZE/2)
      rotate(360/SIDES)
    }
    
  pop()
}