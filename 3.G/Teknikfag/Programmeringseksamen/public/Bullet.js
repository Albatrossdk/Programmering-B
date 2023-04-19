class Bullet{
    constructor(x_, y_){
        this.x = x_;
        this.y = y_;
        this.speed = -10;
        this.r = 10;
    }

    display() {
        ellipseMode(CENTER);
        fill(255, this.a);
        ellipse(this.x, this.y, this.r * 2);
      }
    
    move() {
        this.y += this.speed
    }
}