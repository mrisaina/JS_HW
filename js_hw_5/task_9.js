import users from "./fixture/users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((start, end) => {
      start.friends.length - end.friends.length;
    })
    .map(({ name }) => {
      return name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
