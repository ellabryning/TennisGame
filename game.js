var canvas; 
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 5;

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


window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    setInterval(function () {
        drawEverything();
        moveEverything();
    }, 1000/framesPerSecond);
};

function moveEverything () {
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
};

function drawEverything () {
    createRect(0, 0, canvas.width, canvas.height, 'black'); //Canvas
    createRect(0, 210, 10, 10, 'white'); //Left player paddle
    createCircle(ballX, 150, 10, 'green'); // Ball
};