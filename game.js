var canvas; 
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 5;

var paddle1Y = 250;
const paddleHeight = 100;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    setInterval(function () {
        drawEverything();
        moveEverything();
    }, 1000/framesPerSecond);

    canvas.addEventListener('mousemove',
        (evt) => {
            var mousePosition = calculateMousePosition(evt);
            paddle1Y = mousePosition.y-(paddleHeight/2);
        }
    )
};

function createRect (leftX, topY, width, height, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(leftX, topY, width, height); 
};

function createCircle (centerX, centerY, radius, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
};

function calculateMousePosition (evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
        return {
            x: mouseX,
            y: mouseY
        }
};  

function ballReset() {
    ballX = ballX + ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
};

function moveEverything () {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if(ballX < 0) {
      ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawEverything () {
    createRect(0, 0, canvas.width, canvas.height, 'black'); //Canvas
    createRect(0, paddle1Y, 10, paddleHeight, 'white'); //Left player paddle
    //createRect(0, paddle2Y, 10, paddleHeight, 'white'); //Right computer paddle
    createCircle(ballX, ballY, 10, 'white'); // Ball
};
