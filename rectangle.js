class Rectangle{
 constructor(x,y,angle){
   this.x=x
   this.y=y
   this.angle=angle
 }
  update(){
    if(keyIsDown(DOWN_ARROW)){
      this.x -= SPEED*cos(this.angle)
      this.y -= SPEED*sin(this.angle)
     }
    if(keyIsDown(UP_ARROW)){
      this.x += SPEED*cos(this.angle)
      this.y += SPEED*sin(this.angle)
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.angle += 1
    }
    if(keyIsDown(LEFT_ARROW)){
      this.angle -= 1
    }
  }
  
  
  draw(){
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    rectMode(CENTER)
    rect(0,0,100,50)
    pop()
  }
}