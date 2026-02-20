let catX = 300

let catY = 300
let fishX = []
let fishY = []
let numFish = 5;
let bgColor = 0
let minDistance = 85
let isPlayingGame = false
let score = 0
function setup() {
  let myCanvas = createCanvas(650, 610);
  myCanvas.parent("myCanvas");
  
  // disable arrow key scrolling
  window.addEventListener("keydown", (event) => {event.preventDefault();});

  //createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  colorMode(HSB)
  
  for (let i = 0 ; i < numFish; i += 1){
      fishX. push(random(600))
      fishY. push(random(600))
  }
}

function draw() {
  background(bgColor,100, 26);
  
  moveWithKeys()
  instructions()
  drawCat()
  drawFish()
  text(score, 100, 50)
  checkHitbox()
  // Don't delete the following or the sketching code breaks
  //drawMouseLines("black");
}
function drawCat(){
   //circle(catX, catY, 100)
    textSize(80)
    text("🐈", catX, catY)
}

function moveWithKeys(){
 if (keyIsDown(UP_ARROW)) {
  catY -= 10;
 }
if (keyIsDown(DOWN_ARROW)) {
  catY += 10;
 }
if (keyIsDown(LEFT_ARROW)) {
  catX -= 10;
 }
if (keyIsDown(RIGHT_ARROW)) {
  catX += 10;
 }
 catX = constrain(catX, 0, 650)
 catY = constrain(catY, 0, 610)
}
function mouseClicked() {
    bgColor = random(360)
    loop();
    if (isPlayingGame== false){
        setTimeout(endGame, 15000)
        score = 0
    }
    isPlayingGame = true
    //circle(mouseX, mouseY, 50);  
}
function endGame(){ 
    noLoop() // reset score
    isPlayingGame = false
}
function instructions(){
fill("white")
stroke("black")
textSize(33)
text("Move With Arrow Keys to get fish to get points, and \nclick to change background", 300, 540)
}
function drawFish(){
      for (let i = 0 ; i < fishX.length; i += 1){
        // circle(fishX, fishY, 80)
        textSize(80)
        text("🐟", fishX[i], fishY[i])
      }
}
function checkHitbox() {
    for (let i = 0 ; i < fishX.length; i += 1){
    if(dist(fishX[i], fishY[i], catX, catY) < minDistance) {
        fishX[i] = random(600);
        fishY[i] = random(600);
       score += 1
    }
    }
}