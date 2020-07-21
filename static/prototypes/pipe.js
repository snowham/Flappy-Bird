function Pipe() {
    this.space = 157.5;
    this.w = 85;
    this.velocity = 3.1;
    this.x = width;
    this.yMid = random(height-2*this.space) + this.space;

    // draw top and bottom pipes (rect, rect)
    this.show = function() {
        fill(0, 255, 0);
        rect(this.x, 0, this.w, this.yMid-(this.space/2));
        rect(this.x, this.yMid+(this.space/2), this.w, height-this.yMid-(this.space/2));
    }
  
    // used when the bird dies
    this.stop = function() {
        this.velocity = 0;
    }

    // update position, check if bird is dead
    this.update = function(bird) {
        this.x -= this.velocity;

        if (this.x+this.w < 0) {
            this.x = width;
            this.yMid = random(height-2*this.space) + this.space;
        }
        
        if (bird.isDead) {
            this.stop();
        }
    }
}
