var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  Orangeimg = loadImage("orangeLeaf.png")
} 

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();

  var select_Sprites = Math.round(random(1,3))
  if(frameCount%80 === 0){
    if(select_Sprites === 1){
      createApples();
    }
    else if(select_Sprites === 2) {
      createOrangeLeaves();
    }
    else {
      createLeaves();
    }
  }



}

function createApples(){
   apple = createSprite(random(50,350),40,10,10)
  apple.addImage("appleImage", appleImg)
  apple.velocityY = 3
  apple.scale = 0.08
  apple.lifetime = 100
  apple.depth = rabbit.depth-1
}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage("leaf", leafImg)
  leaves.velocityY = 2
  leaves.scale = 0.08
  leaves.lifetime = 120
  leaves.depth = rabbit.depth-1
}

function createOrangeLeaves(){
  oLeaves = createSprite(random(50,350),40,10,10)
  oLeaves.addImage("orange", Orangeimg)
  oLeaves.velocityY = 2
  oLeaves.scale = 0.08
  oLeaves.lifetime = 120
  oLeaves.depth = rabbit.depth-1
}