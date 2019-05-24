class Predator{
 constructor(x,y,speed, color=0){
   this.w=20
   this.h=20
   this.health=50
   this.x=x
   this.y=y
   this.color=color
   this.killcount=0
   this.speed=speed
   this.alive=true
   this.angle=0
 }
  update(){
    this.mindis=10000000000
    if(this.health<=0){
      this.alive=false
    }
    this.x+=this.speed*Math.cos(this.angle)
    this.y+=this.speed*Math.sin(this.angle)
  }
  draw(){
    push()
    if(this.health<10){
      fill([255,0,0])
    }else if(this.color==0){
      fill([random(0,255),random(0,255),random(0,255)])
    }else{
      fill(this.color)
    }
    
    rect(this.x,this.y,this.w*(this.killcount/TIMBREED+1),this.h*(this.killcount/TIMBREED+1))
    pop()
  }
}