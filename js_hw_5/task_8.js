import users from "./fixture/users.js";

const getUsersWithFriend = (users, friendName) => {
  let res = [];
  users.filter((user) => {
    user.friends.filter((friend) => {
      if (friend === friendName) {
        res.push(user.name);
      }
    });
  });
  return res;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
