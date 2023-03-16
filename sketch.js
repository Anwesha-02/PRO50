var bg
var apple, watermelon, lemon, cherry

function preload(){
  bg = loadImage("assets/bg.jpg");
  apple = loadImage("assets/appe.png");
  watermelon = loadImage("assets/watermelon.png");
  cherry = loadImage("assets/cherry.png");
  lemon = loadImage("assets/lemon.png");
  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
  handleFruits();
}

function handleFruits(){
 if (frameCount%60===0){
  var fruits = createSprite(400,0,20,20);
  fruits.velocityY = 2
  var rand = Math.random(random(1,4));

  switch (rand) {
    case 1: (fruits.addImage(apple))
    break
    case2 
    default:
      break;
  }

 
 }



}