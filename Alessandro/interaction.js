let talkX = 110;
let angerX = 240;
let checkX = 370;
let triY = 400;
let width = 120;
let height = 50;

function interact() {
    enemyAppearance();
    fightBox();
    
    fill('gainsboro');
    rect(talkX, triY, width, height);
    textFont('Courier New', 30);
    fill('green');
    text("TALK", 170, 425);
        
    fill('gainsboro');
    rect(angerX, triY, width, height);
    textFont('Courier New', 30);
    fill('red');
    text("ANGER", 300, 425);
        
    fill('gainsboro');
    rect(checkX, triY, width, height);
    textFont('Courier New', 30);
    fill('black');
    text("CHECK", 430, 425);
    
    fill('gray');
    rect(385, 0, 206, 30);
    fill('red');
    text("Enemy HP:" + enemyHealth, 490, 15);
}

function mouseClicked() {
if (mouseIsInRect(talkX, triY, width, height)) {
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 600, 118);
    pop();
    fill('black');
    textFont('Courier New', 25);
    text("*You Attempt to Start a Conversation,\n" +
    "But Your Foe Just Ignores You. So Rude!", 300, 75);
    enemyAction();
    }
    
if (mouseIsInRect(angerX, triY, width, height)) {
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 600, 118);
    pop();
    fill('black');
    textFont('Courier New', 25);
    text("*You Mock and Insult Your Foe. The\n" +
    "Sword Pointed at You Seems Sharper and\n" +
    "Far More Imposing Now, Doesn't It?", 300, 75);
    enemyAction();
    }
    
if (mouseIsInRect(checkX, triY, width, height)) {
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 600, 118);
    pop();
    fill('black');
    textFont('Courier New', 25);
    text("Ruffian, a Random Encounter\n" +
    "3 Actions and 60 HP | Damage Range 7-10\n" +
    "*He Doesn't Appear To Be a Challenge", 300, 75);
    enemyAction();
    }
    
    gameFinish();
}

function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX > x;
    let isInRight = mouseX < x + w;
    let isInTop = mouseY > y;
    let isInBottom = mouseY < y + h;
    return isInLeft && isInRight && isInTop && isInBottom; // && means AND
}