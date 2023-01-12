import users from "./fixture/users.js";

const calculateTotalBalance = (users) => {
  return users.reduce((total, { balance }) => {
    return total + Number(balance);
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
