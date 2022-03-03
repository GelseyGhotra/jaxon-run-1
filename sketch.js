var path, invisibleBoundary_left, invisibleBoundary_right, pathImage;
var jaxon, jaxon_running, jaxon_collided;


function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4
  path.scale = 1.2;

  jaxon = createSprite(200,100,20,50);
  jaxon.addAnimation("running",jaxon_running);

  invisibleBoundary_left = createSprite(400,200,20,500);
  invisibleBoundary_left.visible = false;

  invisibleBoundary_right = createSprite(20,200,20,500);
  invisibleBoundary_right.visible = false;

}


function draw() {
  background(220);

  console.log(jaxon.x);


  if (path.y > 400) {
  path.y = length/2;
}
 if (jaxon.isTouching(invisibleBoundary_left)) {
  jaxon.collide = invisibleBoundary_left;
 }
   
 

 if (jaxon.isTouching(invisibleBoundary_right)) {
  jaxon.collide = invisibleBoundary_right;
 }

 jaxon.x=World.mouseX;

}
