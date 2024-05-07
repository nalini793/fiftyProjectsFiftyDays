const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".rating-container");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.nextElementSibling
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  } else if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === "IMG"
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `<i class='fas fa-heart'></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to immprove our customer support</p>`;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
