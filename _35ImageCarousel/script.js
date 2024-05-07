const images = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
let currentImage = 0;

const run = () => {
  currentImage++;
  changeImage();
};
let interval = setInterval(run, 2000);

function changeImage() {
  if (currentImage > img.length - 1) {
    currentImage = 0;
  } else if (currentImage < 0) {
    currentImage = img.length - 1;
  }
  images.style.transform = `translateX(${-currentImage * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prevBtn.addEventListener("click", () => {
  currentImage--;
  changeImage();
  resetInterval();
});
nextBtn.addEventListener("click", () => {
  currentImage++;
  changeImage();
  resetInterval();
});
