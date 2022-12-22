const credits = 23580;
const pricePerDroid = 3000;
let amount = prompt("Enter Amount");

if (amount == null) {
  console.log("Canceled by the user");
} else {
  const totalPrice = pricePerDroid * amount;
  if (totalPrice > credits) {
    console.log("Not enough money on the account!");
  } else {
    const creditsLeftOnTheAccount = credits - pricePerDroid * amount;
    console.log(
      `You have bought ${amount} droids, ${creditsLeftOnTheAccount} credits left on the account`
    );
  }
}
