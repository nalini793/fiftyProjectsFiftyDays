const textEl = document.getElementById("text");
const speed = document.getElementById("speed");

const text = "We love Programming!";
let idx = 1;
let speedValue = 300 / speed.value;

writeText();
function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speedValue);
}

speed.addEventListener("input", (e) => {
  speedValue = 300 / e.target.value;
});
