function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
}

function wallBounce(){
    if(y + dy < ballRadius){
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;         
        }else {
            alert('Game Over');
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095dd';
    ctx.fill()
    ctx.closePath();
}

function keyDownHandler(e) {
    if(e.key == 'Right' || e.key == 'ArrowRight'){
        rightPressed = true;
    }else if( e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.key == 'Right' || e.key == 'ArrowRight'){
        rightPressed = false;
    } else if(e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = false;
    }
}

function movePaddle(){
    if(rightPressed){
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed){
        paddleX -= 7;
        if(paddleX < 0){
            paddleX = 0;
        }
    }
}


// for placing the prics in rows and columns
for(var c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++){
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

function drawBricks(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            if(bricks[c][r].status == 1){
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }            
        }
    }
}

function collisionDetection(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            let b = bricks[c][r];
            if(b.status == 1){
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount){
                        alert("You Win!");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }            
        }
    }
}

function drawScore(){
    ctx.font = '20px Arial';
    ctx.fillStyle = "#0099dd";
    ctx.fillText('Score: ' + score, 30, 20);
}
