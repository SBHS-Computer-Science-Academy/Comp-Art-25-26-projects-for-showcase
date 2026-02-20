
let circleY = [];


let found1 = found2 = found3 = found4 = found5 = false;
let found6 = found7 = found8 = found9 = found10 = false;
let found11 = found12 = found13 = found14 = found15 = false;
let found16 = found17 = found18 = found19 = found20 = false;  

let level = 1;
let foundCount = 0;

let gameStart = "start";

function setup() {
  let myCanvas = createCanvas(800, 600);
  myCanvas.parent("myCanvas");
  
  createConsole("lines");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  
    for (let i = 0; i < 1000; i++) {
    circleY[i] = random(height);
  }
  
}

function draw() {
  background(220);
  
  if (gameStart === "start") {
    drawStartScreen();
    return;
  }
  
  if (level === 1) {
    drawEasy();
    push();
    translate(395, 0);
    drawEasy();
    translate(-395,0);
    drawEasy2();
    pop();
    
  } else if (level === 2) {
    drawMedium();
    push();
    translate(395, 0);
    drawMedium();
    translate(-395,0);
    drawMedium2();
    pop();
    
  } else if (level === 3) {
    drawHard();
    push();
    translate(395, 0);
    drawHard();
    translate(-395,0);
    drawHard2();
    pop();
  
  } else if (level === 4) {
      drawImpossible();
       push();
    translate(395, 0);
    drawImpossible();
    translate(-395,0);
    drawImpossible2();
    pop();
}

  
    
if (found1) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(712, 256, 80);
    circle(318, 256, 80);
}

if (found2) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(688, 437, 30);
    circle(292, 437, 30);
}

if (found3) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(474, 285, 40);
    circle(78, 285, 40);
}

if (found4) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(603, 330, 60);
    circle(207, 330, 60);
}

if (found5) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    ellipse(623, 530, 280, 70);
    ellipse(222, 528, 280, 70);
}
  

if (found6) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(603, 250, 30);
    circle(207, 250, 30);
}

if (found7) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(509, 290, 30);
    circle(112, 290, 30);
}

if (found8) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(532, 550, 20);
    circle(137, 550, 20);
}

if (found9) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(751, 458, 30);
    circle(358, 458, 30);
}

if (found10) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    ellipse(451, 403, 40, 20);
    ellipse(57, 403, 40, 20);
}

if (found11) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(718, 243, 20);
    circle(323, 243, 20);
} 

if (found12) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(678, 425, 20);
    circle(283, 425, 20);
} 

if (found13) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    ellipse(618, 383, 30, 90);
    ellipse(219, 383, 30, 90);
}

if (found14) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(526, 297, 20);
    circle(130, 297, 20);
}

if (found15) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(431, 577, 20);
    circle(34, 577, 20);
}

if (found16) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(743, 483, 20);
    circle(348, 483, 20);
} 

if (found17) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    ellipse(576, 518, 40, 20);
    ellipse(181, 518, 40, 20);
} 

if (found18) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(636, 201, 30);
    circle(241, 201, 30);
}

if (found19) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(512, 438, 10);
    circle(117, 438, 10);
}

if (found20) {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    circle(557, 447, 20);
    circle(162, 447, 20);
}
  
  
if (foundCount === 5) {
    level++;
    if (level > 4) rect(0,0, 1000, 1000);
    foundCount = 0;

    found1 = found2 = found3 = found4 = found5 = false;
    found6 = found7 = found8 = found9 = found10 = false;
    found11 = found12 = found13 = found14 = found15 = false;
    found16 = found17 = found18 = found19 = found20 = false;  

}

  
//   // Don't delete the following or the sketching code breaks
    
 
    drawBackground();
    
    
    
    //drawMouseLines("black");
}

function drawStartScreen(){
  fill(247, 184, 57);
  square(0, 0, 1000);
  
  textSize(70);
   fill(0);
    text('Spot the Difference', 400, 300);
    
    textSize(20);
    fill(255, 253, 250);
    text('Find all 5 differences on each level', 400, 360);
    text('Click the right box to find differences', 400, 390);
    
    fill (245, 244, 242);
    text('click anywhere to start', 400, 420);
}


function mousePressed(){
    
  if (gameStart === "start") {
    gameStart = "play";
    level = 1;
    foundCount = 0;
    return;
  }
    
 //   mouseX > X1 && mouseX < X2 &&
//  mouseY > Y1 && mouseY < Y2
 
/////// easy level 
  if (level === 1) {  
  if (
    !found1 &&
    mouseX > 679 && mouseX < 745 &&
    mouseY > 226 && mouseY < 287
  ) {
    found1 = true;
    foundCount++;
  }

  if (
    !found2 &&
    mouseX > 680 && mouseX < 695 &&
  mouseY > 432 && mouseY < 447
 ) {
    found2 = true;
    foundCount++;
  }

  if (
      !found3 &&
    mouseX > 460 && mouseX < 686 &&
  mouseY > 269 && mouseY < 292
 ) {
    found3 = true;
    foundCount++;
  }

  if (
    !found4 &&
    mouseX > 584 && mouseX < 616 &&
  mouseY > 312 && mouseY < 343
 ) {
    found4 = true;
    foundCount++;
  }

  if (
    !found5 &&
    mouseX > 483 && mouseX < 750 &&
  mouseY > 498 && mouseY < 552
 ) {
    found5 = true;
    foundCount++;
  }
  }
 
/////// medium level
if (level === 2) {
  if (
    !found6 &&
    mouseX > 592 && mouseX < 610 &&
  mouseY > 239 && mouseY < 262
 ) {
    found6 = true;
    foundCount++;
  }

  if (
    !found7 &&
    mouseX > 497 && mouseX < 517 &&
  mouseY > 280 && mouseY < 302
 ) {
    found7 = true;
    foundCount++;
  }
  
    if (
    !found8 &&
    mouseX > 523 && mouseX < 538 &&
  mouseY > 545 && mouseY < 558
 ) {
    found8 = true;
    foundCount++;
  }
  
      if (
    !found9 &&
    mouseX > 738 && mouseX < 764 &&
  mouseY > 445 && mouseY < 474
 ) {
    found9 = true;
    foundCount++;
  }

      if (
    !found10 &&
    mouseX > 437 && mouseX < 463 &&
  mouseY > 387 && mouseY < 418
 ) {
    found10 = true;
    foundCount++;
  }
}

/////// hard level

if (level === 3) {
      if (
    !found11 &&
    mouseX > 709 && mouseX < 729 &&
  mouseY > 234 && mouseY < 252
 ) {
    found11 = true;
    foundCount++;
  }
  
    if (
    !found12 &&
    mouseX > 673 && mouseX < 683 &&
  mouseY > 420 && mouseY < 431
 ) {
    found12 = true;
    foundCount++;
  }
  
    if (
    !found13 &&
    mouseX > 606 && mouseX < 629 &&
  mouseY > 338 && mouseY < 438
 ) {
    found13 = true;
    foundCount++;
  }
  
    if (
    !found14 &&
    mouseX > 518 && mouseX < 532 &&
  mouseY > 287 && mouseY < 301
 ) {
    found14 = true;
    foundCount++;
  }
  
    if (
    !found15 &&
    mouseX > 427 && mouseX < 436 &&
  mouseY > 572 && mouseY < 582
 ) {
    found15 = true;
    foundCount++;
}
}

///// impossible level

if (level === 4) {
      if (
    !found16 &&
    mouseX > 735 && mouseX < 746 &&
  mouseY > 477 && mouseY < 490
 ) {
    found16 = true;
    foundCount++;
  }
  
    if (
    !found17 &&
    mouseX > 557 && mouseX < 598 &&
  mouseY > 505 && mouseY < 527
 ) {
    found17 = true;
    foundCount++;
  }
  
    if (
    !found18 &&
    mouseX > 630 && mouseX < 640 &&
  mouseY > 193 && mouseY < 211
 ) {
    found18 = true;
    foundCount++;
  }
  
    if (
    !found19 &&
    mouseX > 510 && mouseX < 517 &&
  mouseY > 435 && mouseY < 443
 ) {
    found19 = true;
    foundCount++;
  }
  
    if (
    !found20 &&
    mouseX > 551 && mouseX < 564 &&
  mouseY > 438 && mouseY < 462
 ) {
    found20 = true;
    foundCount++;
}
}
}

function drawBackground(){
        push();
    stroke (0);
    strokeWeight(5);
    line (404, 160, 404, 600);
    line (396, 160, 396, 600);
    line (406, 160, 800, 160);
    line(394, 160, 0, 160);
    line(8, 163, 8, 592);
    line(792, 162, 792, 590); 
    line(10, 592, 790, 592);

    noStroke();
    fill (252, 186, 3);
    rect(0, 0, 800, 160);
    
    stroke (0);
    strokeWeight(5);
    line(0, 151, 800, 151);
    
    
    noStroke();
    fill(245, 211, 118)
    rect(0, 0, 800, 150); 
    
    
    stroke(252, 186, 3);
    strokeWeight(8);
    line (400, 160, 400, 600);
    line(796, 160, 796, 600);
    line(4, 160, 4, 600);
    line(0, 596, 800, 596);
    pop();
    
        noStroke();
    fill(252, 251, 247);
    rect(30, 30, 180, 90);
    
    fill (0);
    textSize(10);
    text('How to play:', 100, 45);
    text('Find all 5 differences on each level', 120, 70);
    text('Click the right box to find differences', 120, 90);
    
    fill (0);
    textSize(40);
    text('Spot the Difference', 400, 80);

    fill (242, 161, 12);
    textSize(20);
    if (level === 1) text('Level: Easy', 400, 120);
    if (level === 2) text('Level: Medium', 400, 120);
    if (level === 3) text('Level: Hard', 400, 120);
    if (level === 4) text('Level: Impossible', 400, 120);
    
    text(foundCount + "/5", 700, 120);
    
    fill('white')
        if (level > 4){
            
        fill(247, 193, 42);
        rect(0,0, 1000, 1000);
     
    fill (0);
    textSize(40);
    text('Congrats 🎉', 400, 270);  
    text('You have finished the game!', 400, 320);
    
    fill (230, 153, 2);
    textSize(20);
    text('refresh to restart', 400, 370);
}
}

function drawEasy() { 
        push();
    //background
      noStroke();
    fill(200, 204, 227); 
  beginShape(); 
  vertex(10, 163); 
  vertex(395, 162); 
  vertex(395, 589); 
  vertex(10, 590); 
  vertex(10, 162); 
  endShape(); 
  
  //wall stripes
  fill(186, 192, 224);
  beginShape(); 
  vertex(12, 577); 
  vertex(393, 576); 
  vertex(396, 576); 
  vertex(397, 591); 
  vertex(6, 591); 
  vertex(7, 576); 
  vertex(9, 577); 
  endShape(); 

beginShape();
  vertex(11, 553);
  vertex(392, 552);
  vertex(399, 552);
  vertex(399, 525);
  vertex(5, 527);
  vertex(6, 554);
  endShape();
  
 beginShape();
  vertex(9, 504);
  vertex(399, 504);
  vertex(397, 479);
  vertex(6, 478);
  vertex(5, 505);
  endShape();
  
  beginShape();
  vertex(9, 453);
  vertex(396, 450);
  vertex(395, 424);
  vertex(6, 424);
  vertex(4, 455);
  endShape();
  
  beginShape();
  vertex(8, 396);
  vertex(396, 401);
  vertex(396, 371);
  vertex(5, 368);
  vertex(5, 396);
  endShape();
  
  beginShape();
  vertex(8, 341);
  vertex(394, 344);
  vertex(395, 317);
  vertex(5, 313);
  vertex(2, 336);
  endShape();
  
   beginShape();
  vertex(9, 288);
  vertex(393, 289);
  vertex(399, 289);
  vertex(398, 259);
  vertex(6, 259);
  vertex(5, 291);
  endShape();
  
  beginShape();
  vertex(9, 231);
  vertex(392, 232);
  vertex(396, 232);
  vertex(396, 206);
  vertex(7, 205);
  vertex(8, 224);
  endShape();
  
  beginShape();
  vertex(10, 177);
  vertex(395, 178);
  vertex(394, 156);
  vertex(5, 157);
  vertex(6, 175);
  endShape();
  
    //table legs
    //1
    stroke(74, 61, 42);
    strokeWeight (3);
    line(351, 503, 146, 503); 
    line(146, 503, 88, 533); 
    
    
  noStroke();
  fill(92, 79, 60); 
  beginShape(); 
  vertex(84, 471); 
  vertex(84, 591); 
  vertex(89, 591); 
  vertex(89, 471); 
  endShape(); 
  
  fill(71, 59, 41); 
  beginShape(); 
  vertex(80, 471); 
  vertex(80, 591); 
  vertex(85, 591); 
  vertex(85, 471); 
  endShape(); 
  
  //2
  fill(92, 79, 60); 
  beginShape(); 
  vertex(144, 471); 
  vertex(144, 591); 
  vertex(149, 591); 
  vertex(149, 471); 
  endShape(); 
  
  fill(71, 59, 41); 
  beginShape(); 
  vertex(140, 471); 
  vertex(140, 591); 
  vertex(145, 591); 
  vertex(145, 471); 
  endShape(); 
  
    stroke(74, 61, 42);
    strokeWeight (3);
    line(84, 535, 323, 535); 

    stroke(74, 61, 42);
    strokeWeight (3);
    line(327, 533, 354, 500); 
  
  //3
  noStroke();
    fill(92, 79, 60); 
  beginShape(); 
  vertex(324, 471); 
  vertex(324, 591); 
  vertex(329, 591); 
  vertex(329, 471); 
  endShape(); 
  
  fill(71, 59, 41); 
  beginShape(); 
  vertex(320, 471); 
  vertex(320, 591); 
  vertex(325, 591); 
  vertex(325, 471); 
  endShape(); 
  
  //4
    fill(92, 79, 60); 
  beginShape(); 
  vertex(354, 441); 
  vertex(354, 591); 
  vertex(359, 591); 
  vertex(359, 441); 
  endShape(); 
  
  fill(71, 59, 41); 
  beginShape(); 
  vertex(350, 441); 
  vertex(350, 591); 
  vertex(355, 591); 
  vertex(355, 441); 
  endShape(); 
  
  
  //table
    noStroke();
  fill(92, 79, 60); 
  beginShape(); 
  vertex(77, 463); 
  vertex(331, 463); 
  vertex(331, 473); 
  vertex(74, 473); 
  vertex(74, 463); 
  vertex(331, 463); 
  endShape(); 
  
   beginShape(); 
  vertex(332, 473); 
  vertex(365, 437); 
  vertex(365, 426); 
  vertex(331, 447); 
  vertex(331, 473); 
  endShape(); 
  
  fill(71, 59, 41); 
  beginShape(); 
  vertex(74, 463); 
  vertex(140, 425); 
  vertex(365, 425); 
  vertex(331, 463); 
  vertex(74, 464); 
  endShape(); 
  
  stroke(71, 59, 41);
  strokeWeight(1);
  line(331, 463, 331, 470); 
  
  //lights
  stroke(63, 64, 71);
  strokeWeight(2);
  line(203, 176, 203, 263); 
  
  noStroke();
  fill(63, 64, 71); 
  beginShape(); 
  curveVertex(193, 164);  // control point 
  curveVertex(193, 164); 
  curveVertex(193, 169); 
  curveVertex(195, 173); 
  curveVertex(203, 175); 
  curveVertex(210, 172); 
  curveVertex(211, 166); 
  curveVertex(211, 162); 
  curveVertex(194, 161); 
  curveVertex(194, 161); // control point 
  endShape(); 
  
  beginShape();
  vertex(194, 162);
  vertex(193, 166);
  vertex(194, 172);
  vertex(196, 175);
  vertex(200, 178);
  vertex(203, 180);
  vertex(211, 174);
  vertex(213, 170);
  vertex(213, 166);
  vertex(211, 162);
  vertex(195, 163);
  endShape();
  
  beginShape();
  vertex(212, 162);
  vertex(213, 165);
  vertex(213, 171);
  vertex(211, 173);
  vertex(207, 177);
  vertex(202, 179);
  vertex(202, 172);
  vertex(208, 163);
  endShape();
  
  beginShape(); 
  vertex(211, 162); 
  vertex(212, 168); 
  vertex(209, 174); 
  vertex(204, 176); 
  vertex(197, 175); 
  vertex(195, 169); 
  vertex(203, 164); 
  endShape(); 
  
  fill(111, 111, 112); 
  beginShape(); 
  vertex(200, 263); 
  vertex(203, 257); 
  vertex(204, 258); 
  vertex(207, 264); 
  vertex(198, 264); 
  endShape(); 
  
    fill(63, 64, 71); 
  beginShape(); 
  vertex(196, 263); 
  vertex(210, 263); 
  vertex(208, 267); 
  vertex(198, 267); 
  vertex(196, 264); 
  endShape(); 
  
    fill(88, 88, 92);
  beginShape();
  vertex(192, 277);
  vertex(200, 274);
  vertex(209, 274);
  vertex(216, 276);
  vertex(207, 284);
  vertex(194, 280);
  endShape();
  
  fill(157, 157, 158); 
  beginShape(); 
  vertex(198, 267); 
  vertex(198, 278); 
  vertex(208, 278); 
  vertex(208, 267); 
  endShape(); 
  
  
  fill(245, 243, 140);
  beginShape();
  vertex(195, 320);
  vertex(194, 325);
  vertex(195, 331);
  vertex(200, 337);
  vertex(208, 339);
  vertex(215, 337);
  vertex(218, 330);
  vertex(218, 325);
  vertex(216, 319);
  vertex(211, 311);
  vertex(197, 314);
  vertex(197, 317);
  endShape();
  
  fill(63, 64, 71); 
  beginShape();
  vertex(191, 276);
  vertex(200, 278);
  vertex(209, 278);
  vertex(216, 275);
  vertex(217, 281);
  vertex(218, 286);
  vertex(227, 294);
  vertex(243, 305);
  vertex(247, 310);
  vertex(234, 314);
  vertex(210, 319);
  vertex(194, 320);
  vertex(180, 319);
  vertex(165, 315);
  vertex(167, 310);
  vertex(173, 304);
  vertex(189, 291);
  vertex(192, 286);
  vertex(192, 277);
  endShape();
  
  fill(63, 64, 71); 
  beginShape();
  vertex(187, 319);
  vertex(208, 320);
  vertex(227, 318);
  vertex(247, 314);
  vertex(246, 309);
  vertex(230, 301);
  vertex(195, 309);
  vertex(202, 315);
  endShape();
  
  fill("black");
  beginShape();
  vertex(201, 320);
  vertex(201, 327);
  vertex(204, 329);
  vertex(205, 326);
  vertex(206, 321);
  vertex(204, 321);
  vertex(204, 325);
  vertex(208, 330);
  vertex(210, 329);
  vertex(211, 324);
  vertex(210, 321);
  vertex(208, 322);
  vertex(208, 326);
  vertex(209, 329);
  endShape();
  
    stroke(0);
    strokeWeight(3);
    line(191, 334, 182, 341);
    line(208, 345, 208, 355);
    line(223, 332, 233, 338);
  
  //computer
    stroke(140, 140, 143);
    strokeWeight(3);
    line(190, 450, 253, 450);
    line(254, 450, 271, 437);
    line(272, 437, 270, 405);
  
  noStroke();
  fill(155, 155, 158);
  beginShape();
  vertex(190, 449);
  vertex(255, 449);
  vertex(272, 435);
  vertex(206, 435);
  vertex(189, 448);
  endShape();
  
  fill(125, 125, 130);
  beginShape();
  vertex(207, 434);
  vertex(207, 404);
  vertex(270, 404);
  vertex(271, 435);
  vertex(208, 435);
  endShape();
  
  fill(97, 98, 99);
  beginShape();
  vertex(208, 438);
  vertex(200, 445);
  vertex(246, 446);
  vertex(254, 439);
  vertex(208, 438);
  endShape();
  
  fill(97, 98, 99);
  beginShape();
  vertex(210, 410);
  vertex(210, 431);
  vertex(265, 431);
  vertex(265, 409);
  vertex(210, 409);
  endShape();
  
  //clock
    fill(0);
  circle(317, 256, 60);
  
  fill('white');
  circle(317, 256, 50);
  
  fill(237, 239, 240);
  beginShape();
  curveVertex(316, 252); // control point
  curveVertex(316, 252);
  curveVertex(314, 252);
  curveVertex(311, 254);
  curveVertex(311, 256);
  curveVertex(312, 258);
  curveVertex(315, 260);
  curveVertex(319, 259);
  curveVertex(320, 256);
  curveVertex(318, 253);
  curveVertex(318, 253); // control point
  endShape();
  
  stroke(0);
  strokeWeight(2);
line(315, 255, 330, 241);
line(314, 254, 322, 265);

//mug
noStroke();
    fill(197, 198, 199);
  beginShape();
  vertex(286, 430);
  vertex(290, 429);
  vertex(295, 430);
  vertex(297, 432);
  vertex(291, 436);
  vertex(287, 432);
  endShape();
  
  beginShape();
  vertex(286, 430);
  vertex(291, 428);
  vertex(295, 429);
  vertex(298, 432);
  vertex(292, 437);
  vertex(288, 432);
  endShape();
  
 fill(237, 239, 240);
  beginShape();
  vertex(285, 429);
  vertex(286, 441);
  vertex(290, 444);
  vertex(293, 444);
  vertex(297, 441);
  vertex(298, 431);
  vertex(293, 433);
  vertex(289, 432);
  vertex(286, 430);
  endShape();
  
    stroke(197, 198, 199);
  strokeWeight(2);
  line(296, 434, 298, 436);
  line(298, 437, 297, 441);
  line(297, 441, 293, 441);
  
  //shelfs
  noStroke();
  fill(84, 71, 69)
  beginShape();
  vertex(40, 300);
  vertex(143, 300);
  vertex(143, 306);
  vertex(40, 306);
  vertex(40, 300);
  endShape();

 fill(69, 56, 54);
  beginShape();
  vertex(40, 300);
  vertex(57, 295);
  vertex(153, 294);
  vertex(142, 301);
  vertex(40, 301);
  endShape();
  
  fill(84, 71, 69);
  beginShape();
  vertex(143, 306);
  vertex(153, 299);
  vertex(153, 294);
  vertex(143, 300);
  vertex(142, 304);
  endShape();
  
  stroke(69, 56, 54);
  strokeWeight(1);
  line(142, 301, 142, 305);
  
    noStroke();
  fill(84, 71, 69)
  beginShape();
  vertex(40, 250);
  vertex(143, 250);
  vertex(143, 256);
  vertex(40, 256);
  vertex(40, 250);
  endShape();

 fill(69, 56, 54);
  beginShape();
  vertex(40, 250);
  vertex(57, 245);
  vertex(153, 244);
  vertex(142, 251);
  vertex(40, 251);
  endShape();
  
  fill(84, 71, 69);
  beginShape();
  vertex(143, 256);
  vertex(153, 249);
  vertex(153, 244);
  vertex(143, 250);
  vertex(142, 254);
  endShape();
  
  stroke(69, 56, 54);
  strokeWeight(1);
  line(142, 251, 142, 255);
  
  //books
  noStroke();
  fill('white');
  beginShape();
  vertex(92, 211);
  vertex(97, 211);
  vertex(94, 218);
  vertex(93, 215);
  endShape();
  
  fill(38, 97, 29);
  beginShape();
  vertex(92, 212);
  vertex(95, 213);
  vertex(98, 211);
  vertex(98, 244);
  vertex(98, 247);
  vertex(95, 249);
  vertex(91, 247);
  vertex(91, 211);
  endShape();
  
  fill('white');
  beginShape();
  vertex(98, 211);
  vertex(103, 211);
  vertex(100, 218);
  vertex(99, 215);
  endShape();
  
  fill(70, 57, 82);
  beginShape();
  vertex(98, 212);
  vertex(101, 213);
  vertex(104, 211);
  vertex(104, 244);
  vertex(104, 247);
  vertex(101, 249);
  vertex(97, 247);
  vertex(97, 211);
  endShape();
  
    fill('white');
  beginShape();
  vertex(104, 211);
  vertex(109, 211);
  vertex(106, 218);
  vertex(105, 215);
  endShape();
  
  fill(240, 139, 24);
  beginShape();
  vertex(104, 212);
  vertex(107, 213);
  vertex(110, 211);
  vertex(110, 244);
  vertex(110, 247);
  vertex(107, 249);
  vertex(103, 247);
  vertex(103, 211);
  endShape();
  
      fill('white');
  beginShape();
  vertex(110, 211);
  vertex(115, 211);
  vertex(112, 218);
  vertex(111, 215);
  endShape();
  
  fill(153, 25, 11);
  beginShape();
  vertex(110, 212);
  vertex(113, 213);
  vertex(116, 211);
  vertex(116, 244);
  vertex(116, 247);
  vertex(113, 249);
  vertex(109, 247);
  vertex(109, 211);
  endShape();
  
    fill('white');
    beginShape();
  vertex(116, 211);
  vertex(121, 211);
  vertex(118, 218);
  vertex(117, 215);
  endShape();
  
  fill(16, 89, 158);
  beginShape();
  vertex(116, 212);
  vertex(119, 213);
  vertex(122, 211);
  vertex(122, 244);
  vertex(122, 247);
  vertex(119, 249);
  vertex(115, 247);
  vertex(115, 211);
  endShape();
  
  //plant
  fill(212, 212, 212);
  beginShape();
  vertex(67, 282);
  vertex(74, 281);
  vertex(82, 281);
  vertex(90, 282);
  vertex(91, 283);
  vertex(82, 290);
  vertex(67, 283);
  endShape();
  
  fill(87, 133, 70);
  beginShape();
  vertex(71, 282);
  vertex(73, 272);
  vertex(76, 270);
  vertex(81, 270);
  vertex(84, 272);
  vertex(86, 283);
  vertex(87, 288);
  vertex(72, 288);
  vertex(69, 285);
  endShape();
  
  fill(120, 140, 112);
  beginShape();
  vertex(78, 271);
  vertex(77, 277);
  vertex(77, 286);
  vertex(81, 286);
  vertex(80, 276);
  vertex(79, 272);
  endShape();
  
  fill(120, 140, 112);
  beginShape();
  vertex(74, 271);
  vertex(70, 275);
  vertex(69, 281);
  vertex(68, 284);
  vertex(71, 285);
  vertex(72, 278);
  vertex(74, 271);
  endShape();
  
   beginShape();
  vertex(85, 276);
  vertex(87, 286);
  vertex(90, 285);
  vertex(86, 277);
  endShape();
  
  beginShape();
  vertex(84, 273);
  vertex(86, 281);
  vertex(88, 287);
  vertex(89, 284);
  endShape();
  
  beginShape();
  vertex(83, 272);
  vertex(86, 275);
  vertex(89, 283);
  vertex(87, 287);
  vertex(87, 282);
  vertex(85, 277);
  vertex(83, 272);
  endShape();
  
  fill(237, 237, 237);
  beginShape();
  vertex(66, 281);
  vertex(70, 296);
  vertex(75, 298);
  vertex(82, 298);
  vertex(86, 297);
  vertex(92, 282);
  vertex(85, 285);
  vertex(78, 286);
  vertex(72, 285);
  vertex(65, 281);
  endShape();
  
  stroke(0)
  strokeWeight(1);
  line(83, 276, 86, 275);
  line(73, 275, 71, 273);
  line(78, 279, 80, 277);
  line(81, 272, 83, 270);
  line(77, 272, 75, 270);
  line(74, 280, 72, 277);
  line(84, 282, 85, 279);
  
pop();
}

function drawEasy2(){
    //lights
    noStroke();
  fill(186, 192, 224);
beginShape();
  vertex(516, 341);
  vertex(592, 342);
  vertex(582, 331);
  vertex(560, 323);
  vertex(514, 331);
  endShape();
  
  beginShape();
  vertex(578, 329);
  vertex(587, 329);
  vertex(591, 338);
  vertex(580, 338);
  vertex(578, 329);
  endShape();
  
  beginShape();
  vertex(617, 324);
  vertex(612, 339);
  vertex(643, 341);
  vertex(647, 333);
  vertex(623, 325);
  endShape();
  
  fill(200, 204, 227);
  beginShape();
  vertex(557, 342);
  vertex(624, 342);
  vertex(624, 361);
  vertex(548, 356);
  vertex(550, 345);
  endShape();
  
  beginShape();
  vertex(541, 342);
  vertex(585, 342);
  vertex(585, 346);
  vertex(541, 348);
  endShape();
  
  fill(108, 109, 115);
  beginShape();
  vertex(589, 320);
  vertex(602, 320);
  vertex(611, 319);
  vertex(613, 322);
  vertex(614, 327);
  vertex(612, 334);
  vertex(610, 337);
  vertex(604, 340);
  vertex(598, 339);
  vertex(594, 336);
  vertex(589, 331);
  vertex(588, 325);
  vertex(589, 321);
  vertex(590, 308);
  endShape();
  
 beginShape();
  vertex(589, 320);
  vertex(594, 320);
  vertex(609, 320);
  vertex(608, 330);
  vertex(592, 326);
  endShape();
  
  fill(63, 64, 71);
  beginShape();
  vertex(576, 317);
  vertex(588, 320);
  vertex(602, 321);
  vertex(622, 318);
  vertex(616, 308);
  vertex(578, 309);
  endShape();
  
  fill(186, 192, 224);
  beginShape();
  vertex(556, 343);
  vertex(589, 343);
  vertex(583, 334);
  vertex(555, 335);
  vertex(554, 339);
  endShape();
  
  beginShape();
  vertex(566, 342);
  vertex(467, 340);
  vertex(434, 319);
  vertex(556, 323);
  vertex(566, 335);
  endShape();
  
  fill(200, 204, 227);
  beginShape();
  vertex(517, 343);
  vertex(605, 343);
  vertex(589, 362);
  vertex(506, 355);
  vertex(503, 346);
  endShape();
  
  //clock
    fill('white');
  circle(712, 256, 50);
  
    stroke(0);
  strokeWeight(2);
  line(712, 253, 703, 270);
  line(714, 254, 706, 248);
  
  //table lines
    stroke(74, 61, 42);
    strokeWeight (3);
    line(480, 549, 716, 550);
    line(724, 548, 746, 519);
    line(544, 514, 715, 514);
    line(724, 514, 745, 514);
    line(535, 516, 484, 545);

    //mug
    noStroke();
    fill(71, 59, 41);
  beginShape();
  vertex(675, 428);
  vertex(668, 447);
  vertex(715, 446);
  vertex(713, 427);
  vertex(675, 427);
  endShape();
  
  //plant
  fill(186, 192, 224);
  beginShape();
  vertex(460, 280);
  vertex(466, 285);
  vertex(469, 286);
  vertex(474, 286);
  vertex(481, 285);
  vertex(492, 280);
  vertex(487, 267);
  vertex(453, 267);
  vertex(453, 272);
  endShape();
  
  fill(186, 185, 184);
  beginShape();
  vertex(462, 282);
  vertex(469, 281);
  vertex(479, 281);
  vertex(486, 282);
  vertex(480, 285);
  vertex(471, 286);
  vertex(465, 284);
  vertex(461, 283);
  endShape();
  
  fill(94, 112, 84);
  beginShape();
  vertex(473, 285);
  vertex(476, 274);
  vertex(477, 284);
  vertex(474, 286);
  endShape();
  
    beginShape();
  vertex(472, 285);
  vertex(471, 278);
  vertex(470, 285);
  vertex(472, 285);
  endShape();
  
  fill(148, 176, 135);
  beginShape();
  vertex(471, 285);
  vertex(473, 273);
  vertex(476, 284);
  vertex(476, 285);
  vertex(473, 286);
  vertex(470, 285);
  endShape();
  
  fill(126, 150, 114);
  beginShape();
  vertex(476, 285);
  vertex(478, 276);
  vertex(480, 283);
  vertex(479, 285);
  vertex(476, 285);
  endShape();
  
    beginShape();
  vertex(470, 284);
  vertex(469, 279);
  vertex(467, 284);
  vertex(468, 285);
  vertex(470, 285);
  endShape();
}

function drawMedium() {
    noStroke();
  fill(203, 238, 245);
  beginShape();
  vertex(11, 162);
  vertex(395, 162);
  vertex(395, 590);
  vertex(8, 590);
  vertex(9, 163);
  endShape();
  
  //ocean
  gradientHorizontal (color (130, 201, 207), color (40, 171, 184), 0, 325, 400, 420);
  
  
  //sand
  fill(250, 239, 182);
  beginShape();
  vertex(12, 410);
  vertex(394, 410);
  vertex(397, 429);
  vertex(397, 591);
  vertex(8, 592);
  vertex(6, 426);
  endShape();
  
  fill(247, 232, 153);
  beginShape();
  vertex(10, 411);
  vertex(44, 410);
  vertex(393, 410);
  vertex(393, 412);
  vertex(9, 413);
  vertex(9, 412);
  endShape();
  
  //star
 fill(217, 206, 147);
beginShape();
  vertex(48, 568);
  vertex(50, 570);
  vertex(58, 564);
  vertex(59, 573);
  vertex(61, 575);
  vertex(63, 566);
  vertex(67, 565);
  vertex(68, 562);
  vertex(65, 560);
  vertex(64, 555);
  vertex(63, 548);
  vertex(62, 548);
  vertex(60, 552);
  vertex(57, 556);
  vertex(52, 563);
  endShape();
  
  fill(234, 182, 250);
  beginShape();
  curveVertex(55, 555); // control point
  curveVertex(55, 555);
  curveVertex(57, 551);
  curveVertex(61, 548);
  curveVertex(62, 553);
  curveVertex(62, 557);
  curveVertex(66, 560);
  curveVertex(69, 562);
  curveVertex(68, 565);
  curveVertex(64, 564);
  curveVertex(61, 564);
  curveVertex(61, 567);
  curveVertex(60, 571);
  curveVertex(58, 572);
  curveVertex(56, 567);
  curveVertex(55, 564);
  curveVertex(51, 567);
  curveVertex(49, 569);
  curveVertex(47, 568);
  curveVertex(49, 561);
  curveVertex(50, 558);
  curveVertex(47, 553);
  curveVertex(48, 552);
  curveVertex(54, 554);
  curveVertex(54, 554); // control point
  endShape();
  
  stroke(210, 87, 247);
  strokeWeight(1);
  line(59, 572, 58, 561);
  line(48, 568, 56, 559);
  line(48, 552, 56, 558);
  line(61, 550, 58, 559);
  line(68, 563, 59, 559);
  
  //rock
  noStroke();
  fill(113, 117, 120);
  beginShape();
  vertex(298, 383);
  vertex(291, 384);
  vertex(275, 390);
  vertex(259, 397);
  vertex(254, 405);
  vertex(251, 412);
  vertex(249, 417);
  vertex(251, 422);
  vertex(254, 428);
  vertex(263, 435);
  vertex(282, 439);
  vertex(314, 438);
  vertex(336, 434);
  vertex(346, 422);
  vertex(347, 414);
  vertex(341, 403);
  vertex(333, 397);
  vertex(325, 390);
  vertex(314, 384);
  vertex(304, 383);
  vertex(297, 383);
  endShape();
  
//mermaid
    fill(15, 13, 12);
  beginShape();
  vertex(322, 355);
  vertex(316, 369);
  vertex(314, 382);
  vertex(314, 390);
  vertex(309, 396);
  vertex(295, 397);
  vertex(281, 396);
  vertex(266, 395);
  vertex(262, 399);
  vertex(268, 422);
  vertex(273, 425);
  vertex(280, 431);
  vertex(285, 439);
  vertex(286, 443);
  vertex(275, 442);
  vertex(270, 439);
  vertex(265, 431);
  vertex(263, 437);
  vertex(262, 443);
  vertex(253, 447);
  vertex(250, 447);
  vertex(250, 443);
  vertex(253, 433);
  vertex(257, 426);
  vertex(258, 423);
  vertex(257, 416);
  vertex(254, 410);
  vertex(251, 398);
  vertex(252, 386);
  vertex(258, 383);
  vertex(275, 381);
  vertex(286, 379);
  vertex(295, 375);
  vertex(301, 355);
  vertex(301, 343);
  vertex(297, 336);
  vertex(321, 335);
  vertex(328, 336);
  vertex(332, 342);
  vertex(331, 369);
  vertex(329, 383);
  vertex(328, 391);
  vertex(331, 397);
  vertex(332, 400);
  vertex(327, 399);
  vertex(323, 396);
  vertex(321, 390);
  vertex(322, 352);
  endShape();
  
  beginShape();
  vertex(300, 360);
  vertex(293, 371);
  vertex(288, 380);
  vertex(282, 381);
  vertex(299, 336);
  endShape();
  
  beginShape();
  vertex(297, 340);
  vertex(298, 337);
  vertex(305, 343);
  vertex(306, 359);
  vertex(300, 357);
  vertex(298, 348);
  endShape();
  
  beginShape();
  vertex(297, 342);
  vertex(293, 348);
  vertex(295, 336);
  vertex(291, 344);
  vertex(283, 347);
  vertex(288, 343);
  vertex(290, 335);
  vertex(286, 340);
  vertex(290, 326);
  vertex(292, 307);
  vertex(296, 297);
  vertex(305, 293);
  vertex(310, 294);
  vertex(315, 300);
  vertex(317, 306);
  vertex(318, 317);
  vertex(318, 324);
  vertex(321, 332);
  vertex(328, 336);
  vertex(328, 344);
  vertex(303, 344);
  endShape();
  
  fill(59, 60, 61);
  beginShape();
  vertex(305, 294);
  vertex(310, 294);
  vertex(314, 296);
  vertex(317, 304);
  vertex(317, 315);
  vertex(319, 328);
  vertex(324, 334);
  vertex(329, 339);
  vertex(331, 344);
  vertex(330, 370);
  vertex(327, 390);
  vertex(333, 401);
  vertex(328, 397);
  vertex(324, 389);
  vertex(327, 370);
  vertex(327, 344);
  vertex(317, 332);
  vertex(315, 328);
  vertex(312, 305);
  vertex(311, 297);
  vertex(302, 295);
  endShape();
  
  //sun
    fill(245, 190, 51)
  beginShape();
  vertex(87, 205);
  vertex(98, 204);
  vertex(98, 214);
  vertex(107, 221);
  vertex(103, 229);
  vertex(107, 241);
  vertex(98, 246);
  vertex(95, 258);
  vertex(83, 257);
  vertex(77, 263);
  vertex(70, 257);
  vertex(58, 257);
  vertex(57, 249);
  vertex(46, 243);
  vertex(50, 236);
  vertex(42, 223);
  vertex(51, 217);
  vertex(52, 203);
  vertex(63, 207);
  vertex(68, 197);
  vertex(77, 203);
  vertex(87, 197);
  vertex(90, 206);
  endShape();
  
  fill(247, 232, 64)
  circle(76,230, 50);
  
  //palm tree
  fill(150, 131, 114);
  beginShape();
  vertex(41, 431);
  vertex(45, 436);
  vertex(53, 439);
  vertex(61, 440);
  vertex(74, 438);
  vertex(68, 368);
  vertex(71, 351);
  vertex(78, 333);
  vertex(86, 321);
  vertex(97, 307);
  vertex(107, 303);
  vertex(113, 301);
  vertex(112, 290);
  vertex(110, 288);
  vertex(100, 291);
  vertex(89, 297);
  vertex(78, 306);
  vertex(66, 322);
  vertex(56, 343);
  vertex(51, 359);
  vertex(46, 381);
  vertex(41, 431);
  endShape();
  
  fill(140, 111, 86);
  beginShape();
  vertex(44, 407);
  vertex(51, 411);
  vertex(68, 414);
  vertex(77, 413);
  vertex(70, 395);
  vertex(45, 388);
  vertex(38, 401);
  vertex(45, 408);
  endShape();
  
  beginShape();
  vertex(51, 361);
  vertex(43, 378);
  vertex(49, 383);
  vertex(58, 386);
  vertex(73, 387);
  vertex(68, 364);
  vertex(53, 362);
  endShape();
  
  beginShape();
  vertex(63, 331);
  vertex(57, 338);
  vertex(50, 349);
  vertex(75, 357);
  vertex(75, 334);
  vertex(67, 329);
  endShape();
  
  beginShape();
  vertex(80, 305);
  vertex(65, 314);
  vertex(73, 320);
  vertex(85, 334);
  vertex(89, 321);
  vertex(92, 314);
  vertex(94, 309);
  vertex(81, 304);
  endShape();
  
  beginShape();
  vertex(109, 288);
  vertex(95, 289);
  vertex(89, 288);
  vertex(101, 311);
  vertex(106, 303);
  vertex(113, 299);
  vertex(110, 288);
  endShape();
  
  beginShape();
  vertex(43, 425);
  vertex(42, 431);
  vertex(45, 435);
  vertex(55, 438);
  vertex(62, 439);
  vertex(74, 437);
  vertex(73, 426);
  vertex(64, 420);
  vertex(44, 422);
  endShape();
  
  fill(150, 131, 114);
  beginShape();
  vertex(43, 408);
  vertex(40, 422);
  vertex(39, 424);
  vertex(76, 428);
  vertex(72, 414);
  vertex(61, 413);
  vertex(50, 409);
  vertex(44, 407);
  endShape();
  
  beginShape();
  vertex(46, 382);
  vertex(42, 388);
  vertex(47, 393);
  vertex(54, 396);
  vertex(66, 398);
  vertex(73, 398);
  vertex(69, 388);
  vertex(63, 388);
  vertex(52, 385);
  vertex(48, 382);
  endShape();
  
  beginShape();
  vertex(53, 351);
  vertex(46, 362);
  vertex(53, 365);
  vertex(62, 368);
  vertex(71, 368);
  vertex(70, 356);
  vertex(54, 351);
  endShape();
  
beginShape();
  vertex(69, 318);
  vertex(59, 329);
  vertex(56, 331);
  vertex(78, 343);
  vertex(80, 328);
  vertex(69, 319);
  endShape();
  
  beginShape();
  vertex(91, 298);
  vertex(74, 304);
  vertex(92, 321);
  vertex(97, 305);
  vertex(93, 301);
  endShape();
  
  fill(156, 204, 151);
  beginShape();
  vertex(111, 290);
  vertex(97, 279);
  vertex(87, 277);
  vertex(70, 277);
  vertex(60, 282);
  vertex(53, 290);
  vertex(52, 286);
  vertex(59, 268);
  vertex(66, 261);
  vertex(81, 255);
  vertex(99, 256);
  vertex(112, 265);
  vertex(117, 275);
  vertex(112, 292);
  endShape();
  
  beginShape();
  vertex(114, 297);
  vertex(118, 298);
  vertex(124, 304);
  vertex(126, 311);
  vertex(124, 319);
  vertex(113, 327);
  vertex(102, 327);
  vertex(102, 329);
  vertex(107, 334);
  vertex(116, 336);
  vertex(132, 331);
  vertex(144, 320);
  vertex(146, 306);
  vertex(140, 298);
  vertex(130, 293);
  vertex(112, 292);
  vertex(113, 297);
  endShape();
  
  fill(135, 179, 130);
  beginShape();
  vertex(112, 288);
  vertex(118, 281);
  vertex(121, 266);
  vertex(119, 254);
  vertex(112, 246);
  vertex(103, 243);
  vertex(101, 240);
  vertex(113, 238);
  vertex(129, 244);
  vertex(136, 253);
  vertex(139, 265);
  vertex(136, 276);
  vertex(129, 285);
  vertex(117, 290);
  vertex(112, 291);
  vertex(111, 289);
  endShape();
  
  beginShape();
  vertex(112, 291);
  vertex(131, 286);
  vertex(145, 288);
  vertex(157, 294);
  vertex(163, 302);
  vertex(164, 309);
  vertex(161, 318);
  vertex(154, 323);
  vertex(151, 324);
  vertex(154, 316);
  vertex(149, 306);
  vertex(144, 301);
  vertex(130, 296);
  vertex(125, 294);
  vertex(112, 293);
  vertex(112, 292);
  endShape();
  
  fill(106, 148, 101);
  beginShape();
  curveVertex(113, 287); // control point
  curveVertex(113, 287);
  curveVertex(110, 277);
  curveVertex(101, 268);
  curveVertex(91, 263);
  curveVertex(79, 263);
  curveVertex(65, 269);
  curveVertex(56, 279);
  curveVertex(53, 288);
  curveVertex(59, 277);
  curveVertex(68, 270);
  curveVertex(79, 266);
  curveVertex(90, 266);
  curveVertex(103, 272);
  curveVertex(109, 279);
  curveVertex(113, 290);
  curveVertex(113, 290); // control point
  endShape();
  
  beginShape();
  curveVertex(114, 291); // control point
  curveVertex(114, 291);
  curveVertex(125, 283);
  curveVertex(132, 273);
  curveVertex(133, 263);
  curveVertex(130, 254);
  curveVertex(120, 245);
  curveVertex(103, 240);
  curveVertex(120, 244);
  curveVertex(132, 254);
  curveVertex(134, 264);
  curveVertex(131, 276);
  curveVertex(125, 285);
  curveVertex(112, 291);
  curveVertex(112, 291); // control point
  endShape();
  
  beginShape();
  curveVertex(113, 293); // control point
  curveVertex(113, 293);
  curveVertex(131, 291);
  curveVertex(144, 293);
  curveVertex(155, 298);
  curveVertex(160, 305);
  curveVertex(161, 311);
  curveVertex(159, 318);
  curveVertex(152, 323);
  curveVertex(158, 317);
  curveVertex(159, 311);
  curveVertex(159, 305);
  curveVertex(153, 298);
  curveVertex(141, 293);
  curveVertex(112, 294);
  curveVertex(112, 294); // control point
  endShape();
  
  beginShape();
  curveVertex(114, 295); // control point
  curveVertex(114, 295);
  curveVertex(125, 298);
  curveVertex(135, 304);
  curveVertex(137, 309);
  curveVertex(137, 315);
  curveVertex(133, 323);
  curveVertex(123, 329);
  curveVertex(108, 331);
  curveVertex(101, 328);
  curveVertex(109, 332);
  curveVertex(122, 331);
  curveVertex(130, 327);
  curveVertex(135, 323);
  curveVertex(138, 316);
  curveVertex(138, 308);
  curveVertex(136, 303);
  curveVertex(133, 301);
  curveVertex(123, 296);
  curveVertex(114, 296);
  curveVertex(114, 296); // control point
  endShape();
  
  fill(102, 85, 70);
  circle(113, 298, 10);
  
    fill(107, 84, 66);
  circle(109, 290, 10);
  
      fill(130, 107, 88);
  circle(116, 291, 10);
  
  //sand over tree
   fill(230, 202, 99);
  beginShape();
  vertex(30, 429);
  vertex(43, 432);
  vertex(47, 431);
  vertex(70, 437);
  vertex(77, 434);
  vertex(87, 436);
  vertex(92, 439);
  vertex(91, 442);
  vertex(80, 443);
  vertex(74, 446);
  vertex(61, 447);
  vertex(50, 443);
  vertex(43, 439);
  vertex(36, 439);
  vertex(31, 437);
  vertex(27, 431);
  vertex(28, 427);
  endShape();
  
  //shadow
  fill(217, 203, 145);
  beginShape();
  vertex(340, 431);
  vertex(343, 434);
  vertex(340, 437);
  vertex(333, 439);
  vertex(325, 444);
  vertex(319, 444);
  vertex(309, 444);
  vertex(301, 445);
  vertex(290, 445);
  vertex(289, 445);
  vertex(287, 446);
  vertex(278, 446);
  vertex(272, 444);
  vertex(266, 444);
  vertex(261, 443);
  vertex(263, 440);
  vertex(264, 436);
  vertex(268, 436);
  vertex(272, 441);
  vertex(288, 443);
  vertex(286, 440);
  vertex(285, 439);
  vertex(299, 439);
  vertex(311, 438);
  vertex(327, 436);
  vertex(338, 434);
  vertex(340, 431);
  endShape();
  
  //shadow
  fill(25, 24, 26, 20);
  beginShape();
  vertex(265, 281);
  vertex(232, 409);
  vertex(243, 417);
  vertex(263, 424);
  vertex(310, 425);
  vertex(346, 421);
  vertex(352, 418);
  vertex(324, 274);
  vertex(269, 267);
  vertex(268, 272);
  endShape();
  
  //umbrella
  stroke(0);
  strokeWeight(1);
  line(284, 378, 287, 285);
  
  noStroke();

  fill(160, 72, 247);
  beginShape();
  curveVertex(287, 285); // control point
  curveVertex(287, 285);
  curveVertex(291, 281);
  curveVertex(297, 280);
  curveVertex(306, 281);
  curveVertex(310, 287);
  curveVertex(314, 281);
  curveVertex(319, 279);
  curveVertex(325, 279);
  curveVertex(329, 281);
  curveVertex(332, 287);
  curveVertex(333, 280);
  curveVertex(328, 265);
  curveVertex(322, 257);
  curveVertex(314, 251);
  curveVertex(302, 247);
  curveVertex(293, 244);
  curveVertex(280, 245);
  curveVertex(268, 253);
  curveVertex(261, 259);
  curveVertex(256, 268);
  curveVertex(253, 278);
  curveVertex(252, 286);
  curveVertex(254, 282);
  curveVertex(259, 278);
  curveVertex(265, 279);
  curveVertex(269, 285);
  curveVertex(271, 280);
  curveVertex(276, 277);
  curveVertex(283, 279);
  curveVertex(288, 285);
  curveVertex(288, 285); // control point
  endShape();
  
  beginShape();
  vertex(324, 259);
  vertex(256, 269);
  vertex(262, 257);
  vertex(266, 253);
  vertex(273, 248);
  vertex(280, 245);
  vertex(304, 246);
  vertex(315, 250);
  vertex(323, 256);
  vertex(330, 266);
  vertex(334, 283);
  vertex(307, 266);
  vertex(265, 266);
  endShape();
  
  fill(127, 10, 242);
  beginShape();
  vertex(269, 282);
  vertex(270, 273);
  vertex(272, 266);
  vertex(276, 257);
  vertex(284, 250);
  vertex(293, 245);
  vertex(277, 257);
  vertex(271, 270);
  vertex(269, 282);
  endShape();
  
  beginShape();
  vertex(292, 245);
  vertex(285, 264);
  vertex(285, 273);
  vertex(287, 282);
  vertex(286, 272);
  vertex(287, 262);
  vertex(292, 245);
  endShape();
  
  beginShape();
  vertex(294, 246);
  vertex(304, 253);
  vertex(309, 264);
  vertex(311, 272);
  vertex(310, 286);
  vertex(309, 269);
  vertex(306, 260);
  vertex(303, 255);
  vertex(294, 247);
  endShape();
  
  //boat
  fill(105, 85, 50);
  beginShape();
  vertex(166, 321);
  vertex(171, 327);
  vertex(182, 333);
  vertex(200, 335);
  vertex(219, 333);
  vertex(228, 327);
  vertex(234, 320);
  vertex(223, 323);
  vertex(203, 324);
  vertex(180, 324);
  vertex(170, 322);
  vertex(164, 319);
  endShape();
  
  stroke(0);
  line(200, 324, 199, 250);
  
  noStroke();
  fill(245, 241, 235);
  beginShape();
  vertex(198, 256);
  vertex(186, 269);
  vertex(180, 280);
  vertex(177, 293);
  vertex(176, 304);
  vertex(176, 316);
  vertex(199, 316);
  vertex(198, 256);
  endShape();
  
  beginShape();
  vertex(200, 259);
  vertex(203, 267);
  vertex(204, 275);
  vertex(205, 290);
  vertex(205, 301);
  vertex(201, 316);
  vertex(223, 315);
  vertex(206, 266);
  vertex(202, 260);
  vertex(200, 260);
  endShape();
  
  fill(212, 25, 8);
  beginShape();
  vertex(200, 250);
  vertex(203, 248);
  vertex(209, 249);
  vertex(211, 251);
  vertex(215, 251);
  vertex(218, 249);
  vertex(218, 253);
  vertex(214, 255);
  vertex(208, 255);
  vertex(205, 252);
  vertex(199, 255);
  vertex(200, 251);
  endShape();
  
  //star
  fill(227, 219, 179);
  beginShape();
  vertex(348, 469);
  vertex(351, 469);
  vertex(358, 464);
  vertex(359, 473);
  vertex(361, 473);
  vertex(362, 466);
  vertex(365, 466);
  vertex(368, 463);
  vertex(366, 461);
  vertex(364, 457);
  vertex(363, 451);
  vertex(360, 450);
  vertex(354, 461);
  vertex(351, 465);
  endShape();
  
    fill(237, 200, 78);
  beginShape();
  curveVertex(355, 455); // control point
  curveVertex(355, 455);
  curveVertex(357, 451);
  curveVertex(361, 448);
  curveVertex(362, 453);
  curveVertex(362, 457);
  curveVertex(366, 460);
  curveVertex(369, 462);
  curveVertex(368, 465);
  curveVertex(364, 464);
  curveVertex(361, 464);
  curveVertex(361, 467);
  curveVertex(360, 471);
  curveVertex(358, 472);
  curveVertex(356, 467);
  curveVertex(355, 464);
  curveVertex(351, 467);
  curveVertex(349, 469);
  curveVertex(347, 468);
  curveVertex(349, 461);
  curveVertex(350, 458);
  curveVertex(347, 453);
  curveVertex(348, 452);
  curveVertex(354, 454);
  curveVertex(354, 454); // control point
  endShape();
  
  stroke(232, 177, 2);
  strokeWeight(1);
  line(359, 472, 358, 461);
  line(348, 468, 356, 459);
  line(348, 452, 356, 458);
  line(361, 450, 358, 459);
  line(368, 463, 359, 459);
  
  //sandcastle
  noStroke();
  
  fill(217, 206, 147);
  beginShape();
  vertex(101, 515);
  vertex(94, 522);
  vertex(98, 530);
  vertex(112, 533);
  vertex(122, 544);
  vertex(140, 549);
  vertex(162, 538);
  vertex(170, 538);
  vertex(181, 528);
  vertex(176, 519);
  vertex(105, 515);
  endShape();
  
    beginShape();
  vertex(134, 548);
  vertex(134, 555);
  vertex(144, 555);
  vertex(145, 550);
  vertex(137, 550);
  vertex(139, 544);
  vertex(133, 540);
  vertex(133, 546);
  endShape();
  
  fill(222, 203, 146);
  beginShape();
  vertex(158, 492);
  vertex(158, 481);
  vertex(162, 481);
  vertex(163, 486);
  vertex(166, 487);
  vertex(169, 487);
  vertex(171, 481);
  vertex(175, 481);
  vertex(175, 515);
  vertex(175, 524);
  vertex(171, 529);
  vertex(165, 529);
  vertex(158, 527);
  vertex(157, 495);
  endShape();
  
  beginShape();
  vertex(119, 493);
  vertex(118, 483);
  vertex(115, 483);
  vertex(114, 488);
  vertex(113, 488);
  vertex(110, 489);
  vertex(107, 487);
  vertex(107, 483);
  vertex(101, 483);
  vertex(101, 522);
  vertex(103, 523);
  vertex(108, 525);
  vertex(113, 524);
  vertex(118, 521);
  vertex(119, 521);
  vertex(119, 496);
  endShape();
  
  beginShape();
  vertex(122, 495);
  vertex(122, 467);
  vertex(127, 467);
  vertex(127, 471);
  vertex(131, 474);
  vertex(135, 473);
  vertex(135, 466);
  vertex(139, 466);
  vertex(140, 470);
  vertex(144, 474);
  vertex(148, 471);
  vertex(148, 467);
  vertex(153, 467);
  vertex(154, 502);
  vertex(122, 501);
  endShape();
  
  fill(209, 184, 109);
  beginShape();
  vertex(116, 492);
  vertex(116, 521);
  vertex(120, 526);
  vertex(131, 531);
  vertex(150, 531);
  vertex(160, 526);
  vertex(162, 492);
  vertex(153, 492);
  vertex(152, 497);
  vertex(147, 498);
  vertex(142, 497);
  vertex(142, 493);
  vertex(133, 493);
  vertex(132, 496);
  vertex(126, 497);
  vertex(124, 495);
  vertex(124, 492);
  vertex(115, 492);
  endShape();
  
  beginShape();
  vertex(126, 470);
  vertex(126, 450);
  vertex(147, 450);
  vertex(147, 475);
  vertex(127, 476);
  endShape();
  
  fill(214, 194, 135);
beginShape();
  vertex(124, 452);
  vertex(136, 436);
  vertex(150, 453);
  vertex(143, 455);
  vertex(133, 456);
  vertex(124, 454);
  vertex(122, 453);
  endShape();
  
  fill(61, 47, 4);
  beginShape();
  vertex(164, 512);
  vertex(165, 505);
  vertex(168, 503);
  vertex(170, 505);
  vertex(171, 514);
  vertex(164, 514);
  endShape();
  
  beginShape();
  vertex(107, 511);
  vertex(107, 504);
  vertex(108, 501);
  vertex(111, 501);
  vertex(112, 513);
  vertex(107, 512);
  endShape();
  
  beginShape();
  vertex(133, 531);
  vertex(133, 518);
  vertex(135, 515);
  vertex(141, 515);
  vertex(144, 519);
  vertex(144, 530);
  vertex(139, 531);
  vertex(133, 530);
  endShape();
  
  beginShape();
  vertex(129, 490);
  vertex(129, 482);
  vertex(131, 480);
  vertex(134, 482);
  vertex(134, 491);
  vertex(129, 491);
  endShape();
  
   beginShape();
  vertex(140, 490);
  vertex(140, 483);
  vertex(141, 480);
  vertex(144, 481);
  vertex(145, 489);
  vertex(140, 490);
  endShape();
  
  beginShape();
  vertex(135, 469);
  vertex(135, 462);
  vertex(137, 460);
  vertex(139, 462);
  vertex(140, 470);
  vertex(135, 470);
  endShape();
  
  stroke(0);
  line(136, 436, 134, 430);
  
  noStroke();
  fill(222, 79, 18);
  beginShape();
  vertex(134, 429);
  vertex(142, 427);
  vertex(143, 425);
  vertex(146, 432);
  vertex(145, 433);
  vertex(141, 433);
  vertex(139, 433);
  vertex(136, 435);
  vertex(134, 430);
  endShape();
  
  //bucket
  fill(217, 206, 147);
  beginShape();
  vertex(201, 515);
  vertex(200, 523);
  vertex(207, 526);
  vertex(220, 526);
  vertex(230, 523);
  vertex(233, 520);
  vertex(219, 511);
  vertex(213, 506);
  vertex(201, 510);
  vertex(201, 513);
  endShape();
  
  beginShape();
  vertex(219, 524);
  vertex(225, 527);
  vertex(220, 528);
  vertex(223, 532);
  vertex(233, 527);
  vertex(231, 523);
  vertex(226, 525);
  vertex(222, 521);
  vertex(217, 523);
  endShape();
  
  fill(115, 115, 112);
  beginShape();
  vertex(227, 478);
  vertex(215, 475);
  vertex(201, 475);
  vertex(193, 476);
  vertex(188, 477);
  vertex(197, 487);
  vertex(212, 485);
  vertex(224, 480);
  endShape();
  
  fill(138, 165, 212);
  beginShape();
  vertex(212, 481);
  vertex(216, 467);
  vertex(213, 465);
  vertex(215, 458);
  vertex(224, 463);
  vertex(221, 469);
  vertex(218, 468);
  vertex(214, 482);
  vertex(214, 490);
  vertex(205, 488);
  vertex(209, 486);
  endShape();
  
  fill(153, 153, 150);
  beginShape();
  vertex(195, 511);
  vertex(199, 514);
  vertex(205, 515);
  vertex(215, 514);
  vertex(219, 510);
  vertex(228, 477);
  vertex(218, 482);
  vertex(204, 483);
  vertex(192, 480);
  vertex(188, 477);
  vertex(193, 510);
  endShape();
  
  fill(176, 176, 174);
  beginShape();
  vertex(228, 496);
  vertex(225, 487);
  vertex(224, 492);
  vertex(226, 497);
  endShape();
  
  fill(199, 199, 195);
  beginShape();
  vertex(204, 484);
  vertex(213, 492);
  vertex(219, 497);
  vertex(227, 500);
  vertex(229, 498);
  vertex(229, 496);
  vertex(226, 496);
  vertex(220, 493);
  vertex(212, 487);
  vertex(209, 484);
  vertex(205, 483);
  endShape();
  
  //beachball
  
    fill(217, 206, 147);
  beginShape();
  vertex(291, 563);
  vertex(291, 567);
  vertex(295, 576);
  vertex(303, 582);
  vertex(314, 584);
  vertex(321, 582);
  vertex(328, 578);
  vertex(333, 571);
  vertex(334, 563);
  vertex(332, 558);
  vertex(327, 552);
  vertex(320, 549);
  vertex(293, 559);
  endShape();
  
  fill(252, 159, 220);
  circle(300, 532, 60);
  
  fill(245, 217, 108);
  beginShape();
  curveVertex(311, 505); // control point
  curveVertex(311, 505);
  curveVertex(300, 511);
  curveVertex(293, 517);
  curveVertex(288, 531);
  curveVertex(286, 548);
  curveVertex(287, 558);
  curveVertex(283, 553);
  curveVertex(280, 539);
  curveVertex(280, 529);
  curveVertex(284, 518);
  curveVertex(291, 512);
  curveVertex(311, 505);
  curveVertex(311, 505); // control point
  endShape();
  
  beginShape();
  curveVertex(304, 505); // control point
  curveVertex(304, 505);
  curveVertex(309, 514);
  curveVertex(313, 526);
  curveVertex(314, 536);
  curveVertex(309, 553);
  curveVertex(304, 562);
  curveVertex(315, 554);
  curveVertex(321, 540);
  curveVertex(320, 523);
  curveVertex(316, 515);
  curveVertex(304, 504);
  curveVertex(304, 504); // control point
  endShape();
  
  fill(148, 195, 242);
  beginShape();
  vertex(305, 505);
  vertex(294, 517);
  vertex(287, 530);
  vertex(286, 535);
  vertex(286, 545);
  vertex(288, 559);
  vertex(296, 562);
  vertex(303, 562);
  vertex(312, 546);
  vertex(315, 536);
  vertex(314, 526);
  vertex(311, 520);
  vertex(304, 505);
  endShape();
  
  beginShape();
  curveVertex(305, 504); // control point
  curveVertex(305, 504);
  curveVertex(298, 509);
  curveVertex(292, 516);
  curveVertex(287, 527);
  curveVertex(286, 534);
  curveVertex(292, 556);
  curveVertex(301, 560);
  curveVertex(305, 560);
  curveVertex(310, 550);
  curveVertex(314, 539);
  curveVertex(313, 524);
  curveVertex(308, 510);
  curveVertex(304, 503);
  curveVertex(304, 503); // control point
  endShape();
  
  fill(228, 236, 240);
  beginShape();
  curveVertex(296, 503); // control point
  curveVertex(296, 503);
  curveVertex(299, 506);
  curveVertex(302, 507);
  curveVertex(309, 506);
  curveVertex(310, 503);
  curveVertex(302, 501);
  curveVertex(295, 502);
  curveVertex(295, 502); // control point
  endShape();
  
  //birds
  stroke(0);
  line(260, 198, 263, 196);
  line(263, 196, 267, 197);
  line(267, 197, 271, 199);
  line(271, 199, 274, 203);
  line(274, 203, 276, 198);
  line(276, 198, 278, 195);
  line(278, 195, 281, 193);
  line(281, 193, 284, 193);
  
  line(286, 199, 288, 198);
  line(288, 198, 290, 199);
  line(290, 199, 294, 202);
  line(294, 202, 294, 198);
  line(294, 198, 294, 195);
  line(294, 195, 296, 194);
  line(296, 194, 297, 194);


  
  noStroke();

}

function drawMedium2() {
    //coconut
  fill(140, 111, 86);
  beginShape();
  vertex(503, 302);
  vertex(512, 297);
  vertex(507, 296);
  vertex(507, 295);
  vertex(501, 296);
  vertex(496, 301);
  vertex(499, 304);
  endShape();
  
  fill(203, 238, 245);
  beginShape();
  vertex(503, 303);
  vertex(512, 297);
  vertex(514, 299);
  vertex(511, 304);
  vertex(501, 305);
  endShape();
  
  //flag
  fill(245, 144, 66);
  beginShape();
  vertex(594, 253);
  vertex(595, 249);
  vertex(599, 248);
  vertex(604, 248);
  vertex(606, 250);
  vertex(609, 250);
  vertex(613, 248);
  vertex(613, 253);
  vertex(610, 255);
  vertex(603, 255);
  vertex(600, 252);
  vertex(595, 255);
  endShape();
  
  //palm tree
  fill(150, 131, 114);
  beginShape();
  vertex(439, 391);
  vertex(434, 401);
  vertex(438, 405);
  vertex(444, 408);
  vertex(455, 412);
  vertex(462, 413);
  vertex(472, 413);
  vertex(466, 399);
  vertex(461, 399);
  vertex(455, 398);
  vertex(450, 397);
  vertex(442, 394);
  vertex(439, 391);
  endShape();
  
  //star
  fill(237, 200, 78);
  beginShape();
  vertex(751, 461);
  vertex(752, 467);
  vertex(754, 471);
  vertex(754, 463);
  vertex(755, 461);
  vertex(763, 463);
  vertex(754, 459);
  vertex(756, 449);
  vertex(754, 450);
  vertex(751, 456);
  vertex(746, 453);
  vertex(743, 452);
  vertex(743, 453);
  vertex(745, 456);
  vertex(745, 458);
  vertex(744, 463);
  vertex(743, 467);
  vertex(743, 468);
  vertex(743, 468);
  vertex(744, 468);
  vertex(746, 466);
  vertex(750, 461);
  endShape();
  
  beginShape();
  vertex(754, 457);
  vertex(762, 462);
  vertex(751, 461);
  vertex(755, 449);
  vertex(755, 449);
  vertex(756, 450);
  vertex(756, 459);
  endShape();
  
  //sand castle
  fill(250, 239, 182);
  beginShape();
  vertex(526, 548);
  vertex(531, 548);
  vertex(542, 547);
  vertex(548, 544);
  vertex(547, 554);
  vertex(534, 556);
  vertex(524, 553);
  vertex(525, 550);
  endShape();
}

function drawHard() {
    
      gradientHorizontal (color (9, 12, 64), color (50, 54, 115), 0, 105, 400, 500);
  
    //stars
      fill('white');
  for (let i = 1; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 2);
    
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
}
  
    //grass
        noStroke();
  fill(3, 56, 17);
  beginShape();
  vertex(10, 490);
  vertex(398, 490);
  vertex(398, 594);
  vertex(2, 594);
  vertex(5, 491);
  endShape();
  
    //smoke
  fill(49, 49, 87);
  beginShape();
  curveVertex(222, 438); // control point
  curveVertex(222, 438);
  curveVertex(212, 434);
  curveVertex(212, 427);
  curveVertex(216, 417);
  curveVertex(220, 406);
  curveVertex(212, 395);
  curveVertex(210, 384);
  curveVertex(215, 372);
  curveVertex(219, 364);
  curveVertex(219, 354);
  curveVertex(215, 345);
  curveVertex(213, 333);
  curveVertex(217, 320);
  curveVertex(224, 308);
  curveVertex(228, 296);
  curveVertex(227, 306);
  curveVertex(222, 322);
  curveVertex(221, 329);
  curveVertex(225, 337);
  curveVertex(230, 344);
  curveVertex(234, 353);
  curveVertex(235, 365);
  curveVertex(230, 373);
  curveVertex(222, 380);
  curveVertex(219, 384);
  curveVertex(221, 393);
  curveVertex(229, 399);
  curveVertex(236, 415);
  curveVertex(233, 433);
  curveVertex(225, 442);
  curveVertex(221, 443);
  curveVertex(221, 443); // control point
  endShape();
  
  fill(52, 52, 87);
  beginShape();
  curveVertex(223, 438); // control point
  curveVertex(223, 438);
  curveVertex(218, 433);
  curveVertex(218, 428);
  curveVertex(222, 421);
  curveVertex(225, 416);
  curveVertex(226, 409);
  curveVertex(224, 408);
  curveVertex(221, 403);
  curveVertex(216, 397);
  curveVertex(214, 387);
  curveVertex(215, 378);
  curveVertex(223, 368);
  curveVertex(224, 356);
  curveVertex(222, 349);
  curveVertex(221, 346);
  curveVertex(219, 341);
  curveVertex(217, 334);
  curveVertex(217, 329);
  curveVertex(220, 320);
  curveVertex(218, 330);
  curveVertex(220, 337);
  curveVertex(225, 348);
  curveVertex(228, 355);
  curveVertex(230, 362);
  curveVertex(227, 372);
  curveVertex(220, 377);
  curveVertex(216, 383);
  curveVertex(217, 391);
  curveVertex(219, 397);
  curveVertex(226, 406);
  curveVertex(230, 414);
  curveVertex(229, 421);
  curveVertex(227, 431);
  curveVertex(224, 440);
  curveVertex(224, 440); // control point
  endShape();
  

  
  //house
  fill(0);
  rect(153, 460, 80, 40);
  
  beginShape();
  vertex(146, 466);
  vertex(243, 468);
  vertex(194, 427);
  vertex(146, 467);
  endShape();
  
  beginShape();
  vertex(217, 449);
  vertex(217, 439);
  vertex(227, 439);
  vertex(227, 459);
  vertex(220, 455);
  endShape();
  
  fill(20, 20, 33);
  beginShape();
  vertex(196, 429);
  vertex(232, 465);
  vertex(225, 466);
  vertex(225, 499);
  vertex(232, 499);
  vertex(234, 467);
  vertex(243, 469);
  vertex(227, 455);
  vertex(228, 441);
  vertex(217, 440);
  vertex(218, 449);
  vertex(196, 429);
  endShape();
  
  fill(0);
  triangle(227, 466, 242, 467, 201, 461);
  
  //grass over house
    fill(3, 56, 17);
    beginShape();
  vertex(148, 497);
  vertex(150, 493);
  vertex(155, 499);
  vertex(158, 501);
  vertex(159, 500);
  vertex(163, 501);
  vertex(167, 500);
  vertex(174, 500);
  vertex(177, 499);
  vertex(182, 498);
  vertex(191, 501);
  vertex(193, 502);
  vertex(200, 502);
  vertex(203, 501);
  vertex(206, 500);
  vertex(208, 500);
  vertex(210, 501);
  vertex(212, 500);
  vertex(214, 499);
  vertex(216, 499);
  vertex(219, 501);
  vertex(222, 500);
  vertex(225, 499);
  vertex(230, 498);
  vertex(233, 497);
  vertex(236, 497);
  vertex(240, 497);
  vertex(244, 504);
  vertex(158, 507);
  vertex(146, 501);
  endShape();
  
  beginShape();
  vertex(155, 500);
  vertex(159, 497);
  vertex(158, 501);
  vertex(163, 503);
  vertex(166, 498);
  vertex(167, 502);
  vertex(190, 502);
  vertex(194, 497);
  vertex(196, 501);
  vertex(202, 501);
  vertex(209, 502);
  vertex(223, 503);
  vertex(228, 497);
  vertex(231, 500);
  vertex(239, 500);
  vertex(236, 515);
  vertex(148, 515);
  vertex(152, 503);
  endShape();
  
  beginShape();
  vertex(225, 502);
  vertex(223, 498);
  vertex(227, 501);
  vertex(225, 509);
  vertex(224, 505);
  endShape();
  
  vertex(13, 491);
  vertex(13, 487);
  vertex(14, 489);
  vertex(16, 491);
  vertex(17, 491);
  vertex(19, 492);
  vertex(27, 493);
  vertex(30, 490);
  vertex(30, 487);
  vertex(34, 488);
  vertex(35, 490);
  vertex(36, 493);
  vertex(41, 494);
  vertex(44, 491);
  vertex(49, 489);
  vertex(49, 490);
  vertex(47, 492);
  vertex(47, 494);
  vertex(54, 494);
  vertex(58, 490);
  vertex(58, 488);
  vertex(60, 494);
  vertex(67, 490);
  vertex(68, 489);
  vertex(69, 489);
  vertex(65, 494);
  vertex(68, 495);
  vertex(72, 493);
  vertex(76, 490);
  vertex(77, 488);
  vertex(78, 489);
  vertex(78, 499);
  vertex(75, 503);
  vertex(47, 506);
  vertex(12, 495);
  endShape();
  
  beginShape();
  vertex(393, 494);
  vertex(388, 490);
  vertex(388, 490);
  vertex(387, 491);
  vertex(384, 492);
  vertex(378, 490);
  vertex(375, 487);
  vertex(374, 489);
  vertex(375, 491);
  vertex(374, 493);
  vertex(365, 491);
  vertex(364, 489);
  vertex(365, 488);
  vertex(365, 487);
  vertex(363, 487);
  vertex(358, 491);
  vertex(353, 494);
  vertex(347, 490);
  vertex(347, 488);
  vertex(345, 494);
  vertex(341, 495);
  vertex(335, 491);
  vertex(333, 487);
  vertex(333, 485);
  vertex(330, 490);
  vertex(326, 494);
  vertex(323, 494);
  vertex(318, 492);
  vertex(313, 489);
  vertex(312, 488);
  vertex(311, 494);
  vertex(298, 490);
  vertex(297, 488);
  vertex(298, 495);
  vertex(288, 494);
  vertex(282, 489);
  vertex(279, 487);
  vertex(279, 489);
  vertex(279, 494);
  vertex(273, 495);
  vertex(271, 494);
  vertex(269, 488);
  vertex(269, 491);
  vertex(266, 494);
  vertex(254, 493);
  vertex(254, 493);
  vertex(253, 488);
  vertex(251, 493);
  vertex(249, 496);
  vertex(246, 492);
  vertex(244, 491);
  vertex(243, 488);
  vertex(242, 493);
  vertex(240, 495);
  vertex(234, 491);
  vertex(234, 489);
  vertex(234, 505);
  vertex(323, 521);
  vertex(393, 500);
  endShape();
  
  beginShape();
  vertex(118, 492);
  vertex(118, 486);
  vertex(122, 495);
  vertex(126, 487);
  vertex(127, 494);
  vertex(130, 489);
  vertex(132, 495);
  vertex(134, 489);
  vertex(139, 494);
  vertex(141, 489);
  vertex(147, 496);
  vertex(148, 490);
  vertex(150, 495);
  vertex(152, 506);
  vertex(119, 506);
  vertex(119, 498);
  endShape();
  
  beginShape();
  vertex(61, 499);
  vertex(64, 485);
  vertex(67, 494);
  vertex(70, 489);
  vertex(72, 501);
  vertex(73, 501);
  vertex(80, 487);
  vertex(81, 497);
  vertex(83, 498);
  vertex(86, 486);
  vertex(91, 495);
  vertex(94, 485);
  vertex(98, 497);
  vertex(101, 489);
  vertex(103, 499);
  vertex(99, 509);
  vertex(60, 513);
  endShape();
  
  beginShape();
  vertex(268, 497);
  vertex(270, 489);
  vertex(274, 497);
  vertex(277, 486);
  vertex(280, 495);
  vertex(286, 485);
  vertex(285, 497);
  vertex(292, 495);
  vertex(290, 486);
  vertex(297, 496);
  vertex(299, 486);
  vertex(302, 498);
  vertex(306, 494);
  vertex(307, 487);
  vertex(312, 495);
  vertex(313, 487);
  vertex(315, 498);
  vertex(296, 511);
  vertex(269, 503);
  endShape();
  
  beginShape();
  vertex(198, 502);
  vertex(198, 498);
  vertex(201, 502);
  vertex(197, 504);
  endShape();
  
  //moon
  fill(247, 247, 245, 35);
  beginShape();
  vertex(329, 193);
  vertex(321, 193);
  vertex(311, 196);
  vertex(304, 202);
  vertex(299, 208);
  vertex(296, 215);
  vertex(294, 223);
  vertex(295, 232);
  vertex(299, 243);
  vertex(305, 251);
  vertex(315, 257);
  vertex(324, 260);
  vertex(336, 259);
  vertex(350, 252);
  vertex(357, 242);
  vertex(361, 233);
  vertex(361, 219);
  vertex(358, 210);
  vertex(354, 204);
  vertex(347, 198);
  vertex(340, 194);
  vertex(332, 192);
  vertex(328, 193);
  endShape();
  
  fill(207, 207, 209);
  circle(328, 226, 60);
  
  fill(184, 184, 186);
  beginShape();
  vertex(312, 204);
  vertex(315, 201);
  vertex(322, 201);
  vertex(331, 200);
  vertex(335, 203);
  vertex(343, 207);
  vertex(345, 210);
  vertex(344, 213);
  vertex(342, 217);
  vertex(344, 220);
  vertex(337, 222);
  vertex(333, 220);
  vertex(329, 222);
  vertex(326, 226);
  vertex(326, 231);
  vertex(319, 240);
  vertex(313, 239);
  vertex(307, 235);
  vertex(308, 231);
  vertex(303, 226);
  vertex(301, 219);
  vertex(304, 209);
  vertex(311, 204);
  endShape();
  
  fill(135, 135, 138);
  beginShape();
  vertex(321, 205);
  vertex(314, 207);
  vertex(313, 211);
  vertex(311, 213);
  vertex(309, 215);
  vertex(304, 218);
  vertex(305, 221);
  vertex(306, 224);
  vertex(304, 229);
  vertex(304, 232);
  vertex(308, 234);
  vertex(312, 232);
  vertex(313, 233);
  vertex(316, 234);
  vertex(317, 231);
  vertex(322, 232);
  vertex(327, 230);
  vertex(330, 226);
  vertex(327, 223);
  vertex(328, 218);
  vertex(336, 219);
  vertex(340, 213);
  vertex(336, 212);
  vertex(336, 206);
  vertex(330, 206);
  vertex(327, 203);
  vertex(321, 205);
  endShape();
  
  fill(154, 154, 156);
  beginShape();
  vertex(356, 217);
  vertex(344, 214);
  vertex(336, 216);
  vertex(331, 223);
  vertex(332, 228);
  vertex(324, 232);
  vertex(325, 238);
  vertex(332, 238);
  vertex(334, 243);
  vertex(330, 250);
  vertex(332, 251);
  vertex(334, 254);
  vertex(342, 249);
  vertex(347, 248);
  vertex(348, 248);
  vertex(354, 229);
  vertex(358, 223);
  vertex(358, 219);
  endShape();

  fill(119, 119, 120);
  beginShape();
  vertex(347, 247);
  vertex(344, 246);
  vertex(344, 239);
  vertex(343, 236);
  vertex(336, 231);
  vertex(335, 227);
  vertex(335, 222);
  vertex(339, 219);
  vertex(346, 221);
  vertex(350, 218);
  vertex(354, 221);
  vertex(357, 222);
  vertex(358, 230);
  vertex(356, 238);
  vertex(348, 249);
  endShape();

  fill(230, 230, 232);
  beginShape();
  vertex(319, 242);
  vertex(318, 244);
  vertex(318, 247);
  vertex(321, 247);
  vertex(323, 248);
  vertex(326, 250);
  vertex(330, 249);
  vertex(329, 245);
  vertex(327, 240);
  vertex(323, 242);
  vertex(321, 241);
  vertex(318, 244);
  endShape();
  
  fill(199, 199, 201);
  beginShape();
  vertex(343, 220);
  vertex(342, 222);
  vertex(342, 227);
  vertex(345, 227);
  vertex(351, 228);
  vertex(351, 224);
  vertex(353, 222);
  vertex(352, 218);
  vertex(345, 217);
  vertex(342, 222);
  endShape();
  
  //tree branch
  fill("black");
  beginShape();
  vertex(9, 403);
  vertex(21, 407);
  vertex(37, 415);
  vertex(46, 419);
  vertex(63, 424);
  vertex(76, 428);
  vertex(91, 436);
  vertex(93, 441);
  vertex(102, 455);
  vertex(108, 468);
  vertex(120, 483);
  vertex(121, 480);
  vertex(118, 476);
  vertex(114, 467);
  vertex(109, 457);
  vertex(101, 442);
  vertex(100, 434);
  vertex(101, 432);
  vertex(110, 426);
  vertex(128, 420);
  vertex(137, 414);
  vertex(136, 411);
  vertex(113, 421);
  vertex(101, 421);
  vertex(81, 414);
  vertex(63, 405);
  vertex(28, 383);
  vertex(9, 371);
  vertex(11, 404);
  endShape();
  
  beginShape();
  vertex(45, 396);
  vertex(65, 396);
  vertex(80, 392);
  vertex(82, 392);
  vertex(75, 396);
  vertex(71, 398);
  vertex(52, 401);
  vertex(46, 400);
  endShape();
  
   beginShape();
  vertex(31, 387);
  vertex(31, 384);
  vertex(29, 377);
  vertex(29, 371);
  vertex(34, 366);
  vertex(34, 362);
  vertex(39, 359);
  vertex(38, 364);
  vertex(38, 368);
  vertex(32, 372);
  vertex(37, 389);
  vertex(29, 393);
  endShape();
  
  beginShape();
  vertex(63, 424);
  vertex(65, 431);
  vertex(64, 436);
  vertex(67, 439);
  vertex(71, 443);
  vertex(71, 446);
  vertex(70, 449);
  vertex(76, 451);
  vertex(74, 449);
  vertex(74, 443);
  vertex(69, 437);
  vertex(69, 434);
  vertex(68, 433);
  vertex(68, 430);
  vertex(68, 426);
  endShape();
  
  beginShape();
  vertex(10, 286);
  vertex(30, 302);
  vertex(42, 303);
  vertex(52, 320);
  vertex(53, 324);
  vertex(58, 331);
  vertex(65, 348);
  vertex(71, 354);
  vertex(75, 353);
  vertex(69, 346);
  vertex(64, 330);
  vertex(59, 321);
  vertex(55, 313);
  vertex(49, 295);
  vertex(35, 291);
  vertex(24, 287);
  vertex(9, 269);
  vertex(10, 290);
  endShape();
  
  beginShape();
  vertex(21, 296);
  vertex(20, 311);
  vertex(20, 316);
  vertex(25, 320);
  vertex(27, 328);
  vertex(29, 335);
  vertex(29, 337);
  vertex(34, 337);
  vertex(29, 320);
  vertex(24, 315);
  vertex(23, 310);
  vertex(25, 295);
  vertex(22, 294);
  endShape();

    beginShape();
  vertex(57, 317);
  vertex(63, 322);
  vertex(71, 330);
  vertex(78, 335);
  vertex(84, 338);
  vertex(89, 339);
  vertex(94, 345);
  vertex(94, 350);
  vertex(98, 344);
  vertex(95, 339);
  vertex(79, 329);
  vertex(65, 316);
  vertex(54, 312);
  vertex(57, 319);
  endShape();
  
  beginShape();
  vertex(8, 175);
  vertex(25, 186);
  vertex(29, 205);
  vertex(30, 210);
  vertex(38, 224);
  vertex(50, 224);
  vertex(59, 234);
  vertex(64, 246);
  vertex(69, 254);
  vertex(81, 264);
  vertex(99, 284);
  vertex(94, 294);
  vertex(99, 292);
  vertex(104, 282);
  vertex(96, 270);
  vertex(88, 265);
  vertex(83, 257);
  vertex(77, 252);
  vertex(74, 250);
  vertex(68, 229);
  vertex(60, 218);
  vertex(48, 215);
  vertex(39, 206);
  vertex(36, 182);
  vertex(30, 173);
  vertex(20, 162);
  vertex(20, 156);
  vertex(4, 156);
  vertex(4, 173);
  endShape();
  
  beginShape();
  vertex(92, 270);
  vertex(109, 276);
  vertex(118, 282);
  vertex(127, 287);
  vertex(130, 288);
  vertex(129, 296);
  vertex(127, 293);
  vertex(121, 290);
  vertex(113, 286);
  vertex(106, 282);
  vertex(99, 280);
  vertex(96, 275);
  endShape();
  
  beginShape();
  vertex(82, 161);
  vertex(82, 179);
  vertex(83, 195);
  vertex(92, 202);
  vertex(98, 208);
  vertex(104, 223);
  vertex(107, 229);
  vertex(121, 230);
  vertex(120, 226);
  vertex(111, 228);
  vertex(105, 211);
  vertex(100, 202);
  vertex(88, 194);
  vertex(86, 181);
  vertex(88, 164);
  vertex(88, 156);
  vertex(82, 155);
  endShape();
  
  beginShape();
  vertex(93, 201);
  vertex(86, 213);
  vertex(86, 218);
  vertex(82, 227);
  vertex(79, 229);
  vertex(78, 234);
  vertex(77, 241);
  vertex(81, 249);
  vertex(82, 241);
  vertex(81, 234);
  vertex(88, 229);
  vertex(91, 220);
  vertex(93, 212);
  vertex(98, 204);
  vertex(94, 202);
  endShape();
  
  beginShape();
  vertex(107, 225);
  vertex(109, 232);
  vertex(108, 242);
  vertex(112, 242);
  vertex(112, 232);
  vertex(110, 229);
  endShape();
  
  beginShape();
  vertex(20, 588);
  vertex(28, 567);
  vertex(24, 556);
  vertex(21, 538);
  vertex(21, 524);
  vertex(25, 504);
  vertex(14, 478);
  vertex(18, 474);
  vertex(18, 479);
  vertex(27, 498);
  vertex(31, 506);
  vertex(27, 517);
  vertex(27, 525);
  vertex(28, 533);
  vertex(28, 540);
  vertex(28, 546);
  vertex(30, 552);
  vertex(32, 560);
  vertex(33, 562);
  vertex(36, 555);
  vertex(35, 543);
  vertex(36, 531);
  vertex(44, 520);
  vertex(45, 512);
  vertex(47, 503);
  vertex(48, 491);
  vertex(51, 484);
  vertex(55, 475);
  vertex(54, 466);
  vertex(57, 471);
  vertex(58, 478);
  vertex(52, 489);
  vertex(51, 497);
  vertex(51, 505);
  vertex(51, 511);
  vertex(48, 514);
  vertex(46, 524);
  vertex(41, 532);
  vertex(40, 544);
  vertex(40, 557);
  vertex(40, 565);
  vertex(39, 567);
  vertex(35, 572);
  vertex(33, 577);
  vertex(34, 579);
  vertex(27, 590);
  vertex(20, 592);
  endShape();
  
  beginShape();
  vertex(71, 589);
  vertex(77, 577);
  vertex(76, 569);
  vertex(70, 555);
  vertex(70, 542);
  vertex(74, 534);
  vertex(72, 520);
  vertex(70, 516);
  vertex(74, 514);
  vertex(78, 525);
  vertex(79, 531);
  vertex(79, 536);
  vertex(77, 544);
  vertex(75, 548);
  vertex(75, 550);
  vertex(78, 556);
  vertex(80, 562);
  vertex(82, 569);
  vertex(83, 574);
  vertex(76, 592);
  vertex(69, 592);
  endShape();
  
  beginShape();
  vertex(81, 575);
  vertex(85, 565);
  vertex(87, 556);
  vertex(95, 537);
  vertex(99, 523);
  vertex(99, 521);
  vertex(96, 520);
  vertex(95, 527);
  vertex(92, 537);
  vertex(88, 543);
  vertex(84, 555);
  vertex(80, 565);
  endShape();
  
   beginShape();
  vertex(81, 570);
  vertex(96, 565);
  vertex(102, 563);
  vertex(112, 560);
  vertex(111, 558);
  vertex(100, 561);
  vertex(83, 567);
  vertex(83, 572);
  endShape();
  
  beginShape();
  vertex(71, 588);
  vertex(60, 567);
  vertex(62, 566);
  vertex(74, 587);
  vertex(73, 589);
  endShape();
  
 beginShape();
  vertex(125, 591);
  vertex(119, 563);
  vertex(121, 561);
  vertex(125, 572);
  vertex(129, 591);
  vertex(125, 591);
  endShape();
  
  beginShape();
  vertex(126, 582);
  vertex(127, 571);
  vertex(130, 564);
  vertex(131, 549);
  vertex(129, 544);
  vertex(132, 544);
  vertex(135, 554);
  vertex(134, 567);
  vertex(130, 575);
  vertex(127, 586);
  vertex(126, 577);
  endShape();
  
beginShape();
  vertex(8, 484);
  vertex(18, 488);
  vertex(24, 487);
  vertex(34, 487);
  vertex(45, 489);
  vertex(51, 493);
  vertex(57, 495);
  vertex(66, 496);
  vertex(75, 497);
  vertex(86, 500);
  vertex(91, 501);
  vertex(89, 505);
  vertex(75, 501);
  vertex(62, 501);
  vertex(48, 500);
  vertex(42, 494);
  vertex(32, 492);
  vertex(16, 495);
  vertex(10, 492);
  vertex(9, 486);
  endShape();
  
  beginShape();
  vertex(29, 487);
  vertex(39, 485);
  vertex(48, 483);
  vertex(64, 481);
  vertex(77, 477);
  vertex(83, 479);
  vertex(93, 478);
  vertex(94, 485);
  vertex(92, 484);
  vertex(88, 482);
  vertex(79, 485);
  vertex(76, 483);
  vertex(63, 486);
  vertex(50, 487);
  vertex(42, 491);
  vertex(34, 488);
  endShape();
  
  beginShape();
  vertex(143, 588);
  vertex(143, 578);
  vertex(145, 563);
  vertex(150, 564);
  vertex(148, 565);
  vertex(146, 579);
  vertex(147, 590);
  vertex(142, 590);
  endShape();
  
  beginShape();
  vertex(144, 587);
  vertex(140, 577);
  vertex(139, 572);
  vertex(137, 571);
  vertex(133, 576);
  vertex(135, 576);
  vertex(137, 583);
  vertex(139, 590);
  vertex(145, 591);
  endShape();
  
  //tree
  fill("black");
  beginShape();
  vertex(263, 496);
  vertex(267, 491);
  vertex(270, 484);
  vertex(274, 454);
  vertex(275, 443);
  vertex(273, 433);
  vertex(265, 417);
  vertex(263, 408);
  vertex(266, 403);
  vertex(267, 410);
  vertex(270, 417);
  vertex(274, 424);
  vertex(277, 428);
  vertex(277, 420);
  vertex(279, 412);
  vertex(283, 408);
  vertex(284, 398);
  vertex(288, 388);
  vertex(292, 389);
  vertex(290, 392);
  vertex(288, 398);
  vertex(288, 406);
  vertex(284, 414);
  vertex(281, 427);
  vertex(283, 434);
  vertex(287, 423);
  vertex(288, 415);
  vertex(294, 407);
  vertex(296, 401);
  vertex(301, 399);
  vertex(297, 408);
  vertex(291, 417);
  vertex(290, 425);
  vertex(287, 436);
  vertex(287, 452);
  vertex(288, 465);
  vertex(293, 483);
  vertex(299, 493);
  vertex(293, 493);
  vertex(289, 491);
  vertex(290, 497);
  vertex(282, 493);
  vertex(276, 499);
  vertex(275, 493);
  vertex(269, 496);
  vertex(263, 497);
  endShape();
  
  beginShape();
  vertex(269, 412);
  vertex(272, 410);
  vertex(273, 407);
  vertex(274, 407);
  vertex(276, 410);
  vertex(279, 409);
  vertex(285, 410);
  vertex(286, 413);
  vertex(288, 413);
  vertex(299, 415);
  vertex(307, 413);
  vertex(310, 410);
  vertex(314, 400);
  vertex(316, 397);
  vertex(316, 387);
  vertex(315, 379);
  vertex(308, 374);
  vertex(301, 374);
  vertex(295, 368);
  vertex(284, 363);
  vertex(275, 365);
  vertex(270, 368);
  vertex(264, 367);
  vertex(258, 372);
  vertex(258, 376);
  vertex(253, 379);
  vertex(250, 387);
  vertex(252, 393);
  vertex(252, 398);
  vertex(254, 407);
  vertex(258, 412);
  vertex(266, 412);
  endShape();
  
  beginShape();
  vertex(253, 390);
  vertex(249, 396);
  vertex(247, 403);
  vertex(250, 413);
  vertex(255, 418);
  vertex(259, 423);
  vertex(268, 420);
  vertex(272, 421);
  vertex(277, 421);
  vertex(284, 422);
  vertex(288, 424);
  vertex(293, 423);
  vertex(297, 419);
  vertex(305, 417);
  vertex(306, 413);
  endShape();
  
  beginShape();
  vertex(284, 417);
  vertex(300, 420);
  vertex(306, 417);
  vertex(311, 411);
  vertex(316, 408);
  vertex(317, 403);
  vertex(315, 399);
  vertex(320, 387);
  vertex(318, 383);
  vertex(315, 379);
  vertex(295, 389);
  vertex(298, 418);
  endShape();
  
  beginShape();
  vertex(284, 452);
  vertex(287, 446);
  vertex(291, 438);
  vertex(292, 430);
  vertex(295, 426);
  vertex(294, 431);
  vertex(292, 441);
  vertex(286, 452);
  vertex(285, 446);
  endShape();
  
  beginShape();
  vertex(292, 439);
  vertex(297, 432);
  vertex(298, 434);
  vertex(285, 450);
  endShape();
  
  fill(20, 20, 33);
  beginShape();
  vertex(285, 365);
  vertex(294, 369);
  vertex(300, 375);
  vertex(307, 375);
  vertex(316, 382);
  vertex(319, 389);
  vertex(314, 398);
  vertex(316, 405);
  vertex(315, 408);
  vertex(311, 411);
  vertex(301, 420);
  vertex(297, 419);
  vertex(291, 423);
  vertex(294, 416);
  vertex(297, 414);
  vertex(302, 416);
  vertex(311, 407);
  vertex(311, 404);
  vertex(308, 400);
  vertex(314, 388);
  vertex(308, 380);
  vertex(296, 380);
  vertex(292, 371);
  vertex(286, 367);
  endShape();
  
  beginShape();
  vertex(290, 424);
  vertex(285, 436);
  vertex(286, 446);
  vertex(288, 461);
  vertex(289, 472);
  vertex(294, 484);
  vertex(298, 493);
  vertex(294, 491);
  vertex(290, 486);
  vertex(284, 469);
  vertex(283, 451);
  vertex(285, 439);
  endShape();
  
  fill(3, 56, 17);
  beginShape();
  vertex(266, 497);
  vertex(267, 493);
  vertex(268, 500);
  vertex(271, 493);
  vertex(276, 504);
  vertex(279, 500);
  vertex(279, 491);
  vertex(284, 503);
  vertex(291, 501);
  vertex(293, 490);
  vertex(295, 501);
  vertex(284, 511);
  vertex(263, 505);
  endShape();
  
  beginShape();
  vertex(283, 496);
  vertex(285, 494);
  vertex(285, 500);
  vertex(281, 499);
  endShape();
  
  beginShape();
  vertex(292, 496);
  vertex(295, 490);
  vertex(295, 500);
  vertex(292, 501);
  endShape();
  
beginShape();
  vertex(284, 497);
  vertex(286, 493);
  vertex(288, 507);
  vertex(285, 502);
  endShape();
  
  fill(10, 10, 10);
  beginShape();
  vertex(290, 384);
  vertex(297, 387);
  vertex(297, 390);
  vertex(295, 393);
  vertex(299, 395);
  vertex(299, 399);
  vertex(299, 404);
  vertex(294, 406);
  vertex(292, 406);
  vertex(291, 412);
  vertex(287, 413);
  vertex(284, 412);
  vertex(285, 411);
  vertex(289, 409);
  vertex(290, 406);
  vertex(289, 404);
  vertex(295, 403);
  vertex(296, 401);
  vertex(296, 398);
  vertex(295, 396);
  vertex(292, 394);
  vertex(293, 390);
  vertex(292, 387);
  vertex(290, 385);
  endShape();
  
   beginShape();
  vertex(259, 402);
  vertex(258, 406);
  vertex(259, 408);
  vertex(263, 409);
  vertex(263, 413);
  vertex(266, 415);
  vertex(268, 414);
  vertex(272, 417);
  vertex(275, 417);
  vertex(277, 414);
  vertex(274, 415);
  vertex(272, 415);
  vertex(271, 413);
  vertex(269, 410);
  vertex(267, 411);
  vertex(266, 409);
  vertex(268, 406);
  vertex(264, 407);
  vertex(262, 406);
  vertex(260, 403);
  endShape();
  
}

function drawHard2() {
    //moon
  fill(237, 237, 237);
  beginShape();
  vertex(724, 239);
  vertex(725, 241);
  vertex(725, 250);
  vertex(720, 252);
  vertex(711, 246);
  vertex(713, 241);
  vertex(718, 239);
  vertex(724, 239);
  endShape();
  

  
  //branch
  fill("black");
  beginShape();
  vertex(526, 289);
  vertex(527, 302);
  vertex(524, 295);
  vertex(523, 291);
  endShape();
  
  beginShape();
  vertex(523, 294);
  vertex(528, 305);
  vertex(526, 293);
  vertex(524, 292);
  endShape();
  
  //smoke
  fill(49, 49, 87);
  beginShape();
  vertex(614, 439);
  vertex(622, 439);
  vertex(627, 419);
  vertex(626, 407);
  vertex(616, 396);
  vertex(614, 388);
  vertex(614, 383);
  vertex(621, 375);
  vertex(626, 366);
  vertex(625, 354);
  vertex(623, 346);
  vertex(617, 335);
  vertex(615, 330);
  vertex(614, 321);
  vertex(610, 332);
  vertex(615, 347);
  vertex(616, 356);
  vertex(616, 363);
  vertex(611, 375);
  vertex(607, 384);
  vertex(608, 394);
  vertex(618, 406);
  vertex(611, 424);
  vertex(612, 439);
  vertex(621, 440);
  endShape();
  
  //tree
  fill("black");
  beginShape();
  vertex(681, 437);
  vertex(688, 408);
  vertex(682, 417);
  vertex(676, 437);
  vertex(677, 442);
  endShape();
  
  beginShape();
  vertex(676, 430);
  vertex(681, 429);
  vertex(678, 439);
  vertex(676, 436);
  endShape();
  
  beginShape();
  vertex(675, 432);
  vertex(682, 428);
  vertex(677, 440);
  vertex(675, 434);
  endShape();
  
  //other branch
  
  fill("black");
  beginShape();
  vertex(425, 578);
  vertex(433, 575);
  vertex(421, 587);
  vertex(423, 581);
  endShape();
  
  beginShape();
  vertex(424, 588);
  vertex(429, 580);
  vertex(436, 575);
  vertex(427, 577);
  vertex(424, 586);
  endShape();

  
}

function drawImpossible() {
    //background
  fill(59, 156, 69);
  beginShape();
  vertex(7, 156);
  vertex(5, 593);
  vertex(398, 593);
  vertex(398, 155);
  vertex(7, 157);
  endShape();
  
gradientHorizontal (color (4, 158, 217), color (167, 227, 250), 0, 160, 400, 500);

//wheel thing

//shadows
  fill(184, 37, 7);
  beginShape();
  vertex(316, 423);
  vertex(283, 500);
  vertex(272, 501);
  vertex(308, 417);
  vertex(315, 419);
  endShape();
  
  beginShape();
  vertex(343, 406);
  vertex(386, 500);
  vertex(366, 496);
  vertex(326, 402);
  vertex(338, 403);
  endShape();
  
  fill(209, 44, 10);
  beginShape();
  vertex(256, 498);
  vertex(306, 390);
  vertex(332, 390);
  vertex(382, 500);
  vertex(362, 500);
  vertex(323, 414);
  vertex(314, 414);
  vertex(278, 500);
  vertex(254, 501);
  vertex(256, 497);
  endShape();
  
    //lines
  stroke(0);
  strokeWeight(4);
  line(320, 476, 320, 328);
  line(237, 400, 403, 400);
  line(260, 342, 385, 455);
  line(262, 455, 380, 343);
  
  //wheel
    noFill();
    stroke(0);
    strokeWeight(3);
   circle (320, 400, 150);
   
   stroke(224, 189, 31);
   circle (320, 400, 120);
  
    noStroke();
  fill(184, 37, 7);
  circle (320, 400, 50);
  
    fill(232, 195, 32);
  circle (320, 400, 40);
  
  //seats
  fill(232, 195, 32);
  circle (320, 480, 30);
  circle (262, 470, 30);
  circle (242, 412, 30);
  circle (263, 351, 30);
  circle (320, 332, 30);
  circle (380, 356, 30);
  circle (383, 463, 30);  
  
  fill(134, 225, 247);
  beginShape();
  vertex(304, 480);
  vertex(335, 481);
  vertex(333, 472);
  vertex(326, 467);
  vertex(320, 464);
  vertex(312, 467);
  vertex(307, 471);
  vertex(304, 480);
  endShape();
  
  beginShape();
  vertex(247, 470);
  vertex(248, 464);
  vertex(251, 458);
  vertex(257, 455);
  vertex(265, 455);
  vertex(273, 460);
  vertex(277, 467);
  vertex(277, 471);
  vertex(247, 470);
  endShape();
  
   beginShape();
  vertex(369, 463);
  vertex(395, 464);
  vertex(394, 453);
  vertex(389, 450);
  vertex(383, 448);
  vertex(376, 449);
  vertex(369, 456);
  vertex(368, 462);
  endShape();
  
  beginShape();
  vertex(227, 412);
  vertex(257, 413);
  vertex(254, 403);
  vertex(247, 398);
  vertex(236, 397);
  vertex(230, 401);
  vertex(226, 408);
  vertex(226, 410);
  endShape();
  
  beginShape();
  vertex(249, 351);
  vertex(277, 352);
  vertex(277, 345);
  vertex(272, 339);
  vertex(267, 336);
  vertex(258, 336);
  vertex(252, 340);
  vertex(249, 346);
  vertex(247, 350);
  endShape();
  
beginShape();
  vertex(306, 332);
  vertex(335, 332);
  vertex(333, 325);
  vertex(330, 321);
  vertex(324, 318);
  vertex(316, 318);
  vertex(309, 321);
  vertex(306, 328);
  vertex(305, 332);
  endShape();
  
  beginShape();
  curveVertex(365, 356); // control point
  curveVertex(365, 356);
  curveVertex(395, 356);
  curveVertex(393, 350);
  curveVertex(390, 346);
  curveVertex(390, 345);
  curveVertex(383, 342);
  curveVertex(376, 342);
  curveVertex(369, 345);
  curveVertex(365, 350);
  curveVertex(364, 356);
  curveVertex(364, 356); // control point
  endShape();
  
      stroke(0);
    strokeWeight(2);
  line(305, 479, 334, 480);
  line(247, 470, 276, 471);
  line(369, 462, 395, 464);
  line(228, 412, 256, 413);
  line(248, 351, 278, 352);
  line(306, 333, 334, 333);
  line(366, 356, 395, 357);
  
//tent
noStroke();
  //tent stripes
  fill(219, 59, 20);
  beginShape();
  vertex(41, 493);
  vertex(63, 434);
  vertex(191, 434);
  vertex(213, 493);
  vertex(40, 493);
  endShape();
  
  fill("white");
  beginShape();
  vertex(189, 493);
  vertex(169, 435);
  vertex(177, 435);
  vertex(180, 435);
  vertex(200, 494);
  vertex(188, 494);
  endShape();
  
  beginShape();
  vertex(163, 493);
  vertex(176, 493);
  vertex(157, 434);
  vertex(146, 434);
  vertex(164, 493);
  endShape();
  
  beginShape();
  vertex(121, 446);
  vertex(121, 434);
  vertex(132, 435);
  vertex(134, 450);
  vertex(121, 450);
  endShape();
  
  beginShape();
  vertex(94, 435);
  vertex(105, 435);
  vertex(91, 493);
  vertex(77, 493);
  vertex(93, 434);
  endShape();
  
  beginShape();
  vertex(72, 435);
  vertex(84, 435);
  vertex(67, 493);
  vertex(53, 493);
  vertex(72, 434);
  endShape();
  
  fill(219, 59, 20);
  beginShape();
  vertex(64, 433);
  vertex(80, 430);
  vertex(96, 426);
  vertex(110, 417);
  vertex(119, 404);
  vertex(126, 391);
  vertex(133, 405);
  vertex(144, 417);
  vertex(153, 423);
  vertex(166, 428);
  vertex(177, 432);
  vertex(190, 433);
  vertex(65, 433);
  endShape();
  
  fill("white");
  beginShape();
  vertex(74, 434);
  vertex(90, 431);
  vertex(104, 426);
  vertex(115, 417);
  vertex(123, 404);
  vertex(126, 392);
  vertex(125, 403);
  vertex(122, 409);
  vertex(116, 419);
  vertex(109, 426);
  vertex(84, 435);
  vertex(74, 435);
  endShape();
  
  beginShape();
  vertex(94, 434);
  vertex(104, 431);
  vertex(112, 427);
  vertex(121, 418);
  vertex(125, 409);
  vertex(126, 393);
  vertex(127, 406);
  vertex(124, 417);
  vertex(116, 427);
  vertex(106, 435);
  vertex(95, 434);
  endShape();
  
  beginShape();
  vertex(177, 434);
  vertex(165, 431);
  vertex(153, 427);
  vertex(136, 414);
  vertex(132, 407);
  vertex(126, 393);
  vertex(130, 406);
  vertex(133, 412);
  vertex(139, 420);
  vertex(151, 428);
  vertex(171, 435);
  vertex(177, 435);
  endShape();
  
  beginShape();
  vertex(155, 433);
  vertex(147, 429);
  vertex(136, 422);
  vertex(131, 414);
  vertex(126, 397);
  vertex(129, 415);
  vertex(134, 423);
  vertex(145, 433);
  vertex(154, 434);
  endShape();
  
  beginShape();
  vertex(122, 433);
  vertex(124, 428);
  vertex(127, 413);
  vertex(126, 393);
  vertex(129, 417);
  vertex(130, 424);
  vertex(133, 434);
  vertex(123, 434);
  endShape();


//random
noStroke();
 fill(31, 173, 224);
  beginShape();
  vertex(217, 500);
  vertex(214, 493);
  vertex(151, 494);
  vertex(153, 500);
  vertex(217, 499);
  endShape();
  
beginShape();
  vertex(35, 499);
  vertex(40, 494);
  vertex(98, 494);
  vertex(95, 500);
  vertex(34, 499);
  endShape();
  
  
  //door
  fill(237, 177, 36);
  beginShape();
  vertex(95, 499);
  vertex(105, 458);
  vertex(115, 453);
  vertex(121, 447);
  vertex(126, 437);
  vertex(131, 447);
  vertex(138, 454);
  vertex(147, 456);
  vertex(159, 501);
  vertex(95, 500);
  endShape();
  
  fill(66, 81, 122);
  beginShape();
  vertex(104, 499);
  vertex(111, 463);
  vertex(118, 460);
  vertex(124, 455);
  vertex(126, 451);
  vertex(129, 456);
  vertex(135, 459);
  vertex(140, 461);
  vertex(149, 500);
  vertex(104, 500);
  endShape();
  
    fill(0);
   beginShape();
  vertex(119, 499);
  vertex(118, 473);
  vertex(119, 469);
  vertex(124, 466);
  vertex(132, 468);
  vertex(135, 472);
  vertex(136, 499);
  vertex(136, 501);
  vertex(120, 501);
  endShape();
  
  //grass
  fill(59, 156, 69);
  beginShape();
  vertex(11, 498);
  vertex(396, 498);
  vertex(396, 512);
  vertex(5, 510);
  vertex(5, 496);
  vertex(10, 499);
  endShape();

 fill(28, 214, 235);
  beginShape();
  vertex(63, 432);
  vertex(189, 433);
  vertex(192, 439);
  vertex(191, 441);
  vertex(185, 443);
  vertex(184, 442);
  vertex(182, 440);
  vertex(180, 443);
  vertex(175, 443);
  vertex(171, 442);
  vertex(170, 440);
  vertex(168, 443);
  vertex(165, 444);
  vertex(161, 443);
  vertex(159, 441);
  vertex(158, 443);
  vertex(154, 445);
  vertex(149, 444);
  vertex(147, 443);
  vertex(144, 445);
  vertex(142, 445);
  vertex(138, 445);
  vertex(137, 443);
  vertex(135, 440);
  vertex(134, 443);
  vertex(128, 444);
  vertex(125, 441);
  vertex(122, 443);
  vertex(117, 444);
  vertex(115, 442);
  vertex(113, 439);
  vertex(109, 443);
  vertex(106, 442);
  vertex(103, 439);
  vertex(101, 442);
  vertex(97, 443);
  vertex(95, 439);
  vertex(92, 443);
  vertex(89, 444);
  vertex(85, 443);
  vertex(84, 441);
  vertex(84, 439);
  vertex(80, 442);
  vertex(77, 442);
  vertex(75, 441);
  vertex(74, 438);
  vertex(71, 442);
  vertex(68, 442);
  vertex(66, 442);
  vertex(64, 441);
  vertex(62, 439);
  vertex(61, 437);
  vertex(63, 432);
  endShape();
  
  beginShape();
  vertex(188, 433);
  vertex(190, 433);
  vertex(193, 440);
  vertex(191, 442);
  vertex(186, 443);
  vertex(182, 439);
  vertex(187, 433);
  endShape();
  
  //squares
  fill("white");
  beginShape();
  vertex(67, 435);
  vertex(65, 439);
  vertex(68, 440);
  vertex(70, 435);
  vertex(68, 435);
  endShape();
  
  beginShape();
  vertex(78, 435);
  vertex(77, 438);
  vertex(80, 439);
  vertex(80, 435);
  vertex(78, 435);
  endShape();
  
  beginShape();
  vertex(87, 436);
  vertex(86, 440);
  vertex(90, 441);
  vertex(91, 437);
  vertex(87, 437);
  endShape();
  
  beginShape();
  vertex(98, 437);
  vertex(98, 439);
  vertex(99, 439);
  vertex(101, 437);
  vertex(97, 437);
  endShape();
  
  beginShape();
  vertex(107, 437);
  vertex(107, 440);
  vertex(110, 440);
  vertex(110, 438);
  vertex(107, 437);
  endShape();
  
  beginShape();
  vertex(116, 438);
  vertex(116, 441);
  vertex(120, 441);
  vertex(121, 438);
  vertex(116, 438);
  endShape();
  
  beginShape();
  vertex(126, 437);
  vertex(127, 441);
  vertex(132, 441);
  vertex(130, 437);
  vertex(126, 437);
  endShape();
  
  beginShape();
  vertex(138, 438);
  vertex(140, 442);
  vertex(145, 442);
  vertex(143, 438);
  vertex(138, 439);
  endShape();
  
  beginShape();
  vertex(151, 438);
  vertex(152, 441);
  vertex(155, 440);
  vertex(154, 437);
  vertex(151, 437);
  endShape();
  
  beginShape();
  vertex(162, 437);
  vertex(163, 442);
  vertex(167, 440);
  vertex(166, 437);
  vertex(162, 438);
  endShape();
  
  beginShape();
  vertex(173, 438);
  vertex(175, 440);
  vertex(178, 440);
  vertex(177, 438);
  vertex(174, 439);
  endShape();
  
   beginShape();
  vertex(183, 436);
  vertex(186, 440);
  vertex(189, 439);
  vertex(187, 436);
  vertex(184, 436);
  endShape();
  
  //flag lines
    stroke(235, 184, 30);
  strokeWeight(2)
  line(64, 431, 89, 420);
  line(89, 420, 112, 404);
  line(112, 404, 127, 390);
  
  line(127, 391, 139, 404);
  line(139, 404, 160, 418);
  line(160, 418, 189, 433);
  
  //flags
  stroke(0);
  strokeWeight(1)
  line(126, 389, 126, 382);
  line(190, 433, 190, 422);
  line(63, 433, 63, 422);
  
  noStroke();
  fill(212, 34, 15);
  circle(126, 391, 5);
  
  fill(219, 48, 22);
beginShape();
  vertex(125, 377);
  vertex(125, 382);
  vertex(136, 382);
  vertex(139, 382);
  vertex(132, 379);
  vertex(139, 377);
  vertex(125, 377);
  endShape();
  
  beginShape();
  vertex(188, 416);
  vertex(188, 424);
  vertex(204, 424);
  vertex(195, 421);
  vertex(203, 417);
  vertex(188, 417);
  endShape();
  
  beginShape();
  vertex(61, 417);
  vertex(61, 421);
  vertex(74, 421);
  vertex(69, 418);
  vertex(74, 416);
  vertex(61, 416);
  endShape();
  
  //circles on line
  fill(235, 184, 30);
  circle(182, 429, 6);
  circle(170, 423, 6);
  circle(156, 415, 6);
  circle(142, 406, 6);
  circle(113, 402, 6);
  circle(102, 411, 6);
  circle(89, 419, 6);
  circle(75, 426, 6);

//guy on stilts
//pants

  fill(77, 92, 143);
  beginShape();
  vertex(166, 524);
  vertex(173, 526);
  vertex(183, 527);
  vertex(197, 525);
  vertex(183, 377);
  vertex(165, 377);
  vertex(166, 524);
  endShape();
  
  beginShape();
  vertex(166, 378);
  vertex(167, 373);
  vertex(197, 311);
  vertex(216, 312);
  vertex(213, 332);
  vertex(209, 354);
  vertex(197, 376);
  vertex(184, 388);
  vertex(182, 395);
  vertex(167, 381);
  endShape();
  
  beginShape();
  vertex(213, 315);
  vertex(209, 390);
  vertex(231, 524);
  vertex(234, 537);
  vertex(247, 535);
  vertex(262, 527);
  vertex(271, 515);
  vertex(231, 388);
  vertex(238, 313);
  vertex(198, 312);
  vertex(212, 316);
  endShape();
  
  beginShape();
  vertex(208, 351);
  vertex(201, 368);
  vertex(192, 383);
  vertex(187, 387);
  vertex(201, 522);
  vertex(189, 527);
  vertex(176, 526);
  vertex(171, 401);
  vertex(199, 348);
  vertex(203, 350);
  endShape();
  
  //lines on pants
  fill("white");
  beginShape();
  vertex(173, 525);
  vertex(169, 382);
  vertex(202, 312);
  vertex(206, 312);
  vertex(172, 385);
  vertex(177, 526);
  vertex(172, 526);
  endShape();
  
  beginShape();
  vertex(182, 526);
  vertex(176, 385);
  vertex(210, 313);
  vertex(214, 313);
  vertex(179, 387);
  vertex(187, 527);
  vertex(181, 527);
  endShape();
  
   beginShape();
  vertex(217, 314);
  vertex(187, 386);
  vertex(191, 384);
  vertex(195, 378);
  vertex(220, 314);
  vertex(217, 313);
  endShape();
  
  beginShape();
  vertex(195, 524);
  vertex(185, 386);
  vertex(187, 386);
  vertex(198, 523);
  vertex(195, 524);
  endShape();
  
  beginShape();
  vertex(223, 313);
  vertex(214, 390);
  vertex(248, 531);
  vertex(250, 533);
  vertex(254, 530);
  vertex(219, 391);
  vertex(227, 313);
  vertex(221, 313);
  endShape();
  
  beginShape();
  vertex(222, 313);
  vertex(213, 361);
  vertex(212, 351);
  vertex(223, 312);
  endShape();
  
  beginShape();
  vertex(240, 535);
  vertex(216, 428);
  vertex(235, 536);
  vertex(240, 536);
  endShape();
  
  beginShape();
  vertex(211, 352);
  vertex(211, 364);
  vertex(214, 356);
  vertex(212, 349);
  vertex(211, 352);
  endShape();
  
  beginShape();
  vertex(211, 348);
  vertex(219, 328);
  vertex(212, 359);
  vertex(211, 349);
  endShape();
  
  beginShape();
  vertex(231, 313);
  vertex(224, 387);
  vertex(261, 524);
  vertex(262, 525);
  vertex(267, 518);
  vertex(227, 387);
  vertex(234, 313);
  vertex(231, 314);
  endShape();
  
  //shirt
  noStroke();
  fill(245, 71, 32);
  beginShape();
  vertex(197, 313);
  vertex(236, 313);
  vertex(238, 313);
  vertex(253, 247);
  vertex(186, 247);
  vertex(197, 311);
  endShape();
  
  beginShape();
  vertex(187, 247);
  vertex(207, 242);
  vertex(213, 233);
  vertex(226, 233);
  vertex(230, 240);
  vertex(251, 247);
  vertex(246, 259);
  vertex(196, 257);
  vertex(189, 250);
  endShape();
  
  fill("black");
  beginShape();
  vertex(216, 312);
  vertex(215, 275);
  vertex(195, 246);
  vertex(207, 242);
  vertex(215, 267);
  vertex(216, 271);
  vertex(223, 257);
  vertex(236, 242);
  vertex(245, 245);
  vertex(235, 260);
  vertex(239, 259);
  vertex(233, 268);
  vertex(219, 274);
  vertex(216, 312);
  endShape();
  
  fill(250, 245, 225);
  beginShape();
  vertex(207, 241);
  vertex(217, 270);
  vertex(222, 257);
  vertex(236, 242);
  vertex(231, 240);
  vertex(225, 234);
  vertex(212, 234);
  vertex(211, 238);
  vertex(207, 242);
  endShape();
  
  beginShape();
  vertex(208, 242);
  vertex(211, 239);
  vertex(212, 234);
  vertex(225, 234);
  vertex(228, 239);
  vertex(219, 246);
  vertex(210, 244);
  endShape();
  
  //sleeves
  fill(219, 63, 29);
  beginShape();
  vertex(186, 248);
  vertex(184, 265);
  vertex(178, 281);
  vertex(167, 302);
  vertex(176, 308);
  vertex(184, 298);
  vertex(191, 286);
  vertex(193, 281);
  vertex(187, 247);
  endShape();
  
  beginShape();
  vertex(252, 249);
  vertex(247, 260);
  vertex(246, 273);
  vertex(247, 291);
  vertex(246, 300);
  vertex(244, 312);
  vertex(255, 313);
  vertex(261, 291);
  vertex(261, 279);
  vertex(258, 267);
  vertex(253, 249);
  endShape();
    
  //balloon
  stroke(0);
    strokeWeight(1);
  line(241, 337, 317, 226);
  line(241, 336, 238, 342);
  
  //hand
  noStroke();
  fill(255, 225, 204);
  beginShape();
  vertex(162, 313);
  vertex(157, 316);
  vertex(156, 329);
  vertex(158, 330);
  vertex(161, 319);
  vertex(163, 321);
  vertex(164, 324);
  vertex(166, 325);
  vertex(166, 320);
  vertex(167, 317);
  vertex(166, 312);
  endShape();
  
  beginShape();
  vertex(247, 319);
  vertex(246, 323);
  vertex(243, 328);
  vertex(241, 334);
  vertex(243, 334);
  vertex(248, 326);
  vertex(245, 335);
  vertex(241, 340);
  vertex(242, 341);
  vertex(250, 335);
  vertex(253, 318);
  vertex(245, 317);
  endShape();
  
  fill("black");
  beginShape();
  vertex(168, 300);
  vertex(177, 307);
  vertex(170, 320);
  vertex(159, 309);
  vertex(168, 300);
  endShape();
  
  beginShape();
  vertex(242, 310);
  vertex(250, 310);
  vertex(257, 311);
  vertex(260, 313);
  vertex(256, 321);
  vertex(248, 319);
  vertex(242, 320);
  vertex(241, 311);
  endShape();
  
  fill(252, 229, 114);
  circle(209, 297, 3);
  circle(209, 304, 3);
  circle(222, 296, 3);
  circle(222, 305, 3);
  
    //neck
  fill(237, 208, 187);
  beginShape();
  vertex(214, 233);
  vertex(215, 230);
  vertex(221, 230);
  vertex(223, 233);
  vertex(218, 236);
  vertex(213, 235);
  endShape();
  
  fill(255, 84, 54);
  beginShape();
  vertex(220, 234);
  vertex(227, 231);
  vertex(228, 239);
  vertex(218, 236);
  vertex(209, 239);
  vertex(209, 232);
  vertex(218, 235);
  endShape();
  
  fill(224, 74, 47);
  circle(218, 236, 7);
  
  //head
  fill(237, 208, 187);
  beginShape();
  vertex(230, 209);
  vertex(233, 210);
  vertex(234, 213);
  vertex(231, 217);
  vertex(225, 217);
  vertex(228, 209);
  endShape();
  
  fill(255, 225, 204);
  beginShape();
  curveVertex(215, 229); // control point
  curveVertex(215, 229);
  curveVertex(219, 229);
  curveVertex(229, 215);
  curveVertex(231, 207);
  curveVertex(227, 200);
  curveVertex(219, 195);
  curveVertex(210, 196);
  curveVertex(207, 200);
  curveVertex(206, 204);
  curveVertex(206, 210);
  curveVertex(210, 224);
  curveVertex(215, 229);
  curveVertex(215, 229); // control point
  endShape();
  
  beginShape();
  vertex(215, 229);
  vertex(219, 230);
  vertex(223, 227);
  vertex(231, 214);
  vertex(230, 205);
  vertex(217, 211);
  vertex(215, 222);
  vertex(212, 223);
  endShape();
  
  //hat
  fill(77, 92, 143);
  beginShape();
  vertex(206, 198);
  vertex(201, 171);
  vertex(210, 169);
  vertex(222, 168);
  vertex(233, 170);
  vertex(228, 198);
  vertex(214, 200);
  vertex(206, 199);
  endShape();
  
  //lines on hat
  fill("white");
  beginShape();
  vertex(230, 197);
  vertex(238, 173);
  vertex(231, 170);
  vertex(228, 197);
  vertex(228, 197);
  endShape();
  
  beginShape();
  vertex(223, 197);
  vertex(226, 169);
  vertex(220, 169);
  vertex(220, 200);
  vertex(222, 199);
  endShape();
  
  beginShape();
  vertex(216, 199);
  vertex(215, 169);
  vertex(209, 170);
  vertex(213, 200);
  vertex(215, 200);
  endShape();
  
    beginShape();
  vertex(208, 199);
  vertex(202, 171);
  vertex(198, 172);
  vertex(206, 199);
  endShape();
  
  fill("black");
  beginShape();
  vertex(205, 208);
  vertex(195, 204);
  vertex(192, 200);
  vertex(192, 197);
  vertex(196, 196);
  vertex(209, 199);
  vertex(217, 199);
  vertex(231, 196);
  vertex(239, 196);
  vertex(242, 199);
  vertex(244, 205);
  vertex(243, 207);
  vertex(231, 209);
  vertex(230, 205);
  vertex(226, 200);
  vertex(218, 201);
  vertex(208, 201);
  vertex(206, 201);
  vertex(205, 208);
  endShape();
  
  //face
  ellipse(211, 209, 2, 4);
  ellipse(221, 209, 2, 4);
  
  stroke(0);
  strokeWeight(2);
  line(218, 206, 225, 205);
  line(212, 206, 207, 205);
  
  strokeWeight(1);
  line(215, 208, 214, 216);
  line(214, 216, 216, 218);
  line(216, 218, 218, 217);
  
  strokeWeight(2);
  line(213, 221, 219, 221);
  line(219, 221, 222, 219);
  line(212, 221, 210, 218);
  
  strokeWeight(1);
  line(215, 224, 218, 224);
  
  //balloon
  noStroke();
  fill(227, 63, 14);
  beginShape();
  vertex(316, 224);
  vertex(319, 227);
  vertex(316, 231);
  vertex(316, 234);
  vertex(311, 228);
  vertex(314, 227);
  vertex(315, 224);
  endShape();
  
  fill(247, 70, 17);
  beginShape();
  curveVertex(314, 222); // control point
  curveVertex(314, 222);
  curveVertex(318, 227);
  curveVertex(320, 228);
  curveVertex(325, 229);
  curveVertex(336, 229);
  curveVertex(353, 222);
  curveVertex(361, 211);
  curveVertex(365, 201);
  curveVertex(365, 187);
  curveVertex(357, 177);
  curveVertex(343, 169);
  curveVertex(333, 169);
  curveVertex(322, 176);
  curveVertex(314, 184);
  curveVertex(310, 196);
  curveVertex(310, 210);
  curveVertex(314, 222);
  curveVertex(314, 222); // control point
  endShape();
  
  fill("white");
  beginShape();
  vertex(338, 173);
  vertex(328, 177);
  vertex(321, 183);
  vertex(318, 187);
  vertex(322, 184);
  vertex(326, 180);
  vertex(331, 177);
  vertex(341, 174);
  vertex(337, 174);
  endShape();
  
//hot air balloon
  fill('white');
  beginShape();
  curveVertex(76, 283); // control point
  curveVertex(76, 283);
  curveVertex(68, 269);
  curveVertex(65, 259);
  curveVertex(66, 248);
  curveVertex(72, 241);
  curveVertex(82, 239);
  curveVertex(92, 241);
  curveVertex(98, 245);
  curveVertex(102, 251);
  curveVertex(102, 258);
  curveVertex(101, 265);
  curveVertex(92, 283);
  curveVertex(77, 284);
  curveVertex(77, 284); // control point
  endShape();
  
fill(227, 48, 16);
    beginShape();
  vertex(78, 240);
  vertex(73, 247);
  vertex(71, 258);
  vertex(74, 274);
  vertex(80, 285);
  vertex(74, 284);
  vertex(65, 266);
  vertex(64, 257);
  vertex(66, 248);
  vertex(71, 242);
  vertex(77, 239);
  endShape();

beginShape();
  vertex(81, 239);
  vertex(89, 240);
  vertex(97, 245);
  vertex(101, 249);
  vertex(103, 254);
  vertex(103, 262);
  vertex(98, 274);
  vertex(92, 285);
  vertex(86, 285);
  vertex(94, 266);
  vertex(96, 257);
  vertex(95, 253);
  vertex(90, 247);
  vertex(84, 243);
  vertex(80, 239);
  endShape();
  
  beginShape();
  vertex(79, 239);
  vertex(78, 251);
  vertex(79, 273);
  vertex(81, 284);
  vertex(84, 283);
  vertex(86, 266);
  vertex(84, 253);
  vertex(81, 240);
  vertex(79, 240);
  endShape();
  
  beginShape();
  vertex(77, 239);
  vertex(70, 243);
  vertex(66, 250);
  vertex(65, 257);
  vertex(68, 254);
  vertex(74, 242);
  endShape();
  
  beginShape();
  vertex(101, 250);
  vertex(99, 245);
  vertex(95, 242);
  vertex(89, 240);
  vertex(84, 240);
  vertex(97, 248);
  vertex(100, 253);
  vertex(100, 250);
  endShape();
  
  fill(107, 91, 79);
  beginShape();
  vertex(92, 283);
  vertex(85, 285);
  vertex(75, 283);
  vertex(77, 287);
  vertex(83, 288);
  vertex(91, 287);
  vertex(94, 283);
  vertex(91, 284);
  endShape();
  
  stroke(0);
  strokeWeight(1);
  line(66, 269, 77, 272);
  line(77, 272, 90, 272);
  line(90, 272, 99, 270);
  
  line(77, 272, 81, 275);
  line(81, 275, 85, 275);
  line(85, 275, 87, 272);
  line(87, 272, 91, 275);
  line(91, 275, 95, 275);
  line(95, 275, 98, 271);
  line(77, 272, 75, 275);
  line(75, 275, 70, 274);
  line(70, 274, 66, 269);
  
  line(79, 288, 81, 291);
  line(81, 291, 82, 294);
  line(90, 287, 88, 290);
  line(87, 291, 86, 295);
  
  noStroke();
  fill(107, 91, 79);
  beginShape();
  vertex(80, 294);
  vertex(82, 301);
  vertex(86, 301);
  vertex(88, 295);
  endShape();
  
  fill(0);
  noStroke();
  ellipse(84, 294, 10, 3);
  
  //canon
fill(201, 200, 199);
  beginShape();
  vertex(322, 512);
  vertex(322, 524);
  vertex(322, 538);
  vertex(324, 542);
  vertex(376, 543);
  vertex(378, 539);
  vertex(377, 511);
  vertex(374, 508);
  vertex(324, 507);
  vertex(322, 513);
  endShape();
  
  fill(176, 174, 172);
  beginShape();
  vertex(322, 523);
  vertex(376, 524);
  vertex(377, 524);
  vertex(378, 536);
  vertex(377, 543);
  vertex(374, 545);
  vertex(325, 544);
  vertex(323, 541);
  vertex(322, 524);
  endShape();
  
    stroke(158, 157, 155);
  strokeWeight(1);
  line(347, 524, 347, 537);
  line(361, 524, 361, 537);
  line(333, 524, 333, 537);
  line(374, 524, 374, 537);
  
  noStroke();
  fill(176, 174, 172);
  beginShape();
  vertex(345, 500);
  vertex(343, 506);
  vertex(344, 510);
  vertex(350, 513);
  vertex(355, 512);
  vertex(356, 509);
  vertex(355, 501);
  vertex(344, 494);
  vertex(345, 500);
  endShape();
  
  fill(138, 137, 136);
  circle(350, 505, 5);
  
  fill(255, 254, 252);
  beginShape();
  vertex(314, 488);
  vertex(383, 507);
  vertex(391, 481);
  vertex(321, 467);
  vertex(314, 488);
  endShape();
  
  fill(224, 100, 47);
  beginShape();
  vertex(337, 470);
  vertex(342, 476);
  vertex(350, 478);
  vertex(356, 481);
  vertex(356, 484);
  vertex(355, 482);
  vertex(345, 480);
  vertex(341, 482);
  vertex(341, 484);
  vertex(344, 486);
  vertex(351, 487);
  vertex(356, 488);
  vertex(362, 488);
  vertex(363, 487);
  vertex(361, 490);
  vertex(353, 491);
  vertex(343, 491);
  vertex(340, 492);
  vertex(336, 494);
  vertex(314, 488);
  vertex(321, 467);
  vertex(337, 470);
  endShape();
  
  beginShape();
  vertex(344, 489);
  vertex(342, 489);
  vertex(341, 493);
  vertex(344, 497);
  vertex(329, 492);
  vertex(334, 486);
  vertex(339, 486);
  endShape();
  
  beginShape();
  vertex(338, 481);
  vertex(344, 480);
  vertex(355, 482);
  vertex(344, 472);
  vertex(322, 467);
  vertex(322, 476);
  vertex(331, 479);
  endShape();
  
  fill(99, 98, 97);
  beginShape();
  vertex(322, 465);
  vertex(314, 489);
  vertex(311, 491);
  vertex(309, 490);
  vertex(320, 459);
  vertex(323, 459);
  vertex(324, 460);
  vertex(321, 467);
  endShape();
  
  beginShape();
  vertex(311, 489);
  vertex(310, 490);
  vertex(307, 488);
  vertex(307, 485);
  vertex(316, 459);
  vertex(318, 458);
  vertex(321, 458);
  vertex(322, 461);
  vertex(312, 488);
  endShape();
  
  beginShape();
  vertex(394, 478);
  vertex(389, 480);
  vertex(380, 510);
  vertex(381, 513);
  vertex(384, 514);
  vertex(387, 511);
  vertex(394, 488);
  vertex(394, 480);
  endShape();
  
  fill(237, 236, 235);
  beginShape();
  vertex(389, 508);
  vertex(394, 508);
  vertex(395, 491);
  vertex(394, 489);
  vertex(388, 509);
  endShape();

    stroke(0);
  strokeWeight(1);
  line(370, 477, 373, 474);
  line(373, 474, 376, 474);
  line(376, 474, 380, 471);
  
  line(383, 469, 385, 468);
  line(384, 472, 386, 473);
  line(379, 466, 380, 468);
  
  //ball
  noStroke();
  fill(252, 252, 250);
  circle(71, 551, 60);
  
  fill(247, 210, 59);
  beginShape();
  vertex(52, 528);
  vertex(54, 532);
  vertex(59, 536);
  vertex(66, 540);
  vertex(77, 542);
  vertex(87, 542);
  vertex(96, 540);
  vertex(98, 538);
  vertex(100, 544);
  vertex(100, 547);
  vertex(90, 550);
  vertex(76, 551);
  vertex(65, 549);
  vertex(54, 543);
  vertex(49, 538);
  vertex(46, 534);
  vertex(51, 528);
  endShape();
  
  fill(227, 79, 16);
  beginShape();
  curveVertex(41, 551); // control point
  curveVertex(41, 551);
  curveVertex(44, 555);
  curveVertex(52, 561);
  curveVertex(65, 566);
  curveVertex(78, 567);
  curveVertex(91, 567);
  curveVertex(98, 565);
  curveVertex(94, 570);
  curveVertex(90, 574);
  curveVertex(78, 575);
  curveVertex(62, 574);
  curveVertex(52, 570);
  curveVertex(43, 564);
  curveVertex(41, 558);
  curveVertex(41, 553);
  curveVertex(41, 553); // control point
  endShape();
  
  fill(242, 163, 36);
  beginShape();
  curveVertex(42, 548); // control point
  curveVertex(42, 548);
  curveVertex(47, 547);
  curveVertex(50, 549);
  curveVertex(52, 554);
  curveVertex(53, 557);
  curveVertex(58, 560);
  curveVertex(62, 559);
  curveVertex(67, 554);
  curveVertex(73, 553);
  curveVertex(78, 555);
  curveVertex(80, 559);
  curveVertex(82, 563);
  curveVertex(87, 565);
  curveVertex(94, 564);
  curveVertex(97, 559);
  curveVertex(101, 554);
  curveVertex(99, 563);
  curveVertex(96, 567);
  curveVertex(81, 568);
  curveVertex(68, 567);
  curveVertex(53, 562);
  curveVertex(41, 552);
  curveVertex(42, 548);
  curveVertex(42, 548); // control point
  endShape();
  
  //monkey
  fill(150, 116, 59);
  beginShape();
  vertex(71, 520);
  vertex(67, 522);
  vertex(66, 523);
  vertex(66, 526);
  vertex(71, 526);
  vertex(78, 522);
  vertex(79, 521);
  vertex(80, 509);
  vertex(81, 501);
  vertex(82, 496);
  vertex(85, 497);
  vertex(89, 497);
  vertex(93, 496);
  vertex(96, 504);
  vertex(99, 508);
  vertex(105, 511);
  vertex(109, 509);
  vertex(116, 507);
  vertex(117, 509);
  vertex(116, 513);
  vertex(118, 516);
  vertex(121, 516);
  vertex(123, 504);
  vertex(119, 500);
  vertex(112, 503);
  vertex(107, 504);
  vertex(102, 503);
  vertex(99, 498);
  vertex(96, 489);
  vertex(96, 481);
  vertex(75, 481);
  vertex(75, 491);
  vertex(72, 519);
  endShape();
  
  beginShape();
  vertex(75, 493);
  vertex(73, 484);
  vertex(73, 474);
  vertex(96, 474);
  vertex(98, 486);
  vertex(96, 496);
  vertex(91, 491);
  vertex(77, 492);
  endShape();
  
  beginShape();
  vertex(95, 464);
  vertex(99, 467);
  vertex(105, 467);
  vertex(110, 466);
  vertex(114, 468);
  vertex(113, 473);
  vertex(107, 473);
  vertex(98, 471);
  vertex(95, 468);
  vertex(94, 465);
  endShape();
  
  beginShape();
  vertex(72, 468);
  vertex(68, 470);
  vertex(63, 469);
  vertex(57, 468);
  vertex(55, 470);
  vertex(56, 472);
  vertex(57, 474);
  vertex(69, 473);
  vertex(72, 471);
  vertex(73, 468);
  endShape();
  
  fill(168, 141, 94);
  beginShape();
  vertex(78, 460);
  vertex(89, 460);
  vertex(92, 474);
  vertex(91, 486);
  vertex(89, 488);
  vertex(87, 489);
  vertex(84, 490);
  vertex(80, 488);
  vertex(76, 481);
  vertex(77, 461);
  endShape();
  
  fill(181, 46, 9);
  beginShape();
  vertex(74, 459);
  vertex(72, 467);
  vertex(71, 478);
  vertex(73, 485);
  vertex(81, 484);
  vertex(78, 469);
  vertex(80, 461);
  vertex(73, 458);
  endShape();
  
  beginShape();
  vertex(88, 459);
  vertex(94, 459);
  vertex(97, 468);
  vertex(99, 481);
  vertex(98, 484);
  vertex(88, 483);
  vertex(89, 476);
  vertex(89, 470);
  vertex(86, 459);
  endShape();
  
  stroke(0);
  strokeWeight(2);
  line(72, 485, 59, 487);
  line(59, 487, 49, 483);
  line(49, 483, 42, 484);
  line(42, 484, 38, 488);
  line(38, 488, 37, 493);
  line(37, 493, 39, 498);
  line(39, 498, 48, 499);
  line(48, 499, 53, 496);


noStroke();
fill( 168, 141, 94);
circle(82, 442, 40);

fill(150, 116, 59);
  beginShape();
  vertex(64, 449);
  vertex(66, 442);
  vertex(69, 440);
  vertex(73, 438);
  vertex(78, 440);
  vertex(82, 444);
  vertex(82, 439);
  vertex(85, 436);
  vertex(90, 434);
  vertex(96, 436);
  vertex(102, 441);
  vertex(100, 433);
  vertex(94, 425);
  vertex(87, 422);
  vertex(77, 422);
  vertex(67, 428);
  vertex(64, 436);
  vertex(63, 442);
  vertex(64, 448);
  endShape();
  
  fill(161, 137, 95);
    beginShape();
  vertex(78, 462);
  vertex(85, 462);
  vertex(87, 461);
  vertex(87, 464);
  vertex(78, 465);
  vertex(78, 463);
  endShape();
  
  fill(201, 62, 20);
  beginShape();
  vertex(63, 431);
  vertex(73, 432);
  vertex(88, 430);
  vertex(98, 427);
  vertex(95, 422);
  vertex(85, 411);
  vertex(82, 406);
  vertex(87, 408);
  vertex(93, 409);
  vertex(94, 407);
  vertex(88, 404);
  vertex(81, 399);
  vertex(77, 402);
  vertex(74, 408);
  vertex(71, 414);
  vertex(68, 416);
  vertex(65, 423);
  vertex(63, 432);
  endShape();
  
  fill(252, 213, 121);
  circle(97, 408, 7);
  
  stroke(0);
  strokeWeight(2);
  line(70, 449, 71, 446);
  line(71, 446, 74, 444);
  line(72, 444, 79, 447);
  
  line(85, 445, 86, 441);
  line(86, 441, 89, 439);
  line(89, 439, 94, 443);
  
  strokeWeight(1);
  line(80, 455, 83, 456);
  line(84, 456, 87, 454);
  line(84, 455, 83, 452);
  
    fill(0);
  beginShape();
  vertex(83, 452);
  vertex(81, 450);
  vertex(84, 449);
  vertex(83, 452);
  endShape();
  
  noStroke();
  fill( 168, 141, 94);
  beginShape();
  vertex(101, 436);
  vertex(104, 435);
  vertex(107, 436);
  vertex(109, 440);
  vertex(107, 444);
  vertex(103, 445);
  vertex(102, 445);
  vertex(102, 439);
  vertex(102, 436);
  endShape();
  
  beginShape();
  vertex(63, 440);
  vertex(59, 442);
  vertex(58, 447);
  vertex(61, 451);
  vertex(65, 451);
  vertex(63, 447);
  vertex(63, 441);
  endShape();
  
  fill(252, 213, 121)
  circle(45, 440, 15);
  circle(48, 394, 15);
  circle(86, 366, 15);
  circle(118, 416, 15);
}

function drawImpossible2() {

   //square
   fill(28, 214, 235);
   beginShape();
  vertex(514, 442);
  vertex(516, 436);
  vertex(517, 439);
  vertex(513, 444);
  endShape();
  
    beginShape();
  vertex(513, 442);
  vertex(516, 438);
  vertex(516, 440);
  vertex(513, 442);
  endShape();
    
    //tent
    noStroke();
fill("white");
  beginShape();
  vertex(554, 443);
  vertex(557, 444);
  vertex(560, 454);
  vertex(560, 463);
  vertex(551, 445);
  vertex(552, 443);
  endShape();
  
  beginShape();
  vertex(555, 442);
  vertex(558, 448);
  vertex(549, 448);
  vertex(554, 443);
  endShape();
  
  //canon
fill(224, 100, 47);
 beginShape();
  vertex(739, 487);
  vertex(738, 484);
  vertex(739, 483);
  vertex(739, 482);
  vertex(743, 480);
  vertex(738, 477);
  vertex(732, 485);
  vertex(731, 490);
  vertex(737, 489);
  endShape();
  
  beginShape();
  vertex(743, 487);
  vertex(738, 485);
  vertex(737, 482);
  vertex(732, 488);
  vertex(743, 489);
  endShape();
  
    beginShape();
  vertex(738, 483);
  vertex(740, 487);
  vertex(734, 487);
  vertex(737, 484);
  endShape();
  
  //pants
  fill(59, 156, 69);
  beginShape();
  vertex(558, 519);
  vertex(566, 522);
  vertex(579, 523);
  vertex(587, 521);
  vertex(598, 516);
  vertex(600, 529);
  vertex(560, 532);
  vertex(557, 520);
  endShape();
  
  beginShape();
  vertex(584, 522);
  vertex(598, 515);
  vertex(598, 526);
  vertex(582, 531);
  vertex(584, 523);
  endShape();
  
  //hat
  fill("black");
  beginShape();
  vertex(639, 206);
  vertex(640, 202);
  vertex(638, 198);
  vertex(635, 197);
  vertex(629, 201);
  vertex(634, 202);
  endShape();
  

  
}

function gradientHorizontal (startColor, endColor, startX, startY, w, h){
    
 for (let y = startY; y < h; y += h/h) {
    let thisColor = getColor (color (startColor), color (endColor), y, startY, h);
    fill (thisColor);
    noStroke();
    rect(startX, y, w, h/h);
 }
}