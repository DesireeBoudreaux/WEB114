// Ask for hourly wage
let hourlyWage = prompt("What is your hourly wage?");
let confirmWage = confirm("You entered $" + hourlyWage + " per hour. Is that correct?"); //Confirm hourly wage

// Ask for hours worked
let hoursWorked = prompt("How many hours did you work this week?");
let confirmHours = confirm("You worked " + hoursWorked + " hours. Is that correct?"); //Confirm hours worked

// Convert input to a numbers
hourlyWage = Number(hourlyWage);
hoursWorked = Number(hoursWorked);

// Calculate weekly earnings
let grossPay = hourlyWage * hoursWorked;

// Calculate tax at 20% rate
let taxAmount = grossPay * 0.20;

// Calculate net earnings
let finalWeeklyEarnings = grossPay - taxAmount;

// Display result in console with 2 decimal places
console.log("Your weekly earnings after taxes are: $" + finalWeeklyEarnings.toFixed(2));
