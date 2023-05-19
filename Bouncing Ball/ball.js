const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5;
let dy = 5;
let radius = 80;

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the ball
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Bounce the ball off the walls    
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    } 
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    // Move the ball
    x += dx;
    y += dy;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
setInterval(draw, 10);