import users from "./fixture/users.js";

const getUserNames = (users) => {
  return users.map(({ name }) => {
    return name;
  });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
