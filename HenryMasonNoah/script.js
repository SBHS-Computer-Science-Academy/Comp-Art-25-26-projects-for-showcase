let colors;
let sprint = true
let offense
let sprintWinner
let ballX = 950;
let ballY = 850;
let passBall = false;
let shot
let outsideshot1
let outsideshot
let outsideShot
let outsideShot1
let awayTeam
let homeTeam
let homeTeamPostion1;
let homeTeamPostion2;
let homeTeamPostion3;
let homeTeamPostion4;
let homeTeamPostion5;
let homeTeamPostionSet;
let homeTeamGoalie;
let awayTeamPostion5;
let awayTeamPostion4;
let awayTeamPostion3;
let awayTeamPostion2;
let awayTeamPostion1;
let awayTeamPostionSet;
let awayTeamGoalie;
function setup()
{
   
    createCanvas(1905,980)
    background(220)
    sprintWinner = parseInt(random(1,3))
    homeTeamPostion1 = new Player(280,300,1)
    homeTeamPostion2 = new Player(280,370,1)
    homeTeamPostion3 = new Player(280,460,1)
    homeTeamPostion4 = new Player(280,730,1)
    homeTeamPostion5 = new Player(280,850,1)
    homeTeamPostionSet = new Player(280,620,1)
    homeTeamGoalie = new Player(1600,610,1)
    awayTeamPostion5 = new Player(1620,300,1)
    awayTeamPostion4 = new Player(1620,370,1)
    awayTeamPostion3 = new Player(1620,460,1)
    awayTeamPostion2 = new Player(1620,730,1)
    awayTeamPostion1 = new Player(1620,850,1)
    awayTeamPostionSet = new Player(1620,620,1)
    awayTeamGoalie = new Player(270,610,1)
    colors = ["red", "green", "blue","limegreen","blueviolet","orange","yellow"]
    stands()
    drawFan()
    homeTeam = [homeTeamPostion1,homeTeamPostion2,homeTeamPostion3,homeTeamPostion4,homeTeamPostion5,homeTeamPostionSet];
    awayTeam = [awayTeamPostion1,awayTeamPostion2,awayTeamPostion3,awayTeamPostion4,awayTeamPostion5,awayTeamPostionSet];
    ball = new Ball(950, 850, 5);
    goal = new Goal()
    text('The player uses the mouse to pass \nthe ball by clicking teammates and to shoot \nby clicking the goal. Possession switches automatically, \nand random outcomes determine sprint wins and shot results.',100,100)
}
function draw()
{
    pool()
    goal.display();
    ball.display();
    ball.pass();
    ball.shoot();
    laneline()
    playerDraw()
    sprintForBall()
    regularOffense()
    drawGoal()
    if(outsideShot === 1)
    {
        textSize(50)
        stroke('black')
        text('GOAL',900,500)
        afterGoal()
    }
    if(outsideShot === 2 || outsideShot === 3)
    {
        offense = false
    }
    if(outsideShot1 === 1)
    {
        textSize(50)
        stroke('black')
        text('GOAL',900,500)
        afterGoal()
    }
    if(outsideShot1 === 2 || outsideShot1 === 3)
    {
        offense = true
    }
}
function pool()
{
    push()
    fill(0,183,255)
    rect(200,250,1500,700)
    pop()
}
function drawGoal()
{
    push()
        noFill()
        beginShape();
        vertex(265,540);
        vertex(225,540);
        vertex(225,660);
        vertex(265,660);
        endShape();
        beginShape();
        vertex(1635,540);
        vertex(1675,540);
        vertex(1675,660);
        vertex(1635,660);
        endShape();
        pop()
}
function playerDraw()
{
    homeTeamPostion1.drawPlayer();
    homeTeamPostion2.drawPlayer();
    homeTeamPostion3.drawPlayer(); 
    homeTeamPostion4.drawPlayer(); 
    homeTeamPostion5.drawPlayer(); 
    homeTeamPostionSet.drawPlayer();
    homeTeamGoalie.drawPlayer();
    awayTeamPostion1.drawPlayer(); 
    awayTeamPostion2.drawPlayer();
    awayTeamPostion3.drawPlayer();
    awayTeamPostion4.drawPlayer();
    awayTeamPostion5.drawPlayer();
    awayTeamPostionSet.drawPlayer(); 
    awayTeamGoalie.drawPlayer();
}
function afterGoal()
{
    if(outsideShot === 1 || outsideShot1 === 1)
    {
        homeTeamPostion1.moveToAfterGoal1Right()
        homeTeamPostion2.moveToAfterGoal2Right()
        homeTeamPostion3.moveToAfterGoal3Right()
        homeTeamPostion4.moveToAfterGoal4Right()
        homeTeamPostion5.moveToAfterGoal5Right()
        homeTeamPostionSet.moveToAfterGoalSetRight()
        awayTeamPostion1.moveToAfterGoal1Left()
        awayTeamPostion2.moveToAfterGoal2Left()
        awayTeamPostion3.moveToAfterGoal3Left()
        awayTeamPostion4.moveToAfterGoal4Left()
        awayTeamPostion5.moveToAfterGoal5Left()
        awayTeamPostionSet.moveToAfterGoalSetLeft()
    }
}
function sprintForBall()
{
    if(sprint === true)
    {
        homeTeamPostion1.moveSprintPlayerLeft()
        homeTeamPostion2.moveSprintPlayerLeft()
        homeTeamPostion3.moveSprintPlayerLeft() 
        homeTeamPostion4.moveBallBackLeft() 
        homeTeamPostion5.moveSprinter()
        homeTeamPostionSet.moveSprintPlayerLeft() 
        awayTeamPostion1.moveSprinter() 
        awayTeamPostion2.moveBallBackRight()
        awayTeamPostion3.moveSprintPlayerRight()
        awayTeamPostion4.moveSprintPlayerRight()
        awayTeamPostion5.moveSprintPlayerRight()
        awayTeamPostionSet.moveSprintPlayerRight()
        if(frameCount > 130 && frameCount < 165)
        {
            if(sprintWinner === 1)
            {
                ball.move(-3, -3);
                if(frameCount === 164)
                {
                    offense = true
                }
            }
            if(sprintWinner === 2)
            {
               ball.move(3, -3);
                if(frameCount === 164)
                {
                    offense = false
                }
            }
        }
        if(frameCount === 165)
        {
            sprint = false
        }
    }
     
}
function regularOffense()
{
    if(offense === true)
    {
        homeTeamPostion1.moveToPostion1Right()
        homeTeamPostion2.moveToPostion2Right()
        homeTeamPostion3.moveToPostion3Right() 
        homeTeamPostion5.moveToPostion5Right()
        homeTeamPostionSet.moveToPostionSetRight()
        awayTeamPostion4.moveToDefense1Right()
        awayTeamPostion5.moveToDefense2Right()
        awayTeamPostionSet.moveToDefense3Right()
        awayTeamPostion1.moveToDefense4Right()
        awayTeamPostion2.moveToDefense5Right()
        awayTeamPostion3.moveToDefenseSetRight()
        if(frameCount > 300 && sprintWinner === 1)
        {
            homeTeamPostion4.moveToPostion4Right() 
            if(frameCount < 365)
            {
                ball.move(5, -2)
            }
        }
        if(frameCount > 366)
        {
            homeTeamPostion4.moveToPostion4Right()
        }
    }  
    if(offense === false)
    {
        homeTeamPostion1.moveToDefense4Left()
        homeTeamPostion2.moveToDefense5Left()
        homeTeamPostion3.moveToDefenseSetLeft()
        homeTeamPostion4.moveToDefense1Left()
        homeTeamPostion5.moveToDefense2Left()
        homeTeamPostionSet.moveToDefense3Left()
        awayTeamPostion1.moveToPostion1Left()
        awayTeamPostion3.moveToPostion3Left()
        awayTeamPostion4.moveToPostion4Left()
        awayTeamPostion5.moveToPostion5Left()
        awayTeamPostionSet.moveToPostionSetLeft()
        if(frameCount > 300 && sprintWinner === 2)
        {
            awayTeamPostion2.moveToPostion2Left() 
            if(frameCount < 375)
            {
                ball.move(-5, -2)
            }
        }
        if(frameCount > 376)
        {
            awayTeamPostion2.moveToPostion2Left()
        }
    }
    
}
function mouseClicked()
{
    if(offense === true)
    {
        for (let player of homeTeam) {
            if (player.isClicked()) 
            {
                player.passTo();
            }
            if(goal.isClicked())
            {
                goal.shootTo();
                outsideshot = [1,2,3];
                outsideShot = random(outsideshot)
            }
        }
    }
    if(offense === false)
    {
        for (let player of awayTeam) {
            if (player.isClicked()) 
            {
                player.passTo();
            }
            if(goal.isClicked1())
            {
                goal.shootTo1();
                outsideshot1 = [1,2,3];
                outsideShot1 = random(outsideshot1)
            }
        }
    }
}
function laneline()
{
    push()
    stroke('red')
    line(200, 300, 330, 300);  
    line(1700,300,1570,300)
    line(200, 900, 330, 900);  
    line(1700,900,1570,900)
    line(250,480,250,540)
    line(250,660,250,720)
    line(250,900,250,860)
    line(1650,480,1650,540)
    line(1650,660,1650,720)
    line(1650,900,1650,860)
    stroke('yellow')
    line(330, 300, 600, 300);  
    line(1570,300,1300,300)
    line(330, 900, 600, 900);  
    line(1570,900,1300,900)
    stroke('green')
    line(600, 300, 1300, 300);  
    line(600, 900, 1300, 900); 
    stroke('white')
    line(250,250,250,480)
    line(250,860,250,720)
    line(250,900,250,950)
    line(1650,860,1650,720)
    line(1650,900,1650,950)
    line(1650,250,1650,480)
    pop()
}
function drawFan() {
    
    for (let x = 0; x < 920; x += 70)
    {
      for (let y = 0; y < 100; y += 60)
      { 
        push()
        fill(random(colors))
        translate(x,y)
        beginShape();
        vertex(440, 99);
        vertex(483, 99);
        vertex(482, 62);
        vertex(439, 62);
        vertex(438, 95);
        endShape();
        fill('bisque')
        ellipse(460,45,40)
        pop()
      }
    }
}
function stands() 
{
    beginShape();
    vertex(435, 166);
    vertex(437, 86);
    vertex(1406, 82);
    vertex(1408, 163);
    endShape();
    line(436, 112, 1406, 108);
    line(437, 148, 1406, 141);
}
function cones() 
{
    push()
    fill('red')
    translate(-1000,-155)
    beginShape();
    vertex(1315, 400);
    vertex(1318, 385);
    vertex(1323, 385);
    vertex(1328, 401);
    vertex(1315, 401);
    endShape();
    pop()
    push()
    fill('yellow')
    translate(-726,-155)
    beginShape();
    vertex(1315, 400);
    vertex(1318, 385);
    vertex(1323, 385);
    vertex(1328, 401);
    vertex(1315, 401);
    endShape();
    pop()
    push()
    fill('green')
    translate(-22,-155)
    beginShape();
    vertex(1315, 400);
    vertex(1318, 385);
    vertex(1323, 385);
    vertex(1328, 401);
    vertex(1315, 401);
    endShape();
    pop()
    push()
    fill('yellow')
    translate(250,-155)
    beginShape();
    vertex(1315, 400);
    vertex(1318, 385);
    vertex(1323, 385);
    vertex(1328, 401);
    vertex(1315, 401);
    endShape();
    pop()
    push()
    fill('yellow')
    translate(250,570)
    beginShape();
    vertex(1315, 400);
    vertex(1318, 385);
    vertex(1323, 385);
    vertex(1328, 401);
    vertex(1315, 401);
    endShape();
    pop()
}