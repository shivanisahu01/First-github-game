var box
function setup(){
  createCanvas(400,400);
  box=createSprite(200,100,50,50);

}
function draw(){
  background("purple")
  if(keyDown(UP_ARROW)){
    box.y=box.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    box.y=box.y+2;
  }
  if(keyDown(LEFT_ARROW)){
    box.x=box.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x=box.x+2;
  }
  drawSprites()
}