const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

//p5.js program has a createCanvas() function that creates a drawing canvas with a specific width and height.
function setup() {
  createCanvas(800, 600);

    PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152) // blue
  ]
  
}

function draw() {
  background(204);
  point(240, 60);
  line(20, 50, 420, 110);
  quad(158, 55, 199, 14, 392, 66, 351, 107);
  triangle(347, 54, 392, 9, 392, 66);
  triangle(158, 55, 290, 91, 290, 112);
// draw a rect
  rect(180, 300, 220, 40);
// draw a ellipse
  ellipse(120, 100, 110, 110);
  ellipse(412, 60, 18, 18);
//push() & pop() will keep the strokeWeight from affect other object.
  push()
    for (var i = 20; i < 400; i += 60) {
    strokeWeight(8);
    line(i, 300, i + 60, 120);
  }
  pop()
  // push()
  // for (var i = 10; i < 600; i += 10) {
 
  //     stroke(PALETTE[1])
  //     line(i, 0, i + i/2, 300);
  //     line(i + i/2, 300, i*1.2, 600);
  //   }
  // pop()
  push()
  for (var i = 120; i < 300; i += 20) {
 
      stroke(PALETTE[0])
      line(i, 0, i + i/2, 100);
      line(i + i/2, 100, i*1.2, 300+i);
      line(i*1.2, 300+i, 0, i+200);
    }
  pop()

}








