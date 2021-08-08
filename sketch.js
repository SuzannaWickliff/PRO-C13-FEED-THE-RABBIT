var garden,rabbit,apple,leafs;
var gardenImg,rabbitImg,appleImg,leafsImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.VelocityX = 3;
rabbit.scale =0.09;
rabbit.x = rabbit.width /2;

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (rabbit.x < 400) {
    rabbit.x = width/2;
  }

rabbit.x = mouseX

  drawSprites();
}

function createApples () {
  apple = createSprite(random(50,350),40,10,10)
  //Add Image to apple sprite
  //Scale the sprite if requried
  //Gice the Velocity so that the apples moves downloads
  //give lifetime to the apple
  

}
