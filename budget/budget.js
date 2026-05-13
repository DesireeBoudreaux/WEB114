//Step 1. Declaring Variables
let income = 2500;    //Household income
let rent = 750;    //Rent paid per month
let groceries = 650;    //Grocery bill estimated per month
let utilities =  300;    //Utility bill estimated per month

//Step 2. Calculate total expenses
let totalExpenses = rent + groceries + utilities;

//Step 3. Calculate remaining money
let remainingMoney = income - totalExpenses;

//Step 4. Calculate percentages
let rentPercentage = Math.max((rent / income) * 100, 0);    //Rent percentage using math.max to prevent negative result according to step 5
let groceriesPercentage = Math.max((groceries / income) * 100, 0);    //Grocery percentage using math.max to prevent negative result according to step 5

//Step 6. Output to console
console.log("Weekly pay: $" + (income / 4));
console.log("Total monthly expenses: $" + totalExpenses);
console.log("Remaining money: $" + remainingMoney);
console.log("Percentage spent on rent: " + rentPercentage + "%");
console.log("Percentage spent on groceries: " + groceriesPercentage + "%");