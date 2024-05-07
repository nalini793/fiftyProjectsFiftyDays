const display = document.getElementById("display");
const tags = document.getElementsByTagName("input");
console.log(tags);

const data = users.map((user) => {
  return (
    <li>
      name: ${user.name} , password: ${user.password}, email:${user.email}
    </li>
  );
});

display.innerHTML = data;

// const handleClick = (e) => {
//   console.log(e);
// };

// const checkValues = (e) => {
//   if(e.currentTarget.value ==)
// }

const users = [{ name: "nalini", password: "dss", email: "fdjk" }];

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  save() {
    users.push(this);
  }

  filterUser(id) {
    //will return true if it contains same username
    return users.filter((user) => user.name === id);
  }
}
