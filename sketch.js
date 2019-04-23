let TANKSPEED = 5;
let BULLETSPEED = 10;
let BULLETSIZE = 5;
let TANKWIDTH = 100;
let TANKLENGTH = 50;
let COOLDOWN = 10;
let BULLETCOUNT=50;
let CANVASWIDTH = 500;
let CANVASHEIGHT = 500;
let Tanks = [];



function setup() {
  createCanvas(CANVASWIDTH, CANVASHEIGHT);
  angleMode(DEGREES);
  rectMode(CENTER);
  for (i = 0; i < 1; i++) {
    Tanks[i] = new Tank(75 + (100 * i), 50, 0);
  }
}



function draw() {
  background(0);
  for (let i in Tanks) {
    Tanks[i].update();
    Tanks[i].draw();
  }
}
