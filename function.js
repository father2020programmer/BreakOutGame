function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

function wallBounce(){
    if(y + dy > canvas.height || y + dy < 0){
        dy = -dy;
    }
    if(x + dx > canvas.width || x + dx < 0){
        dx = -dx;
    }
}