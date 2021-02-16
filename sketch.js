
var h,m,s;
var hangle,mangle,sangle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(400,200)
  rotate(-90);
  h = hour();
  m = minute(); 
  s = second();

  hangle = map(h%12,0,12,0,360)
  mangle = map(m,0,60,0,360)
  sangle = map(s,0,60,0,360)

  push();
  rotate(sangle);
  stroke(0,0,0)
  strokeWeight(5)
  line(0,0,100,0)
  pop();

  push();
  rotate(mangle)
  stroke(0,0,0)
  strokeWeight(8)
  line(0,0,100,0)
  pop();

  push();
  rotate(hangle)
  stroke(0,0,0)
  strokeWeight(10)
  line(0,0,100,0)
  pop();

  stroke(255,20,150);
  point(0,0)
  strokeWeight(5)
  noFill();
  stroke("red");
  arc(0,0,300,300,0,hangle)
  stroke("blue");
  arc(0,0,290,290,0,mangle)
  stroke("green");
  arc(0,0,280,280,0,sangle)

  drawSprites();
}