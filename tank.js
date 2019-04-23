class Tank {
  constructor(x, y, angle) {
    this.x = x
    this.y = y
    this.angle = angle;
    this.health=100;
    this.bulletTimer = 0;
    this.bullets = []
    //Instantiates Bullets
    for (i = 0; i < BULLETCOUNT; i++) {
      this.bullets[i] = [false, 0, 0, 0];
    }
  }


  update() {

    //Backward Movement
    if (keyIsDown(DOWN_ARROW)) {
      this.x -= TANKSPEED * cos(this.angle)
      this.y -= TANKSPEED * sin(this.angle)
    }

    //Forward Movement
    if (keyIsDown(UP_ARROW)) {
      this.x += TANKSPEED * cos(this.angle)
      this.y += TANKSPEED * sin(this.angle)
    }

    //Turn Right
    if (keyIsDown(RIGHT_ARROW)) {
      this.angle += 2
    }

    //Turn Left
    if (keyIsDown(LEFT_ARROW)) {
      this.angle -= 2
    }

    //Changes Timer
    this.bulletTimer -= 1

    //Shoot Bullets
    if (keyIsDown(74)) {
      let checker = true
      for (let i in this.bullets) {
        if (!this.bullets[i][0] && checker && this.bulletTimer <= 0) {
          this.createBullet(i)
          this.bulletTimer = COOLDOWN
          checker = false
        }
      }
    }

    //Updates Active Bullets
    for (let i in this.bullets) {
      if (this.bullets[i][0]) {
        this.bullets[i][1] += BULLETSPEED * cos(this.bullets[i][3])
        this.bullets[i][2] += BULLETSPEED * sin(this.bullets[i][3])
      }
    }

  }

  createBullet(id) {
    this.bullets[id] = [true, this.x, this.y, this.angle]
  }

  killBullet(id) {
    this.bullets[id] = [false, 0, 0, 0]
  }


  draw() {
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    rect(0, 0, TANKWIDTH, TANKLENGTH)
    pop()

    for (let i in this.bullets) {
      if (this.bullets[i][1]<(-BULLETSIZE/2) || this.bullets[i][1]>(CANVASWIDTH+(BULLETSIZE/2)) || this.bullets[i][2]<(-BULLETSIZE/2) || this.bullets[i][2]>(CANVASHEIGHT+(BULLETSIZE/2))){
       this.killBullet(i); 
      }
      if (this.bullets[i][0]) {
        push()
        translate(this.bullets[i][1], this.bullets[i][2])
        circle(0, 0, BULLETSIZE)
        pop()
      }
    }
  }
}
