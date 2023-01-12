import users from "./fixture/users.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => {
    return user.eyeColor === color;
  });
};

console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
