const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blur = 30 - length * 3;
  background.style.filter = `blur(${blur}px)`;
});
