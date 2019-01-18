
var x = 20;
var y = 20;

var img;
function preload() {
  img = loadImage('Assets/NewPiskel.png');
}

function setup() {
  createCanvas(720, 400);
  strokeWeight(4);
  frameRate(60);
  ellipseMode(RADIUS);

  image(img, 0, 0);

}

function draw() {
  background(102);


  if (keyIsDown(LEFT_ARROW)){
    x-=2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x+=2;
  }
  if (keyIsDown(UP_ARROW)){
    y-=2;
  }
  if (keyIsDown(DOWN_ARROW)){
    y+=2;
  }

  


}

