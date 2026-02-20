let x = 208;
let y = 453;
let lazerX = []
let lazerY = []
let bugX = []
let bugY = []
let startGame = false;
let bugCount = 1;
let score = 0;

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  noLoop();
  spawnBug();
  bugY[0] = 50;
}

  
function draw() {
  background(220);
  drawShip();
  drawbug();
  drawscore()
  lazer()
  
  if (startGame == false) showInstructions()
  moveShip();
  moveBug();

}

function drawscore() {
    textSize(16)
     text("score : "+score, 535, 24);
}
function spawnBug() {
    bugX.push(random(width))
    bugY.push(-100)
}

function showInstructions() {
     text("Move the ship with arrow keys.\n"
    + "fire with Space.  Get those bugs!\n"
    + "Click to start.", 300, 300);

}
function mouseClicked() {
    loop();
    if (startGame == false && bugX.length > 1) {
        lazerX = []
        lazerY = []
        bugX = []
        bugY = []
        bugCount = 1
        spawnBug();
    }
    
    startGame = true;
}

function moveShip() {   
 
  if(keyIsDown(RIGHT_ARROW)){
        x = x + 5
        
        
        
    }
    
    // decrease x by 5 if left arrow is pressed
    if(keyIsDown(LEFT_ARROW)){
       
       x = x - 5
    }
    
    // increase y by 5 if down arrow key is pressed
    if(keyIsDown(DOWN_ARROW)){
       
       
       y = y + 5
    }
    
    // decrease y by 5 if up arrow is pressed
    if(keyIsDown(UP_ARROW)){
       
       y = y - 5
    }
}

function moveBug() {
    for (let i = 0; i < bugX.length; i++) {
        bugX[i] += bugCount * randomGaussian();
        bugX[i] = constrain(bugX[i], 0, 600);
        bugY[i] += 1;
        if (bugY[i] > 650){
            noLoop();
            background('red')
            text("GAME OVER", 300, 300)
            startGame = false;
        }
        print(bugY[i])
    }
    
}

function drawbug() {
  // fill("black");
     for (let i = 0; i < bugX.length; i++) {
        push()
        translate(bugX[i], bugY[i])
        translate(-195, -148)
        fill('green')
        beginShape();
        vertex(178, 169);
        vertex(180, 210);
        vertex(189, 172);
        vertex(210, 169);
        vertex(225, 203);
        vertex(221, 163);
        vertex(227, 139);
        vertex(198, 119);
        vertex(167, 123);
        vertex(164, 151);
        vertex(178, 169);
        endShape();
        
        drawWing1();
        drawWing2();
        pop()
    
     }

}
  //wing1

  function drawWing1() {
  // fill("black");
fill('white')
  beginShape();
  vertex(166, 156);
  vertex(139, 172);
  vertex(117, 158);
  vertex(121, 131);
  vertex(166, 148);
  vertex(162, 151);
  vertex(169, 157);
  endShape();
}

//wing2
function drawWing2() {
  // fill("black");
  push()
  fill('white')
  beginShape();
  vertex(221, 134);
  vertex(248, 111);
  vertex(269, 114);
  vertex(274, 139);
  vertex(266, 147);
  vertex(225, 145);
  vertex(229, 140);
  vertex(220, 134);
  endShape();
  pop()
}









function drawShip() {
  // fill("black");
  push()
  translate(x, y)
  translate(-223, -442)
  fill('red')
  beginShape();
  vertex(211, 413);
  vertex(238, 412);
  vertex(239, 476);
  vertex(211, 478);
  vertex(210, 415);
  vertex(210, 446);
  vertex(192, 461);
  vertex(210, 463);
  vertex(210, 477);
  vertex(239, 477);
  vertex(240, 464);
  vertex(255, 464);
  vertex(239, 446);
  vertex(239, 414);
  vertex(215, 413);
  vertex(215, 384);
  vertex(232, 384);
  vertex(232, 411);
  triangle(213, 414, 210, 415, 211, 419);
  endShape();
  pop()
}


window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


function lazer(){
    
    for(let i = 0; i < lazerX.length; i += 1){
        lazerY[i] -= 10
        if (lazerY[i] < 0) {
            lazerX.splice(i, 1)
            lazerY.splice(i, 1)
            i--;
        }
        push()
        translate(lazerX[i], lazerY[i])
        translate(-174, -290)
        line(174, 290, 174, 320);
        pop()
        if (checkForHit(lazerX[i], lazerY[i])) {
            lazerX.splice(i, 1);
            lazerY.splice(i, 1);
            i--;
        }
    }
}

function checkForHit(x, y) {
   for (let i = 0; i < bugX.length; i++) {
    if (pointIsInCircle(x, y, bugX[i], bugY[i], 90)) {
        bugX.splice(i, 1);
        bugY.splice(i, 1);
        score += 1
        i--;
        spawnNewBugs();
        return true;
    }
   }
}

function spawnNewBugs() {
     //make bugs in waves___
      if (bugX.length == 0) {
         bugCount++;
         for (let j = 0; j < bugCount; j++) {
             spawnBug();
         }
     }
    
    
    // 2 for each dead bug
    //spawnBug();
    //spawnBug();
    
}

function pointIsInCircle(x, y, circleX, circleY, circleD) {
    return dist(x, y, circleX, circleY) < circleD / 2;
}

function keyReleased(){
     if(keyCode == 32){//spacebar
  lazerX.push(x)
  lazerY.push(y)
  }
}