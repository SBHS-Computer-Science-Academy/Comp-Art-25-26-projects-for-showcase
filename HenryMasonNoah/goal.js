class Goal
{
    constructor()
    {
        this.x = this.x
        this.y = this.y
    }
    display()
    {
        // rect(1651,657,26,-117)
        // rect(226,657,26,-117)
    }
    isClicked()
    {
        return this.isInRect(1651,657,26,-117)
    }
    isClicked1()
    {
        return this.isInRect1(226,657,26,-117)
    }
    isInRect()
    {
        return mouseX > 1651 && mouseX < 1677 && mouseY > 540 && mouseY < 657
    }
    isInRect1()
    {
        return mouseX > 226 && mouseX < 252 && mouseY > 540 && mouseY < 657
    }
    shootTo()
    {
        ball.shootTo(1663,600);
    }
    shootTo1()
    {
        ball.shootTo(240,600);
    }
}