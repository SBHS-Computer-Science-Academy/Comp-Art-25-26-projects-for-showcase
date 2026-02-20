let choice = 0;

function enemyAction() {
    choice = int(random(1,4));
    
    if (choice == 1) { //enemy attacks player
    playerHealth -= 7;
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 340, 40);
    pop();
    fill('black');
    textFont('Courier New', 20);
    text("Ruffian Hit You!", 100, 20);
    }

    if (choice == 2) { //enemy stronger attack
    playerHealth -= 10;
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 340, 40);
    pop();
    fill('black');
    textFont('Courier New', 20);
    text("Ruffian Hit You Heavily!", 150, 20);
    }
    
    if (choice == 3) { //enemy does nothing
    playerHealth -= 0;
    push();
    noStroke();
    fill('gainsboro');
    rect(0, 0, 340, 40);
    pop();
    fill('black');
    textFont('Courier New', 18);
    text("Ruffian Missed Their Attack...", 170, 20);
    }
    
    fightBox();
}

function gameFinish() {
    if (playerHealth <= 0) {
        fill('black')
        rect(0, 0, 600, 600);
        fill('fireBrick');
        textFont('Merriweather', 40);
        text("GAME OVER", 300, 250);
        textFont('Merriweather', 20);
        text("You Were Defeated in Combat, Dearest Hero...\n" +
        "You Should Try Once More, Do You Understand That?\n" +
        "Too Much Lies Upon Your Shoulders to Fall Now!", 300, 450);
    }
    
    if (enemyHealth <= 0) {
        fill('black')
        rect(0, 0, 600, 600);
        fill('royalBlue');
        textFont('Merriweather', 40);
        text("HERO VICTORIOUS!", 300, 250);
        textFont('Courier New', 20);
        text("I'd Say You Deserved That Victory...\n" +
        "Though That Ruffian Stood No Chance. You're Our\n" +
        "Hero After All! Now, Back to the Task at Hand!\n" +
        "You Must Go Save the Princess and the Kingdom!", 300, 450);
    }
}

function enemyAppearance() {
    fill('saddleBrown');
    ellipse(300, 400, 200, 240); //body
    ellipse(300, 240, 214, 238); //head
    fill('black');
    ellipse(300, 245, 160, 192); //darkness
    fill('crimson');
    triangle(232, 240, 232, 200, 292, 240); //left eye
    triangle(308, 240, 368, 200, 368, 240); //right eye
    rect(255, 270, 90, 40); //mouth
    //teeth marks
    line(255, 270, 270, 310);
    line(270, 310, 285, 270);
    line(285, 270, 300, 310);
    line(300, 310, 315, 270);
    line(315, 270, 330, 310);
    line(330, 310, 345, 270);
}