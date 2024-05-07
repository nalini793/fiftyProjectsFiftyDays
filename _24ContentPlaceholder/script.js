const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameAuthor = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random/150x150" alt="unsplash image">';
  title.innerHTML = "Lorem Ipsum";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at quos incidunt unde maxime esse nisi culpa eaque tempore cupiditate vitae minus asperiores quod, explicabo ipsam quis ab ex! Quaerat!";

  profile_img.innerHTML =
    '<img src="https://cdna.artstation.com/p/assets/images/images/021/935/626/large/irina-nikiforova-purple.jpg?1573507084" alt="profile image">';

  nameAuthor.innerHTML = "John Doe";
  date.innerHTML = "Nov 05, 2005";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
