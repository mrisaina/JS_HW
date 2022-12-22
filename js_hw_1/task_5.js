let country = prompt("Enter Country");
let credits;
let availability = 1;

switch (country.toUpperCase()) {
  case "CHINA":
    credits = 100;
    break;
  case "CHILE":
    credits = 250;
    break;
  case "AUSTRALIA":
    credits = 170;
    break;
  case "INDIA":
    credits = 80;
    break;
  case "JAMAICA":
    credits = 120;
    break;
  default:
    console.log("Delivery isn't available in your country!");
    availability = 0;
    break;
}

if (availability) {
  country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  console.log(`Delivery in ${country} will cost ${credits} of credits`);
}
