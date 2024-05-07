const url = "https://source.unsplash.com/random/";

const container = document.querySelector(".container");

const rows = 10;

for (let i = 1; i <= rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${url}${getRandomNr()}`;
  container.appendChild(img);
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
