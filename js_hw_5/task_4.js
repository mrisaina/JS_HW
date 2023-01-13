import users from "./fixture/users.js";

const getInactiveUsers = (users) => {
  return users.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
