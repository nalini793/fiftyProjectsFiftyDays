const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
let sizeEl = document.getElementById("size");
let colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let isPressed = false;
let x;
let y;
let currentColor;
let currentSize = 10;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, currentSize, 0, Math.PI * 2);
  ctx.fillStyle = currentColor;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = currentSize * 2;
  ctx.stroke();
}

colorEl.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

increaseBtn.addEventListener("click", () => {
  if (currentSize < 50) {
    currentSize += 5;
    size.innerHTML = currentSize;
    console.log(currentSize);
  }
});
decreaseBtn.addEventListener("click", () => {
  if (currentSize > 5) {
    currentSize -= 5;
    size.innerText = currentSize;
    console.log(currentSize);
  }
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
