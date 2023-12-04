/** @format */

let boughtTesla = true;
const yearOfTeslaPurchase = 2017;
let isUSCitizen = true;
let currentYear = 2018;
let ownYears;
const YEARS_TO_UPGRADE = 4;

if (boughtTesla && isUSCitizen) {
  ownYears = currentYear - yearOfTeslaPurchase;
  if (ownYears >= YEARS_TO_UPGRADE) {
    console.log("would you like an upgrade?s");
  } else {
    console.log("Are you satisfied with the car?");
  }
} else if (boughtTesla) {
  console.log("Would you like to move to the US? ");
} else {
  console.log("Are you interested in buying tesla?");
}
