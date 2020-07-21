function Bird() {
    this.start = false;
  
    this.y = height/2;
    this.x = 64;
    this.radius = 24;

    this.gravity = 0.6;
    this.velocity = 0;
  
    this.score = 0;
    this.earnedPoint = false;
  
    this.isDead = false;

    // draw bird (ellipse) and show score (text)
    this.show = function() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, 2*this.radius, 2*this.radius);
        fill(255);
        text(this.score, width/2, 70)
    }

    // jump by making velocity negative, then let gravity pull the bird down
    this.jump = function() {
        this.start = true;
        if (!this.isDead) {
            this.velocity = -10;
        }
    }

    // update gravity, check pipe collision, make sure bird is in its boundaries
    this.update = function(pipe1, pipe2) {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (!this.earnedPoint && (pipe1.x+pipe1.w>this.x>pipe1.x || pipe2.x+pipe2.w>this.x>pipe2.x)) {
            this.earnedPoint = true;
            this.score ++;
        }
        if (!(pipe1.x+pipe1.w>this.x>pipe1.x || pipe2.x+pipe2.w>this.x>pipe2.x)) {
            this.earnedPoint = false;
        }
        if (this.checkPipeCollision(pipe1, pipe2)) {
            this.isDead = true;
        }
        if (this.y > height) {
            this.isDead = true;
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < -4*this.radius) {
            this.y = -4*this.radius;
            this.velocity = 0;
        }
    }
    
    // return true if bird collides with pipe
    this.checkPipeCollision = function(pipe1, pipe2) {
        //pipe1 collision
        if ((this.x+this.radius > pipe1.x && this.x-this.radius < pipe1.x+pipe1.w) 
            && (this.y-this.radius < pipe1.yMid-(pipe1.space/2) || this.y+this.radius > pipe1.yMid+(pipe1.space/2))) {
            return true;
        } 
        // pipe2 collision
        else if ((this.x+this.radius > pipe2.x && this.x-this.radius < pipe2.x+pipe2.w) 
            && (this.y-this.radius < pipe2.yMid-(pipe2.space/2) || this.y+this.radius > pipe2.yMid+(pipe2.space/2))) {
            return true;
        } 
        // no collisions!
        else {
            return false;
        }
    }
}
