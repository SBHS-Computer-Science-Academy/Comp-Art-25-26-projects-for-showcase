let cleave;
let slash;
let actionX = [];
let actionY = [];
let actionTextSize = [];
let actionWidth = [];
let actionHeight = [];
let actionText = [];
let playerHealth = 65;
let enemyHealth = 60;
let healUsage = 0;

function preload() {
    cleave = loadImage("https://codehs.com/uploads/215b6a1aee172d8967c9ec964172510c"); // assign the image using the file name or URL in quotes
    slash = loadImage("https://codehs.com/uploads/e2f4e463fdf7c29f96e03f129be4ea5b");
}

function setup() {
  createCanvas(600, 600);
  
  cleave.resize(100, 0); //width of 80, the 0 keeps the aspect ratio constant
  slash.resize(100, 0);
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
    actionX = [300, 450, 300, 450];
    actionY = [470, 470, 540, 540];
    actionWidth = [120, 120, 120, 120];
    actionHeight = [50, 50, 50, 50];
    actionTextSize = [25, 25, 30, 30];
    actionText = ['ATTACK', 'INTERACT', 'HEAL', 'FLEE'];
    noLoop();
}

function draw() {
  background('gainsboro');
  enemyAppearance();
  fightBox();
}

//makes the small dark gray box at the bottom
function fightBox() {
    fill('gray');
    rect(0, 460, 600, 140);
    
    textFont('Courier New', 40);
    fill('black');
    text("WHAT IS\n" +
    "YOUR MOVE?", 130, 515);
    drawSetOfActBoxes();
}

//acts as a base for all the choice boxes in the bottom right
function drawActBox(x, y, w, h, size, word) {
    fill('gainsboro');
    rect(x, y, w, h);
    
    textFont('Courier New');
    textSize(size);
    fill('black');
    text(word, x+60, y+25);

}

function drawSetOfActBoxes() {
    for (let i = 0; i < actionX.length; i++) {
        drawActBox(actionX[i], actionY[i], actionWidth[i], actionHeight[i], actionTextSize[i], actionText[i])
    }
    fill('green');
    text("Your HP:" + playerHealth, 130, 580);
    
    fill('gray');
    rect(385, 0, 206, 30);
    fill('red');
    text("Enemy HP:" + enemyHealth, 490, 15);
}

function mouseReleased() {
    if (mouseIsInBoxes(actionX[0], actionY[0], actionWidth[0], actionHeight[0])) {
        fill('gainsboro');
        rect(0, 0, 600, 460);
        attack();
    }
    
    if (mouseIsInBoxes(actionX[1], actionY[1], actionWidth[1], actionHeight[1])) {
        fill('gainsboro');
        rect(0, 0, 600, 460);
        interact();
    }
    
    if (mouseIsInBoxes(actionX[2], actionY[2], actionWidth[2], actionHeight[2])) {
        if (healUsage <= 2) {
        healUsage = healUsage+1;
        playerHealth += 8;
        }
        
        fill('gainsboro');
        rect(0, 0, 600, 460);
        
        fill('gray');
        rect(385, 0, 206, 30);
        fill('red');
        text("Enemy HP:" + enemyHealth, 490, 15);
        enemyAppearance();
        fightBox();
    }
    
    if (mouseIsInBoxes(actionX[3], actionY[3], actionWidth[3], actionHeight[3])) {
        fill('gainsboro');
        rect(0, 0, 600, 460);
        
        fill('gray');
        rect(385, 0, 206, 30);
        fill('red');
        text("Enemy HP:" + enemyHealth, 490, 15);
        
        enemyAppearance();
        fightBox();
        
        fill('black');
        textFont('Courier New', 25);
        text("*You Feel a Powerful Vibe Emanating\n" +
        "From Your Foe. You Cannot Run Now.", 300, 75);
    }
}

function mouseIsInBoxes(x, y, w, h) {
    let isInLeft = mouseX >= x;
    let isInRight = mouseX <= x + w;
    let isInTop = mouseY >= y;
    let isInBottom = mouseY <= y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom; // && means AND
}