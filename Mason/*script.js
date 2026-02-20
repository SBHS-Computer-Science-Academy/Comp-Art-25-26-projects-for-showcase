let ph1
let ph2
let ph3
let ph4
let dh1
let dh2
let dh3
let dh4
let ph1a
let ph2a
let ph3a
let ph4a
let dh1a
let dh2a
let dh3a
let dh4a
let valuedh1
let valuedh2
let valuedh3
let valuedh4
let valueph1
let valueph2
let valueph3
let valueph4
let hit = 0
let HIT = false
let start = true
let Sit = false
let H = 1
let R = 0
let T = false
let P = true
let money = 100
let win
let b = 0
let BE = false
let dealersHand
let CHV1
let CHV2
let CHV3
let CHVP
let V = true
let Z = true
let J = 0
let Q = true
function setup () {
    createCanvas(1890,930);
    background(0)
    ph1 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    ph2 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    ph3 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    ph4 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    dh1 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    dh2 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    dh3 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    dh4 = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    dealersHand = []
    playersHand = []
    Table()
    Hit()
    Card()
    Stand()
    Restart()
    bet()
    double()
}
function draw()
{
    if(start === true)
    {
        Table()
        Hit()
        Card()
        Stand()
        Restart()
        double()
        dealersHand = []
        playersHand = []
        hit = 0
        HIT = false
        start = true
        Sit = false
        H = 1
        R = 0
        T = false
        b = 0
        win = 0
        BE = false
        P = true
        V = true
        Z = true
        J = 0
        Q = true
        ph2a = random(ph2)
        ph1a = random(ph1)
        dh1a = random(dh1)
        dh4a = random(dh4)
        push()
        fill("white")
        strokeWeight(4)
        rect(600,600,140,200)
        rect(760,600,140,200)
        rect(600,100,140,200)
        pop()
        start = false
    }
    if(BE === true && P === true)
    {
        fill("black")
        textSize(50)
        text(ph1a,610,650)//card 1 for player
        text(ph1a,700,790)
            
        text(ph2a,770,650)//card 2 for player
        text(ph2a,860,790)
            
        text(dh1a,610,150)
        text(dh1a,700,290)
            
        valueph1 = getCardValue(ph1a);
        valueph2 = getCardValue(ph2a);
        playersHand.push(valueph1)
        playersHand.push(valueph2)
        P = false
    }
    bet()
    push()
    noStroke()
    fill("#4fad23")
    rect(1300,610,200,100)
    fill("black")
    textSize(50)
    text(money,1350,670)
    pop()
    if(hit === 1 && HIT === true)
    {
        ph3a = random(ph3)
        push()
        fill("white")
        strokeWeight(4)
        rect(920,600,140,200)
        pop()
        fill("black")
        textSize(50)
        text(ph3a,930,650)//card 2 for player
        text(ph3a,1020,790)
        valueph3 = getCardValue(ph3a)
        playersHand.push(valueph3)
        CHVP1 = calculateHandValue(playersHand)
        if(CHVP1 > 21)
        {
            textSize(50)
            text('PLAYER BUSTS',600,400)
            sit = true
            hit = 3
            R = 1
        }
        HIT = false
    }
    if(hit === 2 && HIT === true)
    {
        let ph4a = random(ph4)
        push()
        fill("white")
        strokeWeight(4)
        rect(1080,600,140,200)
        pop()
        fill("black")
        textSize(50)
        text(ph4a,1090,650)//card 2 for player
        text(ph4a,1180,790)
        valueph4 = getCardValue(ph4a)
        playersHand.push(valueph4)
        CHVP2 = calculateHandValue(playersHand)
        if(CHVP2 > 21)
        {
            hit = 3
            textSize(50)
            text('PLAYER BUSTS',600,400)
            sit = false
            R = 1
        }
        T = true
        HIT = false
    }
    if(Sit === true && H === 1)
    {
        hit = 3
        dh2a = random(dh2)
        dh3a = random(dh3)
        push()
        fill("white")
        strokeWeight(4)
        rect(760,100,140,200)
        pop()
        fill("black")
        textSize(50)
        text(dh2a,770,150)
        text(dh2a,860,290)
        valuedh1 = getCardValue(dh1a);
        valuedh2 = getCardValue(dh2a);
        dealersHand.push(valuedh1)
        dealersHand.push(valuedh2)
        print(dealersHand)
        CHV1 = calculateHandValue(dealersHand)
        if(CHV1 > 17 && CHV2 < 17)
        {
            Z = false
        }
        if(CHV1 < 17)
        {
            push()
            fill("white")
            strokeWeight(4)
            rect(920,100,140,200)
            pop()
            fill("black")
            textSize(50)
            text(dh3a,930,150)
            text(dh3a,1020,290)
            valuedh3 = getCardValue(dh3a)
            dealersHand.push(valuedh3)
            print(dealersHand)
            CHV2 = calculateHandValue(dealersHand)
            print(CHV2)
            J = 1
        }
        if(CHV2 < 17 && Z === true)
        {
            push()
            fill("white")
            strokeWeight(4)
            rect(1080,100,140,200)
            pop()
            fill("black")
            textSize(50)
            text(dh4a,1090,150)
            text(dh4a,1180,290)
            valuedh4 = getCardValue(dh4a)
            dealersHand.push(valuedh4)
            CHV3 = calculateHandValue(dealersHand)
            J = 2
        }
        CHVP3 = calculateHandValue(playersHand)
        print(dealersHand)
        print(playersHand)
        print(CHV3)
        print(CHV2)
        print(CHV1)
        print(CHVP3)
        if(CHV1 < 22 && CHV1 > CHVP3 && J === 0)
        {
            textSize(50)
            text('DEALER WINS',600,500)
        }
        else if(CHV2 < 22 && CHV2 > CHVP3  && J === 1)
        {
            textSize(50)
            text('DEALER WINS',700,500)
        }
        else if(CHV3 < 22 && CHV3 > CHVP3 && J === 2)
        {
            textSize(50)
            text('DEALER WINS',700,500)
        }
        else if(CHV3 === CHVP3  && J === 2)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        }
        else if(CHV2 === CHVP3 && J === 1)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        }
        else if(CHV1 === CHVP3 && J === 0)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        } 
        else if(CHV3 === CHVP3 && J === 2)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        }
        else if(CHV2 === CHVP3 && J === 1)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        }
        else if(CHV1 === CHVP3 && J === 0)
        {
            textSize(50)
            text('PUSH',700,600)
            win = 2
        }
        else if(CHV3 < CHVP3)
        {
            textSize(50)
            text('PLAYER WINS',700,400)
            win = 1
        }
        else if(CHV2 < CHVP3)
        {
            textSize(50)
            text('PLAYER WINS',700,400)
            win = 1
        }
        else if(CHV1 < CHVP3)
        {
            textSize(50)
            text('PLAYER WINS',700,400)
            win = 1
        }
        if(win === 1)
        {
            b = b * 1.5
            money = money + b
            win = 0
        }
        if(win === 2)
        {
            money = money + b
            win = 0
        }
        b = 0
        Sit = false
        H = 2
    }
}
function Table ()
{
    fill("#964B00")
    ellipse(910,450,1580,860)
    fill("#4fad23")
    ellipse(910,450,1540,820)
}
function Hit ()
{
    push()
    noFill()
    strokeWeight(3)
    stroke("#d4040b")
    rect(300,400,165,90)
    pop()
    fill("#d4040b")
    textSize(100)
    text("HIT",300,480)
}
function Stand ()
{
    push()
    noFill()
    strokeWeight(3)
    stroke("#d4040b")
    rect(1150,400,330,90)
    pop()
    fill("#d4040b")
    textSize(100)
    text("STAND",1150,480)
}
function Restart ()
{
    push()
    noFill()
    strokeWeight(3)
    stroke("#d4040b")
    rect(50,30,330,90)
    pop()
    fill("#d4040b")
    textSize(71)
    text("RESTART",50,100)
}
function Card ()
{
    push()
    fill("white")
    strokeWeight(4)
    rect(760,100,140,200)
    line(760,100,900,300)
    line(900,100,760,300)
    triangle(770,130,817,200,770,270)
    triangle(780,160,805,200,780,240)
    
    triangle(890,130,842,200,890,270)
    triangle(880,160,855,200,880,240)
    
    triangle(780,110,830,181,880,110)
    triangle(800,120,830,163,860,120)
    
    triangle(780,290,830,219,880,290)
    triangle(800,280,830,239,860,280)
    pop()
}
function double()
{
    push()
    noFill()
    strokeWeight(3)
    stroke("#d4040b")
    rect(310,350,150,40)
    pop()
    fill("#d4040b")
    textSize(31)
    text("DOUBLE",320,380)
}
function bet ()
{
    push()
    noFill()
    strokeWeight(3)
    stroke("#d4040b")
    rect(1580,700,300,120)
    fill("#d4040b")
    stroke("#d4040b")
    textSize(50)
    text("10",1580,810)
    text("25",1650,810)
    text("50",1720,810)
    text("100",1788,810)
    textSize(25)
    text("P L A C E",1600,730)
    text("B E T",1600,760)
    push()
    fill('black')
    strokeWeight(0)
    rect(1705,705,90,55)
    pop()
    textSize(50)
    text(b,1710,750)
    push()
    stroke('green')
    noFill()
    beginShape()
    vertex(1810,740)
    vertex(1830,760)
    vertex(1870,710)
    endShape()
    pop()
    line(1800,700,1800,768)
    line(1643,768,1643,820)
    line(1713,768,1713,820)
    line(1783,768,1783,820)
    line(1580,768,1880,768)
    pop()
}
function mouseClicked() {
        if(mouseX > 300 && mouseX < 465 && mouseY > 400 && mouseY < 490 && hit < 3 && T === false && BE === true)
        {
            hit = hit + 1
            HIT = true
        }
        if(mouseX > 1150 && mouseX < 1480 && mouseY > 400 && mouseY < 490 && R === 0 && BE === true)
        {
            Sit = true
        }
        if(mouseX > 50 && mouseX < 380 && mouseY > 30 && mouseY < 120 && hit === 3)
        {
            start = true
        }
        if(mouseX > 310 && mouseX < 460 && mouseY > 350 && mouseY < 390 && BE === true && money > b - 1 && hit < 3)
        {
            money = money - b
            b = b*2
            hit = hit + 1
            HIT = true
        }
        if(mouseX > 1580 && mouseX < 1643 && mouseY > 768 && mouseY < 820 && money > 9 && V === true)
        {
            b = b + 10
            money = money - 10
        }
        if(mouseX > 1643 && mouseX < 1713 && mouseY > 768 && mouseY < 820 && money > 24 && V === true)
        {
            b = b + 25
            money = money - 25
        }
        if(mouseX > 1713 && mouseX < 1783 && mouseY > 768 && mouseY < 820 && money > 49 && V === true)
        {
            b = b + 50
            money = money - 50
        }
        if(mouseX > 1783 && mouseX < 1880 && mouseY > 768 && mouseY < 820 && money > 99 && V === true)
        {
            b = b + 100
            money = money - 100
        }
        if(mouseX > 1800 && mouseX < 1880 && mouseY > 700 && mouseY < 768 && b > 9 && V === true)
        {
            BE = true
            V = false
        }
    }
    function getCardValue(card)//used perplexity on this part
    {
        if(card === 'J' || card === 'Q' || card === 'K') 
        {
            return 10;
        }
        if(card === 'A')
        {
            return 11
        }
        return parseInt(card);
}
function calculateHandValue(cards) //used perplexity on this part 
{
  let total = 0;
  let aceCount = 0;
  
  for (let i = 0; i < cards.length; i++) {
    let val = getCardValue(cards[i]);
    if (val === 11) {
      aceCount++;
    }
    total += val;
  }

  
  while (total > 21 && aceCount > 0) {
    total -= 10; 
    aceCount--;
  }
  return parseInt(total)
}