
let footballX = 300
let footballY = 550
let footballSpeed = 0
let footballAngle = 35
let buttonEffect = 1;

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  disableArrowKeyScrolling();
}

function draw() {
  background(0, 158, 250);
  
  drawField();
  
    drawFootball(footballX, footballY)
    
    moveWithKeys()
    checkForPoint()
  // Don't delete the following or the sketching code breaks
//   text("Create your final project using everything you've learned in the class", 300, 300);
    fill("red")
    textSize(20)
    text(" Spacebar to kick ball, and arrow keys to redirect", 250, 580)
  drawMouseLines("black");
}
  
function drawField() {
  noStroke()
  fill("green")
  rect(0, 165, 599, 450);
  
  fill("white")
  push()
  translate(300,150)
  rectMode(CENTER)
    for(i = 0; i < 12; i += 1){
        rect(0, 400, 1900, 7);
        drawSideline()
        drawLeftSideline()
        scale(0.8)
    }
  pop()
  
   fill("white");
  beginShape();
  vertex(222, 178);
  vertex(255, 164);
  vertex(348, 163);
  vertex(377, 177);
  vertex(223, 178);
  endShape();

 
   fill("black");
  beginShape();
  vertex(1, 167);
  vertex(1, 129);
  vertex(299, 130);
  vertex(299, 164);
  vertex(1, 166);
  endShape();


fill("black");
  beginShape();
  vertex(308, 131);
  vertex(600, 131);
  vertex(600, 167);
  vertex(308, 164);
  vertex(307, 130);
  endShape();

 
 fill("grey");
  beginShape();
  vertex(0, 240);
  vertex(205, 165);
  vertex(1, 166);
  vertex(1, 241);
  endShape();


  fill("grey");
  beginShape();
  vertex(417, 166);
  vertex(599, 166);
  vertex(599, 235);
  vertex(417, 167);
  endShape();


fill("yellow")
rect(300, 164, 8, -62);
rect(263, 103, 80, -5);
rect(268, 103, -5, -66);
rect(343, 37, 5, 66);

}


function drawLeftSideline() {
    push();
    scale(-1, 1);
    drawSideline()
    pop();
}
function drawSideline() {
    stroke('white')
strokeWeight(7)
  // fill("black");
  beginShape();
  vertex(887, 319);
  vertex(758, 319);
  vertex(946, 400);
  vertex(1112, 400);
  vertex(888, 319);
  endShape();
noStroke()
}
function drawFootball(x, y){
    fill("brown")
    push()
    translate(x, y);
    let scaling = map(y, 550, 0, 1, 0.15)
    scale(scaling)
    ellipse(0, 0, 26, 42);
    pop();
}

function moveWithKeys() {
  let angleAdjust = map(footballY, 550, 0, buttonEffect, 0.1 * buttonEffect)
  if (keyIsDown(LEFT_ARROW)) {
      footballAngle -= angleAdjust;  
      footballIsLeft = true;
  }
  if (keyIsDown(RIGHT_ARROW)) {
      footballAngle += angleAdjust;  
      footballIsLeft = false;
  }
  
  // kick the ball with space bar if not moving
  if (footballSpeed == 0 && keyIsDown(32)) {
      footballSpeed = 3
      let direction = random([-1, 1]);
      footballAngle = direction * random(10, 35);
  }
  
  footballY -= footballSpeed * cos(footballAngle);
  footballX += footballSpeed * sin(footballAngle);
  if (footballY < 0){
      footballY = 550
      footballSpeed = 0
      footballX = 300
  }
}

function checkForPoint() {
    
    if (collidePointRect(footballX, footballY, 269, 2, 74, 96)) {
        fill("red")
        textSize(30)
        text("It's Good!", 70, 30)
    }
}