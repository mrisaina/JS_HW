let input;
const numbers = [];
let total = 0;

let number = prompt("Enter Number");

for (number; typeof number == "string"; input) {
  if (!isNaN(Number(number)) && number.trim().length !== 0) {
    input = Number(number);
    numbers.push(number);
    total += Number(input);
  } else {
    alert("Not a number entered, try again");
  }
  number = prompt("Enter Number");
}

console.log(`Total sum is ${total}`);
console.log(numbers);
