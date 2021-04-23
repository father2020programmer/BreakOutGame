// const variables
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const brickRowCount = 7;
const brickColumnCount = 11;


// changable variables
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleX = (canvas.width-paddleWidth) / 2;
let paddleY = canvas.height-paddleHeight;
let rightPressed = false;
let leftPressed = false;
let bricks = [];
let score = 0;
