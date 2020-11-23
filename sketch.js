var movrec,fixrec,weight,speed,thickness;


function setup() {
  createCanvas(1600,400);
  movrec=createSprite(50, 200, 100, 20);
  fixrec=createSprite(1500, 200, thickness, height/2);
  movrec.shapeColor="80,80,80";
  fixrec.shapeColor="80,80,80";
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
}

function draw() {
  background("black");
  movrec.velocityX=speed;
  if(collide(movrec,fixrec))  {
movrec.velocityX=0;
 var damage =0.5 *weight*speed*speed/(thickness*thickness*thickness);
 if(damage>10){
   fixrec.shapeColor=color(255,0,0);
 }
 if(damage<10){
  fixrec.shapeColor=color(0,255,0);
}
}
  collide(movrec,fixrec);
  drawSprites();
}

function collide(o1,o2){

movrecRightEdge = movrec.x + movrec.width;
fixrecLeftEdge= fixrec.x;
if(movrecRightEdge > fixrecLeftEdge){
  return true
}
else{
  return false
}
}