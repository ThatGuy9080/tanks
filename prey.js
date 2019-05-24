class Prey{
 constructor(x,y,speed,spike=0){
   this.w=20
   this.h=20
   this.breedcount=0
   this.breedwait=random(800,2400)
   this.alive=true
   this.angle=0
   this.speed=speed
   if(spike==0){
     if(random(0,100)>95){
       this.spike=true
     }else{
       this.spike=false
     }
   }else{
     this.spike=spike
   }
   this.x=x
   this.y=y
   this.coords=[]
  }
  
  update(){
    this.angle=Math.random()*2*PI;
    this.breedcount++
    this.x += this.speed*Math.cos(this.angle)
    this.y += this.speed*Math.sin(this.angle)
    if(this.x<0){
      this.x=0;
    }else if(this.x>400-this.w){
      this.x=400-this.w
    }
    if(this.y<0){
      this.y=0;
    }else if(this.y>400-this.h){
      this.y=400-this.h
    }
  }
  
  draw(){
    if(this.spike){
      fill([255,165,0])
    }else{
      fill([255,255,255])
    }
    rect (this.x, this.y, this.w, this.h);
  }
}