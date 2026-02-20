
// Holds Menu + Settings + Pause + HUD + Buttons 


var UI = {
  buttons: [],
  hoverIndex: -1
};

function ui_clearButtons() {
  UI.buttons = [];
}

function ui_addButton(label, x, y, w, h, onClick) {
  UI.buttons.push({ label: label, x: x, y: y, w: w, h: h, onClick: onClick });
}

function ui_pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function ui_handleClick(mx, my) {
  for (var i = 0; i < UI.buttons.length; i++) {
    if (ui_pointInRect(mx, my, UI.buttons[i])) {
      if (typeof UI.buttons[i].onClick === "function") {
        if (typeof sfx_click === "function") sfx_click();
        UI.buttons[i].onClick();
      }
      return true;
    }
  }
  return false;
}


function ui_drawButtons() {
  UI.hoverIndex = -1;

  for (var i = 0; i < UI.buttons.length; i++) {
    var b = UI.buttons[i];
    var hover = ui_pointInRect(mouseX, mouseY, b);
    if (hover) UI.hoverIndex = i;

    push();
    stroke(0);
    strokeWeight(2);
    fill(hover ? 245 : 230);
    rect(b.x, b.y, b.w, b.h, 10);

    noStroke();
    fill(20);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(b.label, b.x + b.w/2, b.y + b.h/2);
    pop();
  }
}

function ui_drawTitle(title, subtitle) {
  push();
  textAlign(CENTER, CENTER);
  fill(20);
  textSize(44);
  text(title, width/2, 120);
  textSize(16);
  fill(60);
  text(subtitle, width/2, 160);
  pop();
}

function ui_drawHUD(levelName, hearts, maxHearts) {
  push();
  noStroke();
  fill(255, 255, 255, 180);
  rect(0, 0, width, 54);
  pop();

  ui_drawHearts(18, 14, hearts, maxHearts);

  push();
  textAlign(CENTER, CENTER);
  fill(20);
  textSize(18);
  text(levelName, width/2, 27);
  pop();

  push();
  textAlign(RIGHT, CENTER);
  fill(60);
  textSize(14);
  text("Arrows/WASD • P/Esc=Pause", width - 12, 27);
  pop();
}

function ui_drawHearts(x, y, hearts, maxHearts) {
  var spacing = 28;

  for (var i = 0; i < maxHearts; i++) {
    var hx = x + i * spacing;

    push();
    translate(hx, y);
    noStroke();

    fill(240);
    rect(-2, -2, 24, 22, 6);

    if (i < hearts) fill(220, 40, 60);
    else fill(180);

    ellipse(8, 8, 10, 10);
    ellipse(16, 8, 10, 10);
    triangle(4, 10, 20, 10, 12, 20);

    pop();
  }
}

/* ------------------ builders ------------------ */

function ui_buildMenu(onPlay, onSettings, onCycleLevel, levelIndex, levelCount) {
  ui_clearButtons();
  var bw = 320, bh = 58;

  ui_addButton("Play", width/2 - bw/2, 240, bw, bh, onPlay);

  var label = "Level: " + (levelIndex + 1) + " / " + levelCount + " (click)";
  ui_addButton(label, width/2 - bw/2, 310, bw, bh, onCycleLevel);

  ui_addButton("Settings", width/2 - bw/2, 380, bw, bh, onSettings);
}

function ui_buildSettings(onToggleJumpscare, onBack, jumpscareOn) {
  UI.buttons = [];

  ui_addButton("Jumpscare: " + (jumpscareOn ? "ON" : "OFF"), 220, 250, 260, 55, onToggleJumpscare);
  ui_addButton("Back", 220, 320, 260, 55, onBack);
}


function ui_buildPause(onResume, onRestart, onQuit) {
  ui_clearButtons();
  var bw = 280, bh = 58;
  ui_addButton("Resume", width/2 - bw/2, 240, bw, bh, onResume);
  ui_addButton("Restart Run", width/2 - bw/2, 310, bw, bh, onRestart);
  ui_addButton("Quit to Menu", width/2 - bw/2, 380, bw, bh, onQuit);
}

function ui_buildGameOver(onRestart, onMenu) {
  ui_clearButtons();
  var bw = 300, bh = 58;
  ui_addButton("Restart Run", width/2 - bw/2, 310, bw, bh, onRestart);
  ui_addButton("Back to Menu", width/2 - bw/2, 380, bw, bh, onMenu);
}