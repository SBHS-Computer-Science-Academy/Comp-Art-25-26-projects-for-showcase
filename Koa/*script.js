// Beach volleyball game in p5.js
// Controls:
//  - Left player: A/D to move, W to jump  
//  - Right player: ←/→ to move, ↑ to jump

// Core game variables
let player1, player2;
let ball;
let netX;
let gravity = 0.15;  // LOWER ball gravity
let floorY;
let leftScore = 0;
let rightScore = 0;

// Aesthetic variables - BEACH colors
let skyTop, skyBottom, sandColor, oceanColor;

function setup() {
  createCanvas(800, 450);
  floorY = height - 50;
  netX = width / 2;

  // BEACH COLORS
  skyTop = color(135, 206, 250);     // sky blue
  skyBottom = color(255, 228, 196);  // warm sky near horizon
  sandColor = color(237, 201, 175);  // beach sand
  oceanColor = color(30, 100, 180);  // ocean waves

  resetPlayers();
  resetBall("left");
}

function resetPlayers() {
  player1 = {
    x: width * 0.25,
    y: floorY,
    w: 40,
    h: 80,
    vx: 0,
    speed: 8,
    vy: 0,
    onGround: true,
    color: color(255, 120, 120)
  };

  player2 = {
    x: width * 0.75,
    y: floorY,
    w: 40,
    h: 80,
    vx: 0,
    speed: 8,
    vy: 0,
    onGround: true,
    color: color(120, 200, 255)
  };
}

function resetBall(target) {
  if (target === "left") {
    ball = {
      x: width * 0.65,
      y: floorY - 180,
      vx: -6,
      vy: -5,
      r: 18
    };
  } else {
    ball = {
      x: width * 0.35,
      y: floorY - 180,
      vx: 6,
      vy: -5,
      r: 18
    };
  }
}

function draw() {
  drawBeachBackground();
  drawCourt();

  handleInput();
  updatePlayer(player1, 0, netX - 25);
  updatePlayer(player2, netX + 25, width);

  updateBall();
  checkBallCollisions();

  drawPlayer(player1);
  drawPlayer(player2);
  drawBall();

  drawScoreboard();
  drawInstructions();
}

function drawBeachBackground() {
  // SKY gradient
  for (let y = 0; y < floorY; y++) {
    let t = map(y, 0, floorY, 0, 1);
    let c = lerpColor(skyTop, skyBottom, t);
    stroke(c);
    line(0, y, width, y);
  }

  // OCEAN waves in distance
  noStroke();
  fill(oceanColor);
  for (let i = 0; i < 4; i++) {
    let waveY = floorY - 120 - i * 15;
    let waveHeight = 20 + i * 5;
    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let waveOffset = sin(x * 0.02 + frameCount * 0.05) * 8;
      vertex(x, waveY + waveOffset);
    }
    vertex(width, floorY);
    vertex(0, floorY);
    endShape(CLOSE);
  }

  // SUN
  fill(255, 255, 150, 200);
  noStroke();
  ellipse(width - 100, 80, 70, 70);
}

function drawCourt() {
  // SAND floor at bottom only
  noStroke();
  fill(sandColor);
  rect(0, floorY, width, height - floorY);

  // Beach volleyball court lines (faded)
  stroke(255, 255, 255, 150);
  strokeWeight(3);
  noFill();
  rect(80, floorY - 160, width - 160, 110);  // court boundary

  // Service lines
  strokeWeight(2);
  line(80, floorY, width - 80, floorY);                    
  line(80, floorY - 140, width - 80, floorY - 140);         

  // Net (180px, beach style)
  stroke(200, 150, 100);
  strokeWeight(5);
  line(netX, floorY, netX, floorY - 180);

  // Net ropes/mesh
  strokeWeight(1.5);
  stroke(180, 130, 80);
  for (let y = floorY - 10; y > floorY - 180; y -= 15) {
    line(netX - 10, y, netX + 10, y);
  }
  for (let x = netX - 10; x <= netX + 10; x += 15) {
    line(x, floorY - 10, x, floorY - 180);
  }

  // Center line
  stroke(255, 255, 255, 120);
  strokeWeight(2);
  line(netX - 1, floorY - 90, netX + 1, floorY - 90);
}

function drawPlayer(p) {
  noStroke();
  fill(0, 0, 0, 40);
  ellipse(p.x, floorY + 5, 40, 10);

  fill(p.color);
  rectMode(CENTER);
  rect(p.x, p.y - p.h / 2, p.w, p.h, 10);

  fill(255, 235, 210);
  ellipse(p.x, p.y - p.h, 28, 28);
}

function drawBall() {
  noStroke();
  fill(0, 0, 0, 50);
  ellipse(ball.x, floorY + 3, ball.r * 1.6, ball.r * 0.6);

  fill(255, 245, 210);
  stroke(255, 200, 120);
  strokeWeight(2);
  ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2);

  stroke(255, 200, 120);
  line(ball.x - ball.r, ball.y, ball.x + ball.r, ball.y);
  line(ball.x, ball.y - ball.r, ball.x, ball.y + ball.r);
}

function drawScoreboard() {
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0, 120);
  noStroke();
  rect(width / 2 - 70, 10, 140, 40, 10);
  fill(255);
  text(leftScore + " : " + rightScore, width / 2, 30);
}

function drawInstructions() {
  textAlign(CENTER);
  textSize(14);
  fill(0, 180);
  text(
    "Left: A/D + W  |  Right: ←/→ + ↑  |  First to 7 wins!",
    width / 2,
    height - 20
  );
}

function handleInput() {
  player1.vx = 0;
  if (keyIsDown(65)) player1.vx = -player1.speed;
  if (keyIsDown(68)) player1.vx = player1.speed;
  if (keyIsDown(87) && player1.onGround) {
    player1.vy = -12;
    player1.onGround = false;
  }

  player2.vx = 0;
  if (keyIsDown(37)) player2.vx = -player2.speed;
  if (keyIsDown(39)) player2.vx = player2.speed;
  if (keyIsDown(38) && player2.onGround) {
    player2.vy = -12;
    player2.onGround = false;
  }
}

function updatePlayer(p, minX, maxX) {
  p.x += p.vx;
  p.x = constrain(p.x, minX + p.w / 2, maxX - p.w / 2);

  p.vy += gravity;
  p.y += p.vy;

  if (p.y >= floorY) {
    p.y = floorY;
    p.vy = 0;
    p.onGround = true;
  }
}

function updateBall() {
  ball.vy += gravity;  // LOWER gravity effect
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x - ball.r < 80) {
    ball.x = 80 + ball.r;
    ball.vx *= -0.9;
  }
  if (ball.x + ball.r > width - 80) {
    ball.x = width - 80 - ball.r;
    ball.vx *= -0.9;
  }

  if (ball.y - ball.r < 50) {
    ball.y = 50 + ball.r;
    ball.vy *= -0.8;
  }

  if (ball.y + ball.r >= floorY) {
    ball.y = floorY - ball.r;
    ball.vy = 0;

    if (ball.x < netX) {
      rightScore++;
      resetRound("left");
    } else {
      leftScore++;
      resetRound("right");
    }
  }
}

function resetRound(targetSide) {
  if (leftScore >= 7 || rightScore >= 7) {
    leftScore = 0;
    rightScore = 0;
  }
  resetPlayers();
  resetBall(targetSide);
}

function checkBallCollisions() {
  if (
    ball.x + ball.r > netX - 4 &&
    ball.x - ball.r < netX + 4 &&
    ball.y + ball.r > floorY - 180 &&
    ball.y - ball.r < floorY
  ) {
    if (ball.x < netX) {
      ball.x = netX - ball.r - 4;
    } else {
      ball.x = netX + ball.r + 4;
    }
    ball.vx *= -0.9;
  }

  collideWithPlayer(player1);
  collideWithPlayer(player2);
}

function collideWithPlayer(p) {
  let halfW = p.w / 2;
  let closestX = constrain(ball.x, p.x - halfW, p.x + halfW);
  let closestY = constrain(ball.y, p.y - p.h, p.y);

  let dx = ball.x - closestX;
  let dy = ball.y - closestY;
  let distSq = dx * dx + dy * dy;

  if (distSq < ball.r * ball.r) {
    let dist = sqrt(distSq) || 0.0001;
    let nx = dx / dist;
    let ny = dy / dist;

    ball.x = closestX + nx * ball.r;
    ball.y = closestY + ny * ball.r;

    let randomSpeed = random(8, 12);
    let randomLift = random(8, 12);

    if (p === player1) {
      ball.vx = randomSpeed;
    } else {
      ball.vx = -randomSpeed;
    }

    ball.vy = -randomLift;

    let hitHeight = map(ball.y, p.y - p.h, p.y, 0, 1);
    ball.vy -= hitHeight * 1.5;

    ball.vx = constrain(ball.vx, -14, 14);
    ball.vy = constrain(ball.vy, -14, -6);
  }
}