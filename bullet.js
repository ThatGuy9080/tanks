class Bullet {
  constructor(x,y,angle){
   this.x=x
   this.y=y 
   this.angle=angle
  }
  update(){
      this.x += SPEED*cos(this.angle)
      this.y += SPEED*sin(this.angle)
    
  }
  
  createBullet(x,y,angle){
    this.x=x  
    this.y=y
    this.angle=angle
  }

  draw(){
    push()
    translate(this.x,this.y)
    rectMode(CENTER)
    circle(0,0,20)
    pop()
  }
}