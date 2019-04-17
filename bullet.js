class Bullet {
  constructor(x,y,angle){
   this.x=x
   this.y=y 
   this.angle=angle
  }
    update2(){
    if(keyIsDown(74)){
      this.x += SPEED*cos(this.angle)
      this.y += SPEED*sin(this.angle)
    }
  }

  draw2(){
    push()
    translate(this.x,this.y)
    this.x = this.x + 1;
    this.y = this.y + 1;
    rectMode(CENTER)
    circle(0,0,20)
    pop()
  }
}