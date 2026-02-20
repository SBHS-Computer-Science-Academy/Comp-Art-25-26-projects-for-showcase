let emojis = ["😂","😃","😭","🤩","🥯","🍔","🍟","🗿","😒","😊","📖", "📄", "📃", "📜"]//,"","","","","","","",""]
let lineWidth = 1
let stamp = ""
let drawing;
let backLayer;
let emojiAngle = 0;

let myPicker;
function stampOff() {
    stamp = ""
    myInput.value('');
    button.hide();
    drawingInstructions();
}
function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("myCanvas");
  
  drawing = createGraphics(600, 600);
  backLayer = createGraphics(600, 600);
  
 button = createButton("drawing mode");
  button.mouseClicked(stampOff);
  button.size(80, 60);
  button.position(500, 560);
  button.style("font-family", "Times new roman");
  button.style("font-size", "15px");
  button.hide();
  
  myInput = createInput();
  myInput.position(50, 590);
  myInput.size(100)
  myInput.mousePressed(stampOff);

  // Create a color picker and set its position.
  myPicker = createColorPicker('deeppink');
  myPicker.position(600,580);
  backLayer.textAlign(CENTER, CENTER);
  drawing.textAlign(CENTER, CENTER);
  drawing.angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  drawingInstructions();  
  
}

function draw() {
clear();
image(backLayer, 0, 0);
image(drawing, 0, 0);
// drawMouseLines()
textSize(24*lineWidth)
push();
translate(mouseX, mouseY);
rotate(emojiAngle);
let c = myPicker.value();
fill(c);
text(stamp, 0,0)
pop();
updateTextField();

}

function updateTextField() {
    let txt = myInput.value();
    if (txt != "") {
        button.show();
        stamp = txt;
    }
}

function keyPressed() {
    if (key == 1) lineWidth = 1;
    if (key == 2) lineWidth = 2; 
    if (key == 3) lineWidth = 3; 
    if (key == 4) lineWidth = 4; 
    if (key == 5) lineWidth = 5; 
    if (key == 6) lineWidth = 6; 
    if (key == 7) lineWidth = 7; 
    if (key == 8) lineWidth = 8; 
    if (key == 9) lineWidth = 9;
    if (key == 0) lineWidth = 10;
    if (key == 'c') {
        drawing.clear();
        drawEmojis();
    }
    drawing.noStroke()
    drawing.fill('white')
    drawing.rect(0, 0, 100,20)
    drawing.fill("black")
    drawing.textSize(12)
    drawing.text('size: ' + lineWidth, 40, 10)
}

function mouseClicked() {
    for(let i = 0; i < emojis.length; i += 1){
    
        if (mouseIsInCircle(20, i* 40 + 40, 25)) {
            stamp = emojis [i]
            button.show();
            stampingInstructions();
            myInput.value('');
            return
        }
    
    }
    
    drawing.textSize(24*lineWidth)
    drawing.push();
    drawing.translate(mouseX, mouseY);
    drawing.rotate(emojiAngle);
    drawing.fill(myPicker.value())
    drawing.text(stamp, 0,0)
    drawing.pop();

}

function drawingInstructions() {
    backLayer.clear();
    backLayer.textSize(12)
    backLayer.fill('black')
    backLayer.noStroke()
    backLayer.text("drag the mouse to draw.\nuse the number keys to change the line width"
        +"\ncolor picker for color \n press c to clear the canvas", 300, 550);
    backLayer.text('size: ' + lineWidth, 40, 10)
    
    drawEmojis();
  
}

function stampingInstructions() {
    backLayer.clear();
    
    backLayer.textSize(12)
    backLayer.fill('black')
    backLayer.noStroke()
    backLayer.text("press the mouse to stamp.\nScroll to rotate the stamp."
        +"\nnumber keys for size.\nNote: changing the stamp size will also change the line width.", 300, 550);
    backLayer.text('size: ' + lineWidth, 40, 10)
    
    drawEmojis();
}

function mouseIsInCircle(x, y, d) {
    return dist(x, y, mouseX, mouseY) < d / 2;
}

function drawEmojis(){
    backLayer.textSize(24)
for(let i = 0; i < emojis.length; i += 1){
        
    backLayer.text(emojis[i], 20, i* 40 + 40)
    
}

}


function mouseDragged() {
    if (stamp != ""){
        return
    }
      let c = myPicker.value();
  
  drawing.stroke(c);
  drawing.strokeWeight(lineWidth);
  drawing.line(pmouseX, pmouseY, mouseX, mouseY)
}

function mouseWheel(event) {
  // if (event.delta > 0) {
    emojiAngle += event.delta  ;
}