const image = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");

image.addEventListener("dragstart", dragstart);
image.addEventListener("dragend", dragend);

for (const emp of empty) {
  emp.addEventListener("dragover", dragover);
  emp.addEventListener("dragenter", dragenter);
  emp.addEventListener("dragleave", dragleave);
  emp.addEventListener("drop", dragDrop);
}

function dragstart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragend() {
  this.className = "fill";
}
function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragleave() {
  console.log("drag leave");
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(image);
}
