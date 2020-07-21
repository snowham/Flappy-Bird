var birds;
var pipe1;
var pipe2;
var pipe2Start;
var highScore;

function setup() {
    createCanvas(480, 560);
    bird = new Bird();
    pipe1 = new Pipe();
    pipe1.x = width + 200;
    pipe2 = new Pipe();
    pipe2.x = 3 / 2 * width + pipe2.w/2 + 200;
    if (!highScore) {
        highScore = 0;
    }
}

function draw() {
    background(51);
    if (bird.start) {
        bird.update(pipe1, pipe2);
        pipe1.update(bird);
        pipe1.show();
        pipe2.update(bird);
        pipe2.show();
        if (bird.isDead) {
            fill(0, 0, 255);
            text("Game Over", width/2, height/2-50);
            textSize(70);
            text("Restart - r", width/2, height/2+50);
            if (bird.score > highScore) {
                highScore = bird.score;
            }
        }
    }
    textAlign(LEFT, TOP);
    textSize(40);
    fill(255);
    text("Best: " + highScore.toString(), 0, 0);
    textAlign(CENTER, CENTER);
    textSize(70);
    bird.show();

    
}

function keyPressed() {
    if (key == ' ') {
        bird.jump();
    }
    if (key == 'r' && bird.isDead) {
        setup();
    }
}