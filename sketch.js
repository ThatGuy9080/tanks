let SPEED = 5;
let Tanks = [];
let Shooter = [];

function setup() {
  createCanvas(500, 500);
 angleMode(DEGREES);
  rectMode(CENTER);
  for(i=0;i<1;i++){
    Tanks[i]= new Rectangle(75+(100*i),50,0)
  }
  for(i=0;i<1;i++){
      Shooter[i]= new Bullet(0,0,20)
}
}



 function draw() {
  background(0); 
   for (i=0;i<Tanks.length;i++){
    Tanks[i].update();
    Tanks[i].draw();
   }
   if (keyCode === 74) {
     Shooter[i].update2();
     Shooter[i].draw2();
       }
   else {
   return false;
   }
 }