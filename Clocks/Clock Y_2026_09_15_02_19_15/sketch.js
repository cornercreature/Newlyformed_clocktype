// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let clockDiameter;

function setup() {
createCanvas(400, 400);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;

  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  clockDiameter = radius * 1.7;

  describe('Functioning clock on a grey background.');
}

function draw() {
  background(230);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  strokeWeight(1);
  stroke("#000");
  fill("#D9D9D9");
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill("#000");
  ellipse(0, 0, 30, 30);

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);

  stroke("#000");
  
  // Second hand  
  push();
  rotate(secondAngle);
  strokeWeight(4);
  line(0, 0, 0, -(secondsRadius*0.9));
  pop();

  // Second hand extension 
  push();
  rotate(180+secondAngle);
  strokeWeight(2);
  line(0, 0, 0, -(secondsRadius));
  pop();
  
  // Minute hand
  push();
  strokeWeight(6);
  rotate(minuteAngle);
  line(0, 0, 0, -(minutesRadius * 0.7));
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(1);
  stroke("#fff");
  for (let ticks = 0; ticks < 60; ticks += 1) {
    line(0, secondsRadius + 25 , 0, (clockDiameter+14)/2);
    rotate(6);
  }
  pop();

  
}