let bothY = 130;
let bothW = 150;
let bothH = 225;

function attack() {
    fill('gray');
    rect(385, 0, 206, 30);
    fill('red');
    text("Enemy HP:" + enemyHealth, 490, 15);
    enemyAppearance();
    fightBox();
    
    fill('silver');
    rect(75, bothY, bothW, bothH);
    image(slash, 112, 150);
    fill('black');
    textFont('Courier New', 14);
    text("SIMPLE SLASH\n" +
    "A run-of-the-mill\n" +
    "swing that deals\n" +
    "only five damage.", 150, 300);

    fill('lightSlateGray');
    rect(375, bothY, bothW, bothH);
    image(cleave, 404, 140);
    fill('black');
    textFont('Courier New', 13);
    text("COURAGEOUS CLEAVE\n" +
    "An attack of pure\n" +
    "power. It deals\n" +
    "twelve damage, but\n" +
    "at the cost of\n" +
    "five Health Points.", 450, 300);
}

function mousePressed() {
    if (mouseIsInRect(75, bothY, bothW, bothH)) {
        enemyHealth -= 5;
        enemyAction();
  }
    
    if (mouseIsInRect(375, bothY, bothW, bothH)) {
        enemyHealth -= 12;
        playerHealth -= 5;
        enemyAction();
  }    
  
  gameFinish();
}

function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX >= x;
    let isInRight = mouseX <= x + w;
    let isInTop = mouseY >= y;
    let isInBottom = mouseY <= y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom; // && means AND
}

//<a href="https://www.flaticon.com/free-icons/sword" title="sword icons">Sword icons created by Freepik - Flaticon</a>