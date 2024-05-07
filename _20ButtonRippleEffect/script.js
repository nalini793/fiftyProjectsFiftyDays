const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log(xInside, yInside);
    const animation = document.createElement("span");
    animation.classList.add("circle");
    animation.style.top = yInside + "px";
    animation.style.left = xInside + "px";
    this.appendChild(animation);
    setTimeout(() => animation.remove(), 500);
  });
});
