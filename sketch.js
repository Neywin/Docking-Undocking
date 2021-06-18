var iss, spaceCraft;
var hasDocked = false;

var spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4,issImg; 
var backgroundImg;

function preload(){

  spaceCraftImg1 = loadImage("spacecraft1.png");
  spaceCraftImg2 = loadImage("spacecraft2.png");
  spaceCraftImg3 = loadImage("spacecraft3.png");
  spaceCraftImg4 = loadImage("spacecraft4.png");

  issImg = loadImage("iss.png");
  backgroundImg = loadImage("spacebg.jpg");

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  spaceCraft = createSprite(600,600);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale = 0.35;

  iss = createSprite(600, 350, 50, 50);
  iss.addImage(issImg);

}

function draw() {
  background(backgroundImg);

  if (!hasDocked){

    spaceCraft.x = spaceCraft.x + random(-1,1);

    if(keyDown(LEFT_ARROW)){

      spaceCraft.x = spaceCraft.x - 5;
      spaceCraft.addImage(spaceCraftImg3);
    }
  
   if(keyDown(RIGHT_ARROW)){
  
      spaceCraft.x = spaceCraft.x + 5;
      spaceCraft.addImage(spaceCraftImg4);
    }
  
   if(keyDown(UP_ARROW)){
  
      spaceCraft.y = spaceCraft.y - 5;
      spaceCraft.addImage(spaceCraftImg1);
    }
    
   if(keyDown(DOWN_ARROW)){
  
      spaceCraft.addImage(spaceCraftImg2);
    }
    
    if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white");
      text("Docking Successful!", 600, 600);
    }
  }

  spaceCraft.display();
  iss.display();

  drawSprites();
}