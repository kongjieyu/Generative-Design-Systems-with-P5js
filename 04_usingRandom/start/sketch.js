// determine basic structure of a crystal
// draw test shapes
//   - outline circle
//   - "spoke" lines
// paletted
// make a function

const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530)

  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0, 152), // blue
    color(50, 205, 25),//green
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  testLines()
    
}

function testLines () {
  //get a random number
  
  let numShape
  if (randomSelect()) {
    numShape = SIDES
  } else {
    numShape = SIDES*2
  }
  //randomly choose the color
  // const rando2 = floor(random(0, PALETTE.length));
  const strokeColor = PALETTE[randomSelectColor()]
  console.log(randomSelectColor())

  noFill()
  stroke(PALETTE[0])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    
    stroke(strokeColor)
    const angle = 360 / numShape
    for (let i = 0; i < numShape; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)  
      rotate(angle)
    }
  pop()
}
//refractor, get a random number
function randomSelect() {
  const rando = random(3);
  console.log(rando)
  let numShape
  if (rando>2) {
    return true
  } else {
    return false
  }
}

function randomSelectColor() {
  const rando2 = floor(random(0, PALETTE.length));
  return rando2

}