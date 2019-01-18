
var x = 0;
var y = 0;
var speedx = 2;
var speedy = 2;

var gravity = 0.3;


var img;
function preload() {
  img = loadImage('Assets/NewPiskel.png');
  imgg = loadImage('Assets/NewPiskelLeft.png');
}

function setup() {
  createCanvas(720, 400);
  strokeWeight(4);
  frameRate(60);
  ellipseMode(RADIUS);



}

function draw() {
  background(102);
  x = x + speedx;
  y = y + speedy;

  if (keyIsDown(LEFT_ARROW)){
    speedx = -2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    speedx = 2;
  }
  if (keyIsDown(UP_ARROW)){
    speedy = -2;
  }
  if (keyIsDown(DOWN_ARROW)){
    speedy = 2;
  }

  speedy = speedy + gravity;


  // Remember, || means "or."
  if ((x > width - 70) || (x < 0)) {
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    speedx = speedx * -1;
  }

  if ((y > height - 70) || (y < 0)) {
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    speedy = speedy * -0.95;
    
  }

 

  
if (speedx > 0){
  image(img, x, y, 100, 100);
}else if (speedx < 0) {
  image(imgg, x, y, 100, 100);
}

}

