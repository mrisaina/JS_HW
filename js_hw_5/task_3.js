import users from "./fixture/users.js";

const getUsersWithGender = (users, genderReuqested) => {
  return users
    .filter(({ gender }) => {
      return gender === genderReuqested;
    })
    .map(({ name }) => {
      return name;
    });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
