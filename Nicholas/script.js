// this has level selector with settings and jumpsccare old console defines mousepressed
//edge detection = fire the action once the moment the input changes so checks differences
//tpCooldown is for the special kind of tp blocks
//tpMap = if tp at xy send user to newx,newy

//to do: add sfx, , fix levels 7 8 9 10, play through, debug
//READ RECENT NOTES
// ui has to load first so everythibg else works
// fix sfx.js


// var jumpSnd = null;
//labels for the screen
// helps do different stuff in draw depending on state
var STATE = {
  MENU: "menu",
  SETTINGS: "settings",
  PLAY: "play",
  PAUSE: "pause",
  GAMEOVER: "gameover"
};
//starting screen = menu
var gameState = STATE.MENU;


//player object is just the square that moves
//xy is top left wh is size speed is speed per frame
var player = {
  x: 45,
  y: 475,
  w: 90,
  h: 90,
  speed: 2
};


//run = overall run settings and stats
//memory for a game
var run = {
  menuLevelIndex: 0, //what level the menu selector is pointing at
  levelIndex: 0, //what level is currently being indexed / played

  heartsMax: 10, //max hearts
  hearts: 10, //DEFAULT current hearts

  tpCooldown: 0, // teleport cooldown so you cant spam tp blocks

  jumpscareOn: false, //default off of the jumpscare settings toggle
    godMode: false, // dev mode for me: H toggles invincible + noclip
  jumpscareTimer: 0, //countdown frames for jumpscare flash
deathCount: 0,

};

var currentLevel = null; //currentLevel holds the level object from levels.js (like walls spawn target, etc)

var INPUT = {
  prevMouseDown: false, //what mouse was doing last frame
  prevKeys: {} // what keys were doing last frame
};

// jumpscare stuff
var JSC = { img: null }; //the gif
var JUMPSCARE_FRAMES = 45; //how long it stays on screen
 
function triggerJumpscare() { // this function starts the jumpscare
    
    if (!run.jumpscareOn) return; //if setting is off, do nothing which is how it works
   run.deathCount++;
   if (run.deathCount % 3 !== 0) return;
    run.jumpscareTimer = JUMPSCARE_FRAMES; //start countdown of timer so drawPlay can show gif
 if (typeof sfx_jumpscare === "function") sfx_jumpscare();
    
}

function setup() {
  createCanvas(700, 600); //INTIAL
  
//   if (typeof loadSound === "function") {
//       jumpSnd = loadSound("jumpscare.mp3", function () {
//           if (jumpSnd && jumpSnd.playMode) jumpSnd.playMode("restart");
//           console.log("jumpscare.mp3 loaded");
//       }, function (e) {
//           console.log("FAILED to load jumpscare.mp3", e);
//       });
      
      
//   }
  
  
  textFont("Arial");

  // builds the menu button stuff (ui.js stores button hitboxes)
  // the ui draws settings playu and level selector buttons
  ui_buildMenu(startRun, openSettingsFromMenu, cycleMenuLevel, run.menuLevelIndex, levels_count());
  
  gameState = STATE.MENU; //start on menu screen
  
  if (typeof sfx_init === "function") sfx_init(); //links to sfx.js audio

JSC.img = loadImage(
    "jumpscare.gif",
    function(img){ JSC.img = img; },
    function(){ JSC.img = null; } //asdf fail go back to boo
    );


  // OLD METHOD: start console system here (only if console.js is loaded)
  // console then prints out stuff on click 
  if (typeof createConsole === "function") {
    createConsole("dots"); // "dots" prints x,y list; switch to "lines" if you want vertices output
  }
}

function draw() {
    //click detection and pause key edges stuff
  input_update();
  background(220);
//statements if on menu draw menu etc
  if (gameState === STATE.MENU) drawMenu();
  else if (gameState === STATE.SETTINGS) drawSettings();
  else if (gameState === STATE.PLAY) { updatePlay(); drawPlay(false); } // move player, check collisions, check win, draw level
  else if (gameState === STATE.PAUSE) { drawPlay(true); drawPauseOverlay(); } // draw leven dimmed, draw pause ui buttons
  else if (gameState === STATE.GAMEOVER) drawGameOver();


  //console stuff
  if (typeof consoleIsOn !== "undefined" && consoleIsOn && typeof drawMouseLines === "function") {
    drawMouseLines("white");
  }

 // ui click routing only sends clicks to the ui when ui is visible so it isnt buggy like last time like theres no invisible buttons
  if (INPUT.mouseClicked) {
    if (typeof audio_unlock === "function") audio_unlock(); //autoplay audio on browsers that block it
    ui_handleClick(mouseX, mouseY);
  }

//store previous input state for next frame (edge detection)
  input_commit();
}

/* ------------------ input ------------------*/

function input_update() {
    //mouseClicked = true for exactly 1 frame when press begins
  INPUT.mouseClicked = mouseIsPressed && !INPUT.prevMouseDown;
//edge detect P and ESC (so it toggles once, not every frame)
  INPUT.pWentDown = keyIsDown(80) && !INPUT.prevKeys[80];   // P
  INPUT.escWentDown = keyIsDown(27) && !INPUT.prevKeys[27]; // ESC
  
    // secret toggle: H (72)
  INPUT.hWentDown = keyIsDown(72) && !INPUT.prevKeys[72];

//this is so the godmode works on playstate
  if (INPUT.hWentDown && gameState === STATE.PLAY) {
    run.godMode = !run.godMode;


  }

}

function input_commit() {
    //remember mouse for next frame
  INPUT.prevMouseDown = mouseIsPressed;
  //remember keys for next frame
  INPUT.prevKeys[80] = keyIsDown(80);
  INPUT.prevKeys[27] = keyIsDown(27);
  
    INPUT.prevKeys[72] = keyIsDown(72); // H

}

/* ------------------ menu / settings ------------------ */

function cycleMenuLevel() {
    //when you click the level selectro button -> ncrement level index and wrap around
  run.menuLevelIndex++;
  if (run.menuLevelIndex >= levels_count()) run.menuLevelIndex = 0;
//remake the m enu buttons so the label updates
  ui_buildMenu(startRun, openSettingsFromMenu, cycleMenuLevel, run.menuLevelIndex, levels_count());
}

function startRun() {


run.jumpscareTimer = 0; //never carry jumpscare into a new run
run.deathCount = 0;
  run.hearts = run.heartsMax; //reset hearts
  run.levelIndex = run.menuLevelIndex; //set actual level to what menu selected

//   run.refilledAt5 = (run.levelIndex >= 4); //checkpoint logic: if you start at level 5 + then dont refill THIS IS A FIX 
//load level from levels.js
  loadLevel(run.levelIndex);
  respawn(); //go to spawn

  

  gameState = STATE.PLAY; //go into gameplay STATE**
  // DO NOT build pause UI here (prevents invisible hitboxes during play)
//pause ui isnt here anymore bc ui buttons have hitboxes and if exist during playing itll mess game up
    
}

function restartRun() {
    //same thing as startRun but doesnt go through menu
  run.hearts = run.heartsMax;
  run.levelIndex = run.menuLevelIndex;
  
  run.deathCount = 0;
  
  run.jumpscareTimer = 0; //never carry jumpscare into a new run

 

  loadLevel(run.levelIndex);
  respawn();

 

  gameState = STATE.PLAY;
}

function quitToMenu() {
    run.jumpscareTimer = 0; //never carry jumpscare into a new run
    //switch to menu and rebild menu buttons
  gameState = STATE.MENU;
  ui_buildMenu(startRun, openSettingsFromMenu, cycleMenuLevel, run.menuLevelIndex, levels_count());
}

function resumeGame() {
  
  gameState = STATE.PLAY;
}


function openSettingsFromMenu() {
    gameState = STATE.SETTINGS;
    ui_buildSettings(toggleJumpscare, closeSettings, run.jumpscareOn);
}



function openSettings(fromState) {
  run._settingsReturn = fromState; //save where user came from so back button knows where to return LOGIC / FROMSTATE
  gameState = STATE.SETTINGS; //switch to settings screen state
//build settings buttons with toggels
//ui.js draws the buttons and stores onclick functions
  ui_buildSettings(
    toggleJumpscare,
    closeSettings,
    run.jumpscareOn
  );
}

function closeSettings() { //wasd
    gameState = STATE.MENU;
    ui_buildMenu(startRun, openSettingsFromMenu, cycleMenuLevel, run.menuLevelIndex, levels_count());
}





function toggleJumpscare() {


  run.jumpscareOn = !run.jumpscareOn; //same thing / boolean thingy - this is for takeDamage
//rebuild settings text
if (!run.jumpscareOn) run.jumpscareTimer = 0; //if turn it off force timer to stop so it doesnt flash
 
  ui_buildSettings(toggleJumpscare, closeSettings, run.jumpscareOn);
    // AUDIO.musicMuted, AUDIO.sfxMuted, run.jumpscareOn);
}

/* ------------------ level logic ------------------ */

function loadLevel(index) {
  currentLevel = levels_get(index); //checks level.js for level data

//update player size for that level
  player.w = currentLevel.playerSize;
  player.h = currentLevel.playerSize;


//reset teleport cooldown
  run.tpCooldown = 0;
}

function respawn() {
    
    //put player at spawn point stored in currentLevel
  player.x = currentLevel.spawn.x;
  player.y = currentLevel.spawn.y;
}

function nextLevel() {
    



//move to next level
  run.levelIndex++;
  if (run.levelIndex >= levels_count()) run.levelIndex = 0;

//load + respwan
  loadLevel(run.levelIndex);
  respawn();
}

/* ------------------ play update ------------------ */

function updatePlay() {

  // pause toggle: if p or esc pressed this frame -> pause state
  if (INPUT.pWentDown || INPUT.escWentDown) {

  

    // swap state so draw() shows pause overlay
    gameState = STATE.PAUSE;

    // build pause buttons ONLY now so their hitboxes exist only when visible
    ui_buildPause(resumeGame, restartRun, quitToMenu);
    return;
  }

  // cooldown timers tick down each frame (tp + jumpscare flash)
  if (run.tpCooldown > 0) run.tpCooldown--;
  if (run.jumpscareTimer > 0) run.jumpscareTimer--;

  // basic input for movement
  // dx/dy are how much we move this frame
  var dx = 0, dy = 0;

  // arrows or WASD
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) dx += player.speed; // d
  if (keyIsDown(LEFT_ARROW)  || keyIsDown(65)) dx -= player.speed; // a
  if (keyIsDown(UP_ARROW)    || keyIsDown(87)) dy -= player.speed; // w
  if (keyIsDown(DOWN_ARROW)  || keyIsDown(83)) dy += player.speed; // s

  // actually apply movement to player position
  player.x += dx;
  player.y += dy;

  // collision check: if hit wall -> damage or teleport -> stop this frame
  if (checkWallsAndResolve()) return;

  // GOAL TOUCH CHECK (tap counts)
  // replace the old dist() stuff with this exact overlap check
  var tx = currentLevel.target.x, ty = currentLevel.target.y, ts = currentLevel.target.size || 100;

  var touchGoal =
    (player.x <= tx + ts) &&
    (player.x + player.w >= tx) &&
    (player.y <= ty + ts) &&
    (player.y + player.h >= ty);

  if (touchGoal) nextLevel();
}

function hitWallRect(rx, ry, rw, rh) {
  // inclusive overlap: touching edges counts as collision
  var ax1 = player.x, ay1 = player.y;
  var ax2 = player.x + player.w, ay2 = player.y + player.h;

  var bx1 = rx, by1 = ry;
  var bx2 = rx + rw, by2 = ry + rh;

  return (ax1 <= bx2 && ax2 >= bx1 && ay1 <= by2 && ay2 >= by1);
}

// checkWallsAndResolve()

function checkWallsAndResolve() {
    
      // if godMode, walls + teleports do nothing (noclip)
  if (run.godMode) return false;


  // grab the list of wall rectangles for THIS level
  // each wall is [x, y, w, h]
  var walls = currentLevel.walls;

  // loop every wall block and see if player touches it
  for (var i = 0; i < walls.length; i++) {
    var w = walls[i]; // w = one wall block

    // if player rectangle overlaps this wall rectangle, something happens
    if (hitWallRect(w[0], w[1], w[2], w[3])) {

      // --- teleport logic ---
      // tpMap is like: "x,y" -> [newX, newY]
      // we only treat 20x20 blocks as "teleporter blocks"
      if (currentLevel.tpMap && w[2] === 20 && w[3] === 20) {

        // make the lookup key based on this teleport block's top-left
        // rounding makes it not break if coords are like 456.5
        var key = Math.round(w[0]) + "," + Math.round(w[1]);

        // dest is the destination coords if this teleporter exists
        var dest = currentLevel.tpMap[key];

        // if teleporter exists AND we are not on cooldown, teleport now
        if (dest && run.tpCooldown === 0) {


          // actually move the player instantly
          player.x = dest[0];
          player.y = dest[1];

          // cooldown so we don't instantly re-teleport / loop forever
          run.tpCooldown = 10;

          // return true = "we collided with something, stop checking this frame"
          return true;
        }
      }

      // --- normal wall hit ---
      // not a teleporter (or teleport blocked by cooldown) => take damage
      takeDamage();

      // stop checking other walls this frame
      return true;
    }
  }

  // if we made it here, no walls were hit
  return false;
}

function takeDamage() {
  // invincible / god / dev mode
  if (run.godMode) return;



  // lose 1 heart asap
  run.hearts--;




  // if jumpscare toggle is on, start a short flash timer
//   if (run.jumpscareOn) run.jumpscareTimer = 18;

triggerJumpscare(); //start gif sound only if jumpscareOn is triggered

  // if hearts are gone -> game over screen
  if (run.hearts <= 0) {

 

    // switch state so draw() renders the gameover screen
    gameState = STATE.GAMEOVER;

    // build gameover buttons so clicking works
    ui_buildGameOver(restartRun, quitToMenu);
    return;
  }

  // otherwise just respawn back to start of level
  respawn();
}

function drawPlay(paused) {
  if (!currentLevel) return;
//draw the walls
  noStroke();
  fill(60);
  var walls = currentLevel.walls;
  for (var i = 0; i < walls.length; i++) {
    rect(walls[i][0], walls[i][1], walls[i][2], walls[i][3]);
  }
//draw goal square
  var tx = currentLevel.target.x, ty = currentLevel.target.y, ts = currentLevel.target.size || 100;
  fill(255, 220, 0);
  rect(tx, ty, ts, ts, 14);
//draw user square
  fill(255);
  rect(player.x, player.y, player.w, player.h);
//draw ui of hearts level and name, communicates w/ ui.js becasue ui.js draws hearts and text
  ui_drawHUD(currentLevel.name, run.hearts, run.heartsMax);

//bottom words
  push();
  fill(20);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Avoid walls. Reach the goal → next level.", width / 2, height - 24);
  pop();

  if (paused) { //dim overlay if paused (esc / p)
    push();
    noStroke();
    fill(0, 0, 0, 120);
    rect(0, 0, width, height);
    pop();
  }

  if (run.jumpscareOn && run.jumpscareTimer > 0) { //jumpscare if setting on -> flash overlay
    push();
    noStroke();
    
    //if gif is there draw it
    if (JSC.img) image(JSC.img, 0, 0, width, height);
    pop();
  }
  
 
  
}

function drawMenu() {
    //title text then buttons
  ui_drawTitle("Maze Game", "Pick a level, then Play");
  ui_drawButtons();
}

function drawSettings() {
  ui_drawTitle("Settings", "Toggles");
  ui_drawButtons();
}

function drawPauseOverlay() {
  ui_drawTitle("Paused", "Resume, restart, or quit");
  ui_drawButtons();
}

function drawGameOver() {
  background(30);
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(54);
  text("Game Over", width / 2, 170);
  textSize(18);
  fill(220);
  text("You ran out of hearts! Try again?", width / 2, 230);
  pop();
  ui_drawButtons();
}