var wall,thickness;
var bullet, speed ,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83  );
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  /*Create a Wall which is half the height of the canvas and whose width is 60 pixels
Keep this Wall at 1500 pixels distance from the left edge of the canvas.
Set the color of the Wall to color (80,80,80)*/
  wall=createSprite(1500,200,60,height/2);
 /* Assign the velocityX property of the bullet sprite to the speed variable.
This should make the bullet sprite move towards the wall.*/
bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
  
  if(bullet.isTouching(wall)){
bullet.velocityX=0;
  }

  if(wall.x -bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var damage = 0.5 *weight*speed*speed/thickness*thickness*thickness ;
if(damage=3.68&&damage<3.68){
bullet.shapeColor=color(0,255,0);
}

if( damage>3.68&&damage<12.43){
bullet.shapeColor=color(230,230,0);
}

  if(damage=12.43&&damage>12.43){
bullet.shapeColor=color(255,0,0);
  }
  }           
  drawSprites();
}