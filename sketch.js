var fixedRect;
var movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  //Creating sprites for both fixed & moving rectangle
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "yellow"

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2= createSprite(200, 100, 50, 50);
  gameObject3= createSprite(300, 100, 50, 50);
  gameObject4= createSprite(400, 100, 50, 50);

  gameObject1.shapeColor = "green"
  gameObject2.shapeColor = "green"
  gameObject3.shapeColor = "green"
  gameObject4.shapeColor = "green"

  
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x); //fixedRect/2 = 25 , movingRect/2 = 40
  console.log(movingRect.width/2 + fixedRect.width/2)
  if (isTouching(gameObject4, movingRect)){
    movingRect.shapeColor =  "red"
  }
  else
  {
    movingRect.shapeColor = "green"
  }
  drawSprites();
}

