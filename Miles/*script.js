class Turret {
    constructor(x, y, i, clr) {
        this.x = x;
        this.y = y;
        this.type = i;
        this.color = clr;
    }
    
    show() {
        push()
        translate(this.x, this.y);
        fill('gray')
        rect(0,13,60,10,0);
        fill(this.color);
        rect(0, 0, 40, 40);
        pop();
    }
    
    drag() {
        this.x = mouseX;
        this.y = mouseY;
    }
    
    drop() {
        fire(this.x,this.y);
        setInterval(fire, cooldowns[this.type], this.x, this.y);
    }
    
}

function fire(x, y) {
    ammo.push(new Ammo(x + 60, y + 18))
    
}

class Ammo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
    }
    hit(x,y,w,h){
    return collideRectCircle(x,y,w,h, this.x, this.y, 10);
    
    
    }
    show() {
        fill('gray')
        circle(this.x, this.y, 10);
    }
    
    move() {
        this.x += ammoSpeed;
    }
    
    despawn() {
        if (this.x > 600) return true;
    }
}

let shopYs = [30, 90, 160]
let cooldowns = [3000, 2000, 1000]
let prices = [5, 15, 25]
let colors = ["limegreen", "orange", "purple"]
let turrets = []
let ammo = []
let ammoSpeed = 5;


let dragTurret = null;
let redY=[-50]
let money=5
let blackX=[1000]
let  blackY=[130]

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("myCanvas");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  createConsole();
  
  disableArrowKeyScrolling();
}

function draw() {
    let speedFactor = 1 + millis() / 30000;
    let redSpawnRate = int(360 / speedFactor);
let blackSpawnRate = int(520 / speedFactor);
let redSpeed = 0.5 * speedFactor;
let blackSpeed = 3 * speedFactor;
    
  background('green');
 
 fill('tan')
 
 rect(200,0,100,700,)
 rect(200,100,500,100,)
rect(0,400,300,100,)



fill('gray')
rect(40,43,60,10,)
 fill("limegreen")
 rect(40,30,40,40,)
  fill('gray')
 rect(60,100,60,20)
 fill('orange')
 rect(40,90,40,40,)
 fill('gray')
 rect(60,170,60,10,)
 fill('purple')
rect(40,160,40,40,)
 fill('yellow')
 
 
 text("5",40,30,40,40,)
 text("15",40,90,40,40,)
 text("25",40,160.60,40,40.)
  text("drag the turrets to stop the blocks", 400, 400);
  
  text(money,400,300,300,500,)
  if(frameCount%60==0)money+=1
  if(frameCount%redSpawnRate==0)redY.push(-30)
  if(frameCount%blackSpawnRate==0){
      blackX.push(600)
      blackY.push(130)
  }
  
  for(let i = 0; i < redY.length; i += 1) {
    redY[i]+=redSpeed
    fill('red')
    rect(230,redY[i],30,30,)
    if (redY[i]>600){
        noLoop()
        text('you lose',300,300)
    }
    for (let j = 0; j < ammo.length; j += 1) {
        if (ammo[j].hit(230,redY[i],30,30)) {
            ammo.splice(j, 1);
            j--;
            redY.splice(i, 1);
            i--;
            break;
        }
    }
  }
  
  for(let i = 0; i < blackX.length; i += 1) {
    if (blackX[i] > 229) blackX[i]+=-blackSpeed;
    else blackY[i] += blackSpeed;
    
    fill('black')
    rect(blackX[i],blackY[i],30,30,)
     if (blackY[i]>600){
        noLoop()
        text('you lose',300,300)
    }
    for (let j = 0; j < ammo.length; j += 1) {
        if (ammo[j].hit(blackX[i],blackY[i],30,30)) {
            ammo.splice(j, 1);
            j--;
            blackX.splice(i, 1);
            blackY.splice(i, 1);
            i--;
            break;
        }
    }
  }
  
  if (dragTurret) dragTurret.show();
  
  for (let turret of turrets) {
      turret.show();
  }
  
  for (let i = 0; i < ammo.length; i += 1) {
      let one = ammo[i];
      one.move();
      one.show();
      if (one.despawn()) {
          ammo.splice(i, 1);
            i--;
      }
      
  }
  
  
  // Don't delete the following or the sketching code breaks
  drawMouseLines("black");
}

function mousePressed() {
    for ( let i = 0; i < 3; i++) {
        
        if (mouseIsInRect(40, shopYs[i], 30, 30)){
            if (money >= prices[i]) {
                money -= prices[i]
                dragTurret = new Turret(mouseX, mouseY, i, colors[i])
            }
        }
        
    }
}


function mouseDragged() {
    if (dragTurret) {
        dragTurret.drag();
    }
}

function mouseReleased() {
    if (dragTurret) {
        dragTurret.drop();
        turrets.push(dragTurret);
        dragTurret = null;
    }
}
function mouseIsInRect(x, y, w, h) {
    let isInLeft = mouseX > x;
    let isInRight = mouseX < x + w;
    let isInTop = mouseY > y;
    let isInBottom = mouseY < y + h;
    
    return isInLeft && isInRight && isInTop && isInBottom; // && means AND
}