// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let clockDiameter;
let secondAngle = 0;
let minuteAngle = 0;
let trailAngle = 0;
let draggingHand = null;

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
  secondAngle = draggingHand === 'second' ? getMouseAngle() : map(second(), 0, 60, 0, 360);
  minuteAngle = draggingHand === 'minute' ? getMouseAngle() : map(minute(), 0, 60, 0, 360);
  trailAngle = draggingHand === 'trail' ? getMouseAngle() : -(minuteAngle - secondAngle + 390 )/2;
  
  // Second hand  
  push();
  rotate(secondAngle);
  strokeWeight(6);
  line(0, 0, 0, -(secondsRadius));
  pop();

    // trail hand A 
  push();
  rotate(trailAngle+80);
  strokeWeight(6);
  line(0, (secondsRadius*0.4),0, (secondsRadius*0.6));
  pop();

  // Minute hand
  push();
  strokeWeight(6);
  rotate(minuteAngle);
  line(0,0, 0,  -(secondsRadius));
  pop();

  //arc1
  noFill();
  strokeWeight(3);
  arc(0, 0, secondsRadius *1.23, secondsRadius *1.23, (minuteAngle -90), (trailAngle-190))
  stroke("#000");

    //arc2
  noFill();
  strokeWeight(3);
  arc(0, 0, secondsRadius *0.8, secondsRadius *0.8, (trailAngle-190), (secondAngle -90), )
  stroke("#000");
  
  
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


function getMouseAngle() {
  return (atan2(mouseX - width / 2, -(mouseY - height / 2)) + 360) % 360;
}

function angleDiff(a, b) {
  let d = abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function mousePressed() {
  if (dist(mouseX, mouseY, width / 2, height / 2) > clockDiameter / 2) return;
  let mAngle = getMouseAngle();
  let closest = 'second';
  let closestDiff = angleDiff(mAngle, secondAngle);
  let minuteDiff = angleDiff(mAngle, minuteAngle);
  if (minuteDiff < closestDiff) {
    closest = 'minute';
    closestDiff = minuteDiff;
  }
  let trailDiff = angleDiff(mAngle, trailAngle);
  if (trailDiff < closestDiff) {
    closest = 'trail';
    closestDiff = trailDiff;
  }

  draggingHand = closest;
}

function mouseReleased() {
  draggingHand = null;
}
