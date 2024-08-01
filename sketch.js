function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(17, 18, 18);
  
  
  let h = hour();
  let m = minute();
  let s = second();
  
  
  fill(255);
  noStroke();
  text(`Current hour: ${h}`, 20, 50, 60);
  text(`Current minute: ${m}`, 20, 80, 60);
  text(`Current second: ${s}`, 20, 110, 60);
}