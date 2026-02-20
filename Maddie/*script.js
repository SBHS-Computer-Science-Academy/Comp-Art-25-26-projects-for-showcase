let duckX = 106
let duckY = 670
let duckW = 35
let duckH = 64
let duckAngle = 0
let ducklingAngle = []
let ducklingW = 25
let ducklingH = 44
let ducklingX = [];
let ducklingY = [];
let ducklingCollected = [];
let boats = [];
let trail = [];          //stores ducks past positions
let trailSpacing = 20; // distance between followers
let duckR = 32; //radius of duck hitbox
let score = 0
let lilypads = 5
let lilypadX = []
let lilypadY = []
let respawnReady = true;
let clickToStart = true




class Boat {
  constructor(type, y, w, h) {
    this.type = type; // 1, 2, or 3
    this.y = y;
    this.w = w;
    this.h = h;
      this.x = random(900, 1400);
    this.speed = random(1, 5);
  }


  move() {
    this.x -= this.speed;
    if (this.x < -this.w) {
      this.x = random(900, 1400);
      this.speed = random(1, 5);
    }
  }

  display() {
    if (this.type === 1) drawBoat1(this.x, this.y);
if (this.type === 2) drawBoat2(this.x, this.y);
    if (this.type === 3) drawBoat3(this.x, this.y);
    
  }

  hitsDuck() {
    return collideRectCircle(
      this.x,
      this.y,
      this.w,
      this.h,
      duckX,
      duckY,
      duckR*2,
     
    );
  }
}

function setup() {
  let myCanvas = createCanvas(900, 800);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
//  
//type,y,width,height
  boats.push(new Boat(1, 302, 171, 89));
  boats.push(new Boat(2, 134, 170, 45));
  boats.push(new Boat(3, 555, 217, 65));
  
 for(let i = 0; i < lilypads; i++){
  lilypadX.push(random(0,900));
  lilypadY.push(random(0,800));
 }

    
}

function draw() {
      
  if (clickToStart) {
    background(5, 185, 245);
    drawText();
    return; 
  }

  
  background(5, 185, 245);
  
   //make boats faster after 10 ducklings collected
if (score >= 10) {
  for (let boat of boats) {
    boat.speed = random(5, 10); 
  }
}
if(score >= 20) {
    for (let boat of boats) {
    boat.speed = random(10, 15); 
  }
}

  trail.push({ x: duckX, y: duckY, angle: duckAngle });//keeps track of where duck used to be

if (trail.length > ducklingX.length * trailSpacing) {
  trail.shift();//removes oldest positions
  
}
  //lilypads
  for(let i = 0; i < 5; i++){
  drawLilypads(lilypadX[i], lilypadY[i]);
  }
  //drawNest(155,745,1.25);
  moveWithKeys();
  noFill()
  stroke('black')
  // Don't delete the following or the sketching code breaks
 // drawMouseLines("black");
  
 

//colect ducklings
for (let i = 0; i < ducklingX.length; i++) {
  if (ducklingCollected[i]==false && duckHitsDuckling(i)) {
ducklingCollected[i] = true;
    score++;
   
  }
}

//make collect ducklings follow
let followerIndex = 1;

for (let i = 0; i < ducklingX.length; i++) {
  drawDucklings(ducklingX[i], ducklingY[i], ducklingAngle[i]);
 
  if (ducklingCollected[i]) {
   //folow last duckloign
    let index = trail.length - followerIndex * trailSpacing;
    
    if (index >= 0) {
        ducklingX[i] = trail[index].x;
      ducklingY[i] = trail[index].y;
      ducklingAngle[i] = trail[index].angle
    }


    followerIndex++;
  }
}

 //respawn code
 let uncollectedCount = 0;
//once 0 uncollected,respawn
for (let i = 0; i < ducklingCollected.length; i++) {
  if (!ducklingCollected[i]) {
    uncollectedCount++;
  }
}
// make them not reswpn infinitly
if (uncollectedCount == 0 && respawnReady) {
  spawnDucklings(5);
  respawnReady = false;
}

if (uncollectedCount > 0) {
      respawnReady = true;
}

drawDuck(duckX,duckY);//.075
fill(0)
textSize(20)
text("SCORE: " + score,50,25)


  for (let boat of boats) {
  boat.move();
  boat.display();

    textSize(50);
    fill(0);
  if (boat.hitsDuck()) {
    noLoop();
    text("GAME OVER", width / 2, height / 2);
}
}
//drawText();
}

function spawnDucklings(amount) {
  for (let i = 0; i < amount; i++) {
    ducklingX.push(random(100, 800));
    ducklingY.push(random(100, 700));
    ducklingCollected.push(false);
    ducklingAngle.push(0)
  }
}

function moveWithKeys() {
  if (keyIsDown(UP_ARROW)) {
  duckX+= 3 * sin(duckAngle)
   duckY-=3 * cos(duckAngle)
//   drawWhiteWater(duckX,duckY)
  }
  if (keyIsDown(DOWN_ARROW)) {
    duckX-= 3 * sin(duckAngle)
   duckY+=3 * cos(duckAngle)
//   drawWhiteWater(duckX,duckY)
  }
  if (keyIsDown(LEFT_ARROW)) {
  duckAngle-=1
  
//   drawWhiteWater(duckX,duckY)
  }
  if (keyIsDown(RIGHT_ARROW)) {
  duckAngle+=1 
//   drawWhiteWater(duckX,duckY)
  }
  
    duckX = constrain(duckX, 30, 780);
    duckY = constrain(duckY, 30, 770);
}

function drawDuck(x,y,r,s){
  push();
  translate(x,y);
  rotate(duckAngle); 
  scale(0.75);
  translate(-105,-440);

  strokeWeight(0.5);
  stroke(0);
  //FEET
  fill(237, 133, 14);
   beginShape();
  vertex(131, 466);
  vertex(125, 477);
  vertex(128, 475);
  vertex(130, 476);
  vertex(130, 478);
  vertex(134, 475);
  vertex(136, 475);
  vertex(138, 478);
  vertex(139, 475);
  vertex(132, 465);
  endShape();
  beginShape();
  vertex(81, 464);
  vertex(85, 478);
  vertex(82, 477);
  vertex(80, 477);
  vertex(77, 479);
  vertex(75, 476);
  vertex(72, 476);
  vertex(69, 477);
  vertex(80, 462);
  endShape();
  
  
   //BODY
   fill(201, 201, 183)
  beginShape();
  vertex(113, 394);
  vertex(118, 393);
  vertex(124, 396);
  vertex(127, 399);
  vertex(133, 406);
  vertex(137, 414);
  vertex(138, 427);
  vertex(136, 442);
  vertex(131, 464);
  vertex(122, 482);
  vertex(112, 495);
  vertex(98, 505);
  vertex(96, 497);
  vertex(93, 490);
  vertex(87, 479);
  vertex(82, 467);
  vertex(78, 454);
  vertex(75, 435);
  vertex(73, 416);
  vertex(81, 398);
  vertex(90, 392);
  vertex(101, 392);
  vertex(109, 393);
  endShape();
   fill(156, 113, 6);
   beginShape();
  vertex(77, 410);
  vertex(80, 412);
  vertex(84, 418);
  vertex(86, 423);
  vertex(101, 425);
  vertex(103, 427);
  vertex(108, 430);
  vertex(111, 431);
  vertex(116, 431);
  vertex(126, 424);
  vertex(129, 420);
  vertex(129, 416);
  vertex(131, 413);
  vertex(135, 408);
  vertex(132, 404);
  vertex(125, 396);
  vertex(119, 393);
  vertex(113, 393);
  vertex(110, 393);
  vertex(101, 391);
  vertex(93, 392);
  vertex(87, 393);
  vertex(82, 397);
  vertex(75, 408);
  endShape();
   
    //BEAK
   fill(216, 219, 110)
   beginShape();
  vertex(92, 408);
  vertex(98, 401);
  vertex(102, 394);
  vertex(104, 381);
  vertex(108, 380);
  vertex(112, 383);
  vertex(112, 391);
  vertex(113, 396);
  vertex(118, 404);
  vertex(119, 408);
  endShape();
    
    
    //HEAD
    fill(106, 204, 104);
    beginShape();
    vertex(87,406);
    vertex(94,405);
    vertex(98,406);
    vertex(104,409);
    vertex(109,407);
    vertex(114,405);
    vertex(121,405);
    vertex(125,409);
    vertex(127,417);
    vertex(126,427);
    vertex(123,433);
    vertex(119,439);
    vertex(112,443);
    vertex(102,445);
    vertex(93,441);
    vertex(89, 435);
    vertex(86, 424);
    vertex(85, 416);
    vertex(86, 410);
    vertex(88, 405);
    endShape();
    
    //DETAILS
    fill(0)
    ellipse(122, 421, 1, 3);//eye
    stroke(0);
    line(121, 417, 121, 425);
    ellipse(90, 421, 1, 3);//eye
    line(92, 417, 91, 425);
    ellipse(105, 393, 0.5, 1.5);
    ellipse(109, 393, 0.5, 1.5);
  noFill();
  stroke(0);
 // rect(80, 389, 55, 100);
    
    pop();
    
}

function drawDucklings(x, y,r) {
  push();
  translate(x, y);
  rotate(r);
  noStroke();

  // hitbox (optional debug)
  // noFill(); stroke(0); rect(0, 0, 25, 44);

  fill(237, 133, 14);
  beginShape();
  vertex(10, 6);
  vertex(9, 3);
  vertex(10, 2);
  vertex(12, 2);
  vertex(14, 2);
  vertex(15, 3);
  vertex(14, 6);
  endShape();

  fill(235, 204, 52);
  ellipse(12, 37, 8, 14);
  fill(219, 185, 20)
  ellipse(12, 26, 22, 28);
  fill(235, 204, 52);
  ellipse(12, 14, 16, 16);

  pop();
}

function drawLilypads(x,y){
    push();
    translate(x, y);
    //translate(-112,-85);
     for (let i = 0; i < 5; i++) {
  lilypadX.push(random(0,900));
  lilypadY.push(random(0,800));
     }
    noStroke();
    fill(27, 133, 41);
    ellipse(112, 88, 46, 46);
    fill(5, 185, 245);
    triangle(107, 64, 112, 85, 119, 64);
    pop();
}

function drawNest(x,y,s){
push();
translate(x,y);
scale(s);
translate(-100,-715);
noStroke();
fill(242, 216, 179);
rect(52, 654, 54, 3);
rect(89, 653, 5, 38);
rect(45, 685, 57, 2);
rect(41, 655, 3, 40);
rect(35, 677, 2, 25);
rect(76, 660, 2, 42);
rect(50, 699, 45, 4);
rect(44, 650, 47, 3);
rect(93, 645, 3, 42);
rect(39, 650, 29, 5);
fill(161, 132, 92);
rect(50, 647, 49, 3);
rect(46, 686, 52, 4);
rect(91, 639, 5, 60);
rect(60, 641, -3, 50);
rect(41, 640, -4, 52);
rect(46, 692, 35, 4);
stroke(242, 216, 179);
strokeWeight(3);
line(60, 646, 100, 662);
line(28, 675, 63, 697);
line(64, 642, 36, 660);
line(72, 694, 99, 672);
line(77, 644, 92, 679);
stroke(161, 132, 92);
line(47, 691, 93, 676);
line(31, 657, 59, 692);
line(39, 644, 84, 653);
stroke(196, 164, 120);
line(71, 645, 94, 679);
line(79, 636, 105, 653);
line(40, 644, 77, 653);
line(23, 681, 52, 701);
line(100, 675, 75, 706);
line(26, 682, 31, 643);
line(107, 649, 82, 688);
stroke(107, 80, 43);
line(48, 634, 89, 633);
line(34, 685, 78, 693);
line(47, 648, 28, 675);
line(90, 652, 97, 689);
stroke(191, 149, 92);
line(63, 629, 89, 645);
line(67, 636, 40, 646);
line(52, 686, 28, 698);
line(50, 640, 25, 658);
stroke(242, 216, 179);
line(84, 629, 48, 637);
line(110, 681, 87, 702);
line(47, 647, 21, 671);
line(50, 667, 35, 688);
line(94, 643, 113, 687);
pop();
}

function drawBoat1(x,y){
  push();
  translate(x,y);
  translate(-385,-212);
  
  noFill();
  //stroke(0)
  //rect(345, 212, 211, 93);
  noStroke();
  
  fill(250);
   beginShape();
  vertex(399, 249);
  vertex(412, 213);
  vertex(520, 215);
  vertex(524, 252);
  vertex(398, 251);
  endShape();
   
   
    fill(245, 166, 176);
     beginShape();
  vertex(350, 250);
  vertex(556, 251);
  vertex(555, 260);
  vertex(552, 278);
  vertex(549, 288);
  vertex(542, 295);
  vertex(535, 303);
  vertex(524, 308);
  vertex(511, 312);
  vertex(487, 315);
  vertex(468, 315);
  vertex(450, 312);
  vertex(424, 305);
  vertex(408, 296);
  vertex(384, 284);
  vertex(369, 271);
  vertex(355, 260);
  vertex(348, 249);
  endShape();
  
  rect(483, 180, 23, 34);
  
  fill(166, 215, 245);
  ellipse(429, 232, 22, 22);
ellipse(463, 232, 22, 22);
ellipse(497, 232, 22, 22);
  pop();
}

function drawBoat2(x,y){
  push();
  translate(x,y);
  translate(-286,-74);
 
  noStroke();
  //rect(276, 64, 190, 62);
  fill(130, 97, 48);
   beginShape();
  vertex(275, 61);
  vertex(282, 66);
  vertex(294, 71);
  vertex(314, 78);
  vertex(344, 82);
  vertex(366, 84);
  vertex(393, 86);
  vertex(424, 83);
  vertex(454, 75);
  vertex(466, 67);
  vertex(467, 78);
  vertex(467, 88);
  vertex(460, 100);
  vertex(448, 111);
  vertex(434, 119);
  vertex(414, 125);
  vertex(399, 126);
  vertex(379, 126);
  vertex(356, 124);
  vertex(338, 123);
  vertex(311, 117);
  vertex(296, 106);
  vertex(285, 89);
  vertex(279, 80);
  vertex(275, 60);
  endShape();
  
  stroke(92, 68, 33);
  strokeWeight(1.5);
  line(290, 96, 462, 96);
  line(332, 121, 426, 121)
  line(304, 109, 451, 109); 
  line(284, 83, 344, 84);
  line(410, 86, 467, 86);
  
  
  
  
  pop();
}

function drawBoat3(x,y){
    push();
  translate(x,y);
  translate(-288,-385);
  noFill();
  stroke(0);
 
  //rect(278, 365, 247, 90);
  strokeWeight(3);
  stroke(5);
  fill(250);
  beginShape();
  vertex(272, 409);
  vertex(374, 399);
  vertex(419, 400);
  vertex(455, 404);
  vertex(520, 426);
  vertex(389, 438);
  vertex(311, 424);
  vertex(274, 409);
  endShape();
  triangle(364, 423, 395, 343, 425, 425);
  triangle(274, 411, 336, 456, 393, 427);
  triangle(341, 456, 396, 427, 441, 456);
  triangle(396, 427, 443, 457, 517, 427);
  stroke(120);
  line(395, 350, 394, 455);
  
  pop();
}

function duckHitsDuckling(i) {
  return collideRectCircle(
    ducklingX[i],
    ducklingY[i],
    ducklingW,
    ducklingH,
    duckX,
    duckY,
    duckR * 2
  );
}

function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX > x;
    let isInRight = mouseX < x + w;
    let isInTop = mouseY > y;
    let isInBottom = mouseY < y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom;
}

function mousePressed() {
  if(clickToStart && mouseIsInRect(350, 450, 200, 75)) {
    clickToStart = false;
    loop();
  }
}

function drawText(){
    fill('pink');
    strokeWeight(2);
    stroke(0);
    rect(350,450,200,75);
    rect(250,300,400,100);
    fill(0);
    noStroke();
    textSize(20);
    text('CLICK TO START!',450,490)
    text("Instructions: Use arrow keys to move duck. \n" + 
    "Collect ducklings and avoid the boats!",450,350)
}