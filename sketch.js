var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 5;

  ghost = createSprite(300,480);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5;

  doorsGroup = new Group();
  climbersGroup = new Group();
  
}

function draw() {
  background(200);
  if(gameState == "play"){
   
    if(keyDown("left")){
      ghost.x = ghost.x - 7;
    }
    if(keyDown("right")){
      ghost.x = ghost.x + 7;
    }
  
    if(tower.y > 400){
        tower.y = 300
      }

      if(ghost.isTouching(doorsGroup)){
        ghost.destroy();
        gameState = "end";
      }

      spawnDoors();
  }

  
    if(gameState === "end"){
      background("green");
      fill("black");
      textSize(50);
      text("You Lost", 200,300);
      tower.destroy();
      doorsGroup.destroyEach();
      climbersGroup.destroyEach();
    }

    drawSprites();
}
function spawnDoors(){
  if(frameCount%100 == 0){
    door = createSprite(300,100);
    door.x = Math.round(random(150,450));
    door.addImage("door",doorImg);
    door.velocityY = 5;
    doorsGroup.add(door);

    climber = createSprite(door.x,140);
    climber.addImage("climber",climberImg);
    climber.velocityY = 5;
    climbersGroup.add(climber);
  }
 

}