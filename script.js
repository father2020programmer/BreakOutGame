
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    x += dx;
    y += dy;

    drawBricks();
    wallBounce();
    drawPaddle();
    movePaddle();    
    collisionDetection();
    drawScore();
    drawLives();   
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let interval = setInterval(draw, 5);