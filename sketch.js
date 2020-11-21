var car;
var wall;
function setup() {
  createCanvas(800,400);
  wall=createSprite(800, 200, 50, 50);
  car=createSprite(300,200,30,40);
  car.velocityX=2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  if(bounceOff(car,wall)){
    wall.velocityX = wall.velocityX*(-1)
    car.velocityX = car.velocityX*(-1)

  }
}
