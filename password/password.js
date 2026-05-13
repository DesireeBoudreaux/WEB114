// Desiree Boudreaux - October 29, 2025

let password = prompt("Enter your password:");

let atLeastEightChars = password.length >= 8;
let atLeastOneUppercase = password.match(/[A-Z]/);
let atLeastOneLowercase = password.match(/[a-z]/);
let atLeastOneNumber = password.match(/\d/);

if (atLeastEightChars && atLeastOneUppercase && atLeastOneLowercase && atLeastOneNumber) {
  console.log("You have unlocked the secret message: 'Congrats! You figured it out!'");
} else {
  console.log("Access denied! Your password doesn't meet the requirements.");
}
