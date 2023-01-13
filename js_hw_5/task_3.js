import users from "./fixture/users.js";

const getUsersWithGender = (users, genderReuqested) => {
  return users
    .filter(({ gender }) => gender === genderReuqested)
    .map(({ name }) => name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
