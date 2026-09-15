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

   // 0 at 12 o'clock: p5 angles start at 3 o'clock, so subtract HALF_PI
  let s = map(second(), 0, 60, 0, 360) - 60;
  let m = map(minute() + second() / 60, 0, 60, 0, 360) - 60;
  
  // Draw the clock background
  ellipseMode(CENTER);
  strokeWeight(1);
  stroke("#000");
  fill("#D9D9D9");
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill("#000");
  ellipse(0, 0, 30, 30);

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);

  //arc 1
  noFill();
  strokeWeight(3);
  arc(0, 0, secondsRadius /2, secondsRadius /2, (minuteAngle -90), (secondAngle - 90))
  stroke("#000");

    //arc 2
  noFill();
  strokeWeight(3);
  arc(0, 0, clockDiameter - 50, clockDiameter - 50, (minuteAngle - 90), (secondAngle - 90))
  stroke("#000");
  
  // Second hand  
  push();
  rotate(secondAngle);
  strokeWeight(6);
  line(0, -(secondsRadius*0.27), 0, -(secondsRadius));
  pop();
  
  // Minute hand
  push();
  strokeWeight(6);
  rotate(minuteAngle);
  line(0, -(secondsRadius*0.27), 0, - (secondsRadius));
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