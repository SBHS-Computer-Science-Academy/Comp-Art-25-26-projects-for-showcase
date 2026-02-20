let squareColor = []
let squareY = []

let x = 300;
let y = 500;
let shoot = 0;
let bossHealthBar = 560;
let start = false;
let restart = false;

let playerhits = 0;
let playerCollisions = true;
let playerhealth = 0;

let attackSpeed = 4;
let framesPassed = 0;

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
  attck_reset();
}

function draw() {
  if (keyIsPressed) start = true;
  if (keyIsPressed) restart = true;
  
  run_game();
 
  noStroke();
}

function attck_reset() {
    for (let i = 0; i < 50; i += 1) {
    squareY[i] = random(-height*3,0);
    squareColor[i] = getAtkColor();
    }
}

function getAtkColor() {
    
    let palette = 
    [
        color(255, 56, 56,150),
        color(255, 189, 56,150),
        color(255, 248, 56,150)
    ]
    
    return random(palette);
}

function boss_attack() {
    
    for (let i = 0; i < squareY.length; i++) {
    
    fill(squareColor[i]);
    
    let squareX = width * i / squareY.length;
    push();
    translate(squareX, squareY[i]);
    rotate(squareY[i]);
    square(-5,-5,10);
    pop();
    
    squareY[i] += attackSpeed;
    
    if (squareY[i] > height + 25) {
        squareY[i] = -1200;
    }
    invincibility_frames(squareX, squareY[i]);
  }
    
}

function increase_attack_speed() {
    framesPassed += .25
    
    if (framesPassed == 40) {
        
        //playerCollisions = false;
        framesPassed = 0;
        attackSpeed += .20 //.25/2
        //setTimeout(playerCollisionsTrue,1000);
    }
}

function run_game() {
    if (restart) {
        game(); 
    }
    if (start == false) {
        start_screen();
    }
}

function game() {
  background(220);
  Player_movement();
  Player_projectile();
  boss_attack();
  Boss();
  Health_Bar();
  invincibility_frames();
  increase_attack_speed();
  
  
  //UI
  Boss_health_bar();
  check_WIN();
  check_LOSE();
}

function Boss() {
    fill(255);
    ellipseGradient(color(50,0,0),color(200,0,0),300,0,600,175);
    // ellipse(300,0,600,175);
}

function Health_Bar() {
    fill(150,0,0);
    rect(20,5,560,20);
}

function Player(q,w) {
    push();
    translate(q,w);
    player_color();
    circle(0,0,30);
    pop();
    
}

function Player_movement() {
    fill(255);
    

    if(keyIsDown(RIGHT_ARROW)){
        x=x +1+attackSpeed
    }

    if(keyIsDown(LEFT_ARROW)){
       x = x-1-attackSpeed
    }
    
    if(keyIsDown(DOWN_ARROW)){
       y = y+1+attackSpeed
    }
    
    if(keyIsDown(UP_ARROW)){
       y = y-1-attackSpeed
    }
    
    x = constrain(x,15,585);
    y = constrain(y,15,585);
    
    Player(x,y);
    
}

function Player_projectile() {
    fill(255);
    if (shoot < -600) { 
        shoot = 0
    }
    push();
    translate(x,shoot+y);
    circle(0,0,10);
    pop();
    
    shoot = shoot -20
}

function Boss_health_bar() {
    fill(0,150,0);
    rect(20,5,bossHealthBar,20);
    
    bossHealthBar = bossHealthBar - .25
}

function check_WIN() {
    if (bossHealthBar < 0) {
        win_screen();
        resetGame();
    }
}

function win_screen() {
    fill(0,200,0);
    square(0,0,600);
    fill(0);
    textSize(65);
    text("You Win!\n" + ":D", 300, 200)
    textSize(30);
    text("Press any key to restart the game\n"+"use the arrow keys to move", 300, 400)
}

function start_screen() {
    fill(100);
    square(0,0,600);
    fill(0);
    textSize(65);
    text("Welcome to:\n"+"The Boss Level", 300, 200)
    textSize(30);
    text("Press any key to start the game\n"+"use the arrow keys to move", 300, 400)
}

function wait() {
    setTimeout(loop,1000);
}

function invincibility_frames(squareX, squareY) {
    if (playerCollisions) {
        if (collideRectCircle(50,0,500,50, x, y, 30)) {
            playerhits += 1;
        }
        if (collideCircleCircle(x, y, 30, squareX, squareY, 10)) {
            playerhits += 1
        }
    }
    if (playerhits == 1) {
        playerCollisions = false;
        playerhits = 0;
        playerhealth += 1
        setTimeout(playerCollisionsTrue,1000);
    }
}

function playerCollisionsTrue() {
    playerCollisions = true;
}

function player_color() {
    if (playerhealth == 0) {
        fill(0,200,00);
    }
    if (playerhealth == 1) {
        fill(0,255,00);
    }
    if (playerhealth == 2) {
        fill(255,255,0);
    }
    if (playerhealth == 3) {
        fill(255,0,0);
    }
    if (playerCollisions == false && frameCount%20 < 10) {
        fill(0,0,0,0);
    }
}

function check_LOSE() {
    if (playerhealth == 4) {
        lose_screen();
        resetGame();
    }
}

function resetGame() {
    bossHealthBar = 560
    restart = false;
    noLoop();
    wait();
    playerhealth = 0
    attck_reset();
    x = 300
    y = 500
    attackSpeed = 4
}

function lose_screen() {
    fill(200,0,0);
    square(0,0,600);
    fill(0);
    textSize(65);
    text("You Died.\n" + ":(", 300, 200)
    textSize(30);
    text("Press any key to restart the game\n"+"use the arrow keys to move", 300, 400)
}

function ellipseGradient(startColor,endColor,middleX,middleY,width,height) {
    for (let w = width; w > 0; w -= 1) {
        let thisColor = getColor(color(startColor), color(endColor), w, width, 10)
        fill(thisColor);
        noStroke();
        ellipse(middleX,middleY,w,w * height/width);
    }
}