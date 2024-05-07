const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];
let typeVar;
const typeNotif = ["Info", "Success", "Error"];
function getType() {
  const type = document.getElementsByName("type");
  type.forEach((option) => {
    if (option.checked) {
      typeVar = option.value;
    }
  });
}

button.addEventListener("click", () => {
  getType();
  createNotification(null, typeVar);
});

function createNotification(msg = null, type = null) {
  // console.log(msg, type);
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type);
  notif.innerText = msg ? msg : getRandomMsg();

  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
