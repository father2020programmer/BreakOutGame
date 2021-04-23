
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    x += dx;
    y += dy;

    wallBounce();
}

setInterval(draw, 10);