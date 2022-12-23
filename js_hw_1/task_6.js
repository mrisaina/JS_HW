let input = prompt("Enter Number");
let total = 0;

// while (typeof input == "string") {
//   if (!isNaN(Number(input))) {
//     total += Number(input);
//   } else {
//     alert("Not a number entered, try again");
//   }
//   input = prompt("Enter Number");
// }

// added check if entered number contains spaces or is string contains only spaces
for (input; typeof input == "string"; input) {
  if (!isNaN(Number(input)) && input.trim().length !== 0) {
    total += Number(input);
  } else {
    alert("Not a number entered, try again");
  }
  input = prompt("Enter Number");
}

alert(`Total sum is ${total}`);
