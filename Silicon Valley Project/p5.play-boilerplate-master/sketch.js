var freeGuy,freeguyImg,backgroundImg,bg

function preload(){
  backgroundImg=loadImage("Images/bg.jpg")
  freeGuy_running=loadAnimation("Images/r1.jpg")
  //freeGuy_jumping=loadAnimation()
}

function setup() {
  
  createCanvas(1500,700);
  
  bg=createSprite(750, 350, 50, 50);
  bg.addImage("bg",backgroundImg)
  free
}

function draw() {
  background(255,255,255);  

  drawSprites();
}