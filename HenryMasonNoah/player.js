class Player
{
    constructor(x,y,d)
    {
        this.x = x
        this.y = y
        this.d = d
    }
    drawPlayer()
    {
        push()
        translate(this.x,this.y)
        translate(-311,-400)
        fill('bisque')
        beginShape();
        curveVertex(298, 385); // control point
        curveVertex(298, 385);
        curveVertex(305, 392);
        curveVertex(317, 392);
        curveVertex(323, 384);
        curveVertex(322, 365);
        curveVertex(297, 364);
        curveVertex(298, 385);
        curveVertex(298, 385); // control point
        endShape();
        fill('skyblue')
        beginShape();
        curveVertex(296, 366); // control point
        curveVertex(296, 366);
        curveVertex(302, 356);
        curveVertex(320, 356);
        curveVertex(322, 366);
        curveVertex(320, 365);
        curveVertex(310, 361);
        curveVertex(295, 365);
        curveVertex(295, 365); // control point
        endShape();
        fill('bisque')
        beginShape();
        vertex(306, 393);
        vertex(306, 401);
        vertex(294, 407);
        vertex(293, 434);
        vertex(330, 433);
        vertex(330, 405);
        vertex(315, 400);
        vertex(316, 394);
        endShape();
        fill('bisque')
        beginShape();
        vertex(294, 413);
        vertex(270, 414);
        vertex(269, 424);
        vertex(294, 425);
        endShape();
        fill('bisque')
        translate(312,0)
        scale(-1,1)
        translate(-312,0)
        beginShape();
        vertex(294, 413);
        vertex(270, 414);
        vertex(269, 424);
        vertex(294, 425);
        endShape();
        circle(265,419,15)
        circle(359,420,20)
        translate(311,0)
        scale(-1,1)
        translate(-311,0)
        fill('bisque')
        beginShape();
        curveVertex(356, 411); // control point
        curveVertex(356, 411);
        curveVertex(359, 403);
        curveVertex(363, 404);
        curveVertex(362, 411);
        curveVertex(370, 410);
        curveVertex(372, 417);
        curveVertex(369, 431);
        curveVertex(358, 429);
        curveVertex(358, 429); // control point
        endShape();
        fill('bisque')
        beginShape();
        curveVertex(356, 411); // control point
        curveVertex(356, 411);
        curveVertex(359, 403);
        curveVertex(363, 404);
        curveVertex(362, 411);
        curveVertex(370, 410);
        curveVertex(372, 417);
        curveVertex(369, 431);
        curveVertex(358, 429);
        curveVertex(358, 429); // control point
        endShape();
        pop()
        // noFill()
        // rect(this.x - 60, this.y - 50,  130, 100)
    }
    isClicked()
    {
        return this.isInRect(this.x - 60, this.y - 50,  130, 100)
    }
    isInRect(x, y, w, h)
    {
        return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
    }
    moveToPostion1Right()
    {
        if(this.x > 1530)
        {
            this.x = this.x - 4
        }
        if(this.x < 1530)
        {
            this.x = this.x + 4
        }
         if(this.y > 420)
        {
            this.y = this.y - 4
        }
        if(this.y < 420)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion2Right()
    {
        if(this.x > 1250)
        {
            this.x = this.x - 4
        }
        if(this.x < 1250)
        {
            this.x = this.x + 4
        }
         if(this.y > 420)
        {
            this.y = this.y - 4
        }
        if(this.y < 420)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion3Right()
    {
        if(this.x > 1200)
        {
            this.x = this.x - 4
        }
        if(this.x < 1200)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion4Right()
    {
        if(this.x > 1250)
        {
            this.x = this.x - 4
        }
        if(this.x < 1250)
        {
            this.x = this.x + 4
        }
         if(this.y > 740)
        {
            this.y = this.y - 4
        }
        if(this.y < 740)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion5Right()
    {
        if(this.x > 1530)
        {
            this.x = this.x - 4
        }
        if(this.x < 1530)
        {
            this.x = this.x + 4
        }
         if(this.y > 740)
        {
            this.y = this.y - 4
        }
        if(this.y < 740)
        {
            this.y = this.y + 4
        }
    }
    moveToPostionSetRight()
    {
        if(this.x > 1530)
        {
            this.x = this.x - 4
        }
        if(this.x < 1530)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense1Right()
    {
        if(this.x > 1530)
        {
            this.x = this.x - 4
        }
        if(this.x < 1530)
        {
            this.x = this.x + 4
        }
         if(this.y > 470)
        {
            this.y = this.y - 4
        }
        if(this.y < 470)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense2Right()
    {
        if(this.x > 1300)
        {
            this.x = this.x - 4
        }
        if(this.x < 1300)
        {
            this.x = this.x + 4
        }
         if(this.y > 470)
        {
            this.y = this.y - 4
        }
        if(this.y < 470)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense3Right()
    {
        if(this.x > 1250)
        {
            this.x = this.x - 4
        }
        if(this.x < 1250)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense4Right()
    {
        if(this.x > 1300)
        {
            this.x = this.x - 4
        }
        if(this.x < 1300)
        {
            this.x = this.x + 4
        }
         if(this.y > 690)
        {
            this.y = this.y - 4
        }
        if(this.y < 690)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense5Right()
    {
        if(this.x > 1530)
        {
            this.x = this.x - 4
        }
        if(this.x < 1530)
        {
            this.x = this.x + 4
        }
         if(this.y > 690)
        {
            this.y = this.y - 4
        }
        if(this.y < 690)
        {
            this.y = this.y + 4
        }
    }
    moveToDefenseSetRight()
    {
        if(this.x > 1580)
        {
            this.x = this.x - 4
        }
        if(this.x < 1580)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    
    moveToPostion1Left()
    {
        if(this.x > 370)
        {
            this.x = this.x - 4
        }
        if(this.x < 370)
        {
            this.x = this.x + 4
        }
         if(this.y > 740)
        {
            this.y = this.y - 4
        }
        if(this.y < 740)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion2Left()
    {
        if(this.x > 600)
        {
            this.x = this.x - 4
        }
        if(this.x < 600)
        {
            this.x = this.x + 4
        }
         if(this.y > 740)
        {
            this.y = this.y - 4
        }
        if(this.y < 740)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion3Left()
    {
        if(this.x > 650)
        {
            this.x = this.x - 4
        }
        if(this.x < 650)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion4Left()
    {
        if(this.x > 600)
        {
            this.x = this.x - 4
        }
        if(this.x < 600)
        {
            this.x = this.x + 4
        }
         if(this.y > 420)
        {
            this.y = this.y - 4
        }
        if(this.y < 420)
        {
            this.y = this.y + 4
        }
    }
    moveToPostion5Left()
    {
        if(this.x > 370)
        {
            this.x = this.x - 4
        }
        if(this.x < 370)
        {
            this.x = this.x + 4
        }
         if(this.y > 420)
        {
            this.y = this.y - 4
        }
        if(this.y < 420)
        {
            this.y = this.y + 4
        }
    }
    moveToPostionSetLeft()
    {
        if(this.x > 370)
        {
            this.x = this.x - 4
        }
        if(this.x < 370)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense1Left()
    {
        if(this.x > 370)
        {
            this.x = this.x - 4
        }
        if(this.x < 370)
        {
            this.x = this.x + 4
        }
         if(this.y > 690)
        {
            this.y = this.y - 4
        }
        if(this.y < 690)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense2Left()
    {
        if(this.x > 550)
        {
            this.x = this.x - 4
        }
        if(this.x < 550)
        {
            this.x = this.x + 4
        }
         if(this.y > 690)
        {
            this.y = this.y - 4
        }
        if(this.y < 690)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense3Left()
    {
        if(this.x > 600)
        {
            this.x = this.x - 4
        }
        if(this.x < 600)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense4Left()
    {
        if(this.x > 550)
        {
            this.x = this.x - 4
        }
        if(this.x < 550)
        {
            this.x = this.x + 4
        }
         if(this.y > 470)
        {
            this.y = this.y - 4
        }
        if(this.y < 470)
        {
            this.y = this.y + 4
        }
    }
    moveToDefense5Left()
    {
        if(this.x > 370)
        {
            this.x = this.x - 4
        }
        if(this.x < 370)
        {
            this.x = this.x + 4
        }
         if(this.y > 470)
        {
            this.y = this.y - 4
        }
        if(this.y < 470)
        {
            this.y = this.y + 4
        }
    }
    moveToDefenseSetLeft()
    {
        if(this.x > 320)
        {
            this.x = this.x - 4
        }
        if(this.x < 320)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal1Right()
    {
        if(this.x > 900)
        {
            this.x = this.x - 4
        }
        if(this.x < 900)
        {
            this.x = this.x + 4
        }
         if(this.y > 340)
        {
            this.y = this.y - 4
        }
        if(this.y < 340)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal2Right()
    {
        if(this.x > 900)
        {
            this.x = this.x - 4
        }
        if(this.x < 900)
        {
            this.x = this.x + 4
        }
         if(this.y > 460)
        {
            this.y = this.y - 4
        }
        if(this.y < 460)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal3Right()
    {
        if(this.x > 950)
        {
            this.x = this.x - 4
        }
        if(this.x < 950)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal4Right()
    {
        if(this.x > 900)
        {
            this.x = this.x - 4
        }
        if(this.x < 900)
        {
            this.x = this.x + 4
        }
         if(this.y > 700)
        {
            this.y = this.y - 4
        }
        if(this.y < 700)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal5Right()
    {
        if(this.x > 900)
        {
            this.x = this.x - 4
        }
        if(this.x < 900)
        {
            this.x = this.x + 4
        }
         if(this.y > 820)
        {
            this.y = this.y - 4
        }
        if(this.y < 820)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoalSetRight()
    {
        if(this.x > 900)
        {
            this.x = this.x - 4
        }
        if(this.x < 900)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal1Left()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 340)
        {
            this.y = this.y - 4
        }
        if(this.y < 340)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal2Left()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 460)
        {
            this.y = this.y - 4
        }
        if(this.y < 460)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal3Left()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal4Left()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 700)
        {
            this.y = this.y - 4
        }
        if(this.y < 700)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoal5Left()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 820)
        {
            this.y = this.y - 4
        }
        if(this.y < 820)
        {
            this.y = this.y + 4
        }
    }
    moveToAfterGoalSetLeft()
    {
        if(this.x > 800)
        {
            this.x = this.x - 4
        }
        if(this.x < 800)
        {
            this.x = this.x + 4
        }
         if(this.y > 580)
        {
            this.y = this.y - 4
        }
        if(this.y < 580)
        {
            this.y = this.y + 4
        }
    }
    moveSprinter()
    {
        if(this.x > 950)
        {
            this.x = this.x - 5
        }
        if(this.x < 950)
        {
            this.x = this.x + 5
        }
         if(this.y > 850)
        {
            this.y = this.y - 5
        }
        if(this.y < 850)
        {
            this.y = this.y + 5
        }
    }
    moveBallBackLeft()
    {
        if(this.x > 850)
        {
            this.x = this.x - 4
        }
        if(this.x < 850)
        {
            this.x = this.x + 4
        }
         if(this.y > 730)
        {
            this.y = this.y - 4
        }
        if(this.y < 730)
        {
            this.y = this.y + 4
        }
    }
    moveBallBackRight()
    {
        if(this.x > 1050)
        {
            this.x = this.x - 4
        }
        if(this.x < 1050)
        {
            this.x = this.x + 4
        }
         if(this.y > 730)
        {
            this.y = this.y - 4
        }
        if(this.y < 730)
        {
            this.y = this.y + 4
        }
    }
    moveSprintPlayerLeft()
    {
        if(this.x > 750)
        {
            this.x = this.x - 3
        }
        if(this.x < 750)
        {
            this.x = this.x + 3
        }
    }
    moveSprintPlayerRight()
    {
        if(this.x > 1150)
        {
            this.x = this.x - 3
        }
        if(this.x < 1150)
        {
            this.x = this.x + 3
        }
    }
    passTo() 
    {
            ball.passTo(this.x, this.y);
    }
}