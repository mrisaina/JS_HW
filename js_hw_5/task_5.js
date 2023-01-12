import users from "./fixture/users.js";

const getUserWithEmail = (users, emailRequestes) => {
  return users.find(({ email }) => {
    return email === emailRequestes;
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
