
// global variables to track position
let pacmanX = 30;
let pacmanY = 300;
let pacmanSize = 20;
let pacmanAngle = 0
let maze;
let thisHue = 0;

function preload() {
    maze = loadImage("https://codehs.com/uploads/49ef46a4b0b3d81609d3f0c434557437");
}

function setup() {
  maze.resize(0, 600);
  let myCanvas = createCanvas(maze.width, maze.height);
  myCanvas.parent("myCanvas");
  
  createConsole("rect");
  
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
    colorMode(RGB);
background ('Navy')
// image(maze, 0, 0);
drawMaze(thisHue);

incrementVariables();
drawpacman(pacmanX, pacmanY)

     moveWithKeys()
    drawMouseLines("white")
}


function drawpacman (x, y){
    
    push()
    translate(x, y)
    rotate(pacmanAngle)
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  let biteSize = 180 / 16;
  let startAngle = biteSize * sin(frameCount *6 ) + biteSize;
  let endAngle = 360 - startAngle;

  // Draw the arc.
  arc(0, 0, pacmanSize, pacmanSize, startAngle, endAngle, PIE);
  pop()


    
}


function drawMaze() {
    
    push();
    noStroke();
    colorMode(HSB);
    fill(thisHue, 100, 100);




rect(18,11, 17, 258);
rect(19, 7, 440, 25);
rect(20, 248, 87, 25);
rect(226, 29, 23, 38);
rect(72, 55, 124, 22);
rect(103, 106, -16, 105);
rect(191, 171, -31, 18);
rect(151, 115, 174, 19);
rect(227, 134, 21, 60);
rect(279, 58, 124, 18);
rect(315, 172, -33, 18);
rect(389, 108, -15, 104);
rect(442, 27, 19, 243);
rect(447, 251, -78, 19);
rect(213, 262, -50, 16);
rect(165, 276, 14, 63);
rect(178, 327, 132, 14);
rect(263, 260, 50, 19);
rect(297, 279, 14, 53);
rect(15, 321, 92, 17);
rect(15, 335, 20, 151);
rect(17, 485, 39, 16);
rect(17, 485, 39, 16);
rect(16, 472, 21, 116);
rect(37, 566, 423, 22);
rect(226, 530, 25, 40);
rect(371, 323, 88, 19);
rect(441, 339, 25, 237);
rect(104, 387, -19, 83);
rect(156, 402, 163, 18);
rect(227, 421, 18, 62);
rect(156, 463, 37, 20);
rect(72, 520, 122, 17);
rect(370, 387, 24, 84);
rect(284, 462, 35, 21);
rect(282, 519, 119, 20);
pop();
 // PIE fill mode with 5 vertices.
  arc(0, 0, 80, 80, 0, PI + QUARTER_PI, PIE, 5);
}

function incrementVariables() {
    pacmanX += 5 * cos(pacmanAngle);
    pacmanY += 5 * sin(pacmanAngle);
    
    if (checkHitbox() == false) {
        pacmanX -= 5 * cos(pacmanAngle);
        pacmanY -= 5 * sin(pacmanAngle);
    
    }
    
    
 if (pacmanX > 455) {
       pacmanX = 15;
     
    }
    if (pacmanX < 15) {
       pacmanX = 460;
     
    }
    
    thisHue = frameCount % 360;
}

function moveWithKeys() {
  if (keyIsDown(UP_ARROW)) {
      pacmanAngle = 270
  }
  if (keyIsDown(DOWN_ARROW)) {
      pacmanAngle = 90; 
  }
  if (keyIsDown(LEFT_ARROW)) {
      pacmanAngle = 180;
  }
  if (keyIsDown(RIGHT_ARROW)) {
      pacmanAngle = 0  
  }
}


function checkHitbox() {
   return checkPixel(pacmanX, pacmanY + pacmanSize/2) 
   && checkPixel(pacmanX, pacmanY - pacmanSize/2)
   && checkPixel(pacmanX + pacmanSize/2, pacmanY)
   && checkPixel(pacmanX - pacmanSize/2, pacmanY)
}
function checkPixel(x, y) {
    return get(x, y)[0] == 0 && get(x,y)[1] == 0 && get(x,y)[2] == 128
}