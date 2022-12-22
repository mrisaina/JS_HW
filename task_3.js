const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let userPass = prompt("Enter Password");

if (userPass == null) {
  message = "Canceled by the user";
} else if (userPass == ADMIN_PASSWORD) {
  message = "Welcome!";
} else {
  message = "Access denied, incorrect passsword!";
}

console.log(message);
