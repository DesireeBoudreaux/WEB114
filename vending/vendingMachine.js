//Desiree Boudreaux 11/3/2025

// Step 1. Ask for number of snacks
let snackCount = prompt("How many snacks do you want?");

if (snackCount === null) {
  console.log("No snacks requested. Exiting."); // If the user clicks Cancel, the program should exit immediately.
} else {
  snackCount = Number(snackCount); // Convert input to a number

  // Step 2. Create a for loop
  for (let i = 1; i <= snackCount; i++) {
    let snack = prompt("Enter snack #" + i + " name:");

    // Step 3. Handle Cancel Inside the Loop
    if (snack === null) {
      console.log("Snack selection canceled. Exiting.");
      break; // Check if the user clicks Cancel while entering a snack name, exit the loop using break.
    }

    // Step 4. Print Snack and Bonus Messages
    console.log("Snack #" + i + ": " + snack + " given to customer");

    /*if (i % 3 === 0) {
      console.log("🎉You got a bonus snack!🎉");
    }*/
   
    //Optional Challenge
    if (i % 2 === 0 || i % 5 === 0) {
      console.log("BONUS SNACK GIVEN! Enjoy your extra snack!")
    }
  }
}



