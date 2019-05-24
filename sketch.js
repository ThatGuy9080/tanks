let TIMBREED=500
let Tim = [];
let Preys=[];


function setup() {
  createCanvas(400, 400);
  start=createButton("start")
  start.mousePressed(createPrey)
  preyCount=createInput()
  timSpeed=createSlider(1,15,1)
  preySpeed=createSlider(1,15,1)
  
  

}
function createPrey(){
  Tim=[]
  Preys=[]
  Tim[0] = new Predator(400,400,timSpeed.value());
  for(let i=0; i<preyCount.value(); i++){
    Preys[i] = new Prey(200,200,preySpeed.value());
  }
}


function draw() {
  background(220);
  for(let prey of Preys){
    if(prey.alive){
      prey.update()
      prey.draw()
      if(prey.breedcount>=prey.breedwait){
        Preys[Preys.length++]=new Prey(prey.x+10,prey.y+10,prey.speed,spike=prey.spike)
        prey.breedcount=0
      }
    }   
    for (let tim of Tim){
      if(tim.alive==true){
      if(prey.alive==true){
        let dis = (prey.x-tim.x)**2+(prey.y-tim.y)**2
        if(dis<300){
        if(collideRectRect(prey.x,prey.y,prey.w,prey.h,tim.x,tim.y,tim.w*tim.killcount/100,tim.h*tim.killcount/100)){
          if(prey.spike==true){
            tim.health-=1
          }
          prey.alive=false
          tim.killcount++   
        }
        }
        if(dis<tim.mindis){
          tim.mindis=dis
          tim.angle=Math.atan2(-tim.y+prey.y,-tim.x+prey.x)
        }
      }
      }
    }
  }
  for(let tim of Tim){
    if(tim.alive==true){
    tim.update()
    tim.draw()
    if(tim.killcount>=TIMBREED){
      Tim[Tim.length++]=new Predator(tim.x+10,tim.y+10,tim.speed,color=[random(0,255),random(0,255),random(0,255)])
      tim.killcount-=TIMBREED
    }
    }
  }
    
  circle (200,200,2); // this is center

}