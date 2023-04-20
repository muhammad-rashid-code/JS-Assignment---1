// ____________rabbi zidni ilma__________________
// day 1
// 4/19/2023
// JS Assignment - 1
// Deadline : 21 Apr , 2023 11:59pm

// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable named "userInput" and take the input from the user using the prompt. Make sure the input value is of a type number by converting the input string to a number using a suitable method. Then, create a variable named "result" and assign its value to the multiplication of the zakat percentage and user input. Finally, use an alert message to display the calculated zakat value. The message should look like this: "Your zakat value is xxx".

// var zakatPercentage=(0.025);
// var userInput=+prompt("Enter Your Assets");
// console.log(zakatPercentage+userInput);
// ______________________________wrong

// var date=4/19/2023
// alert=(date)

// __Task 1________Answer______________



// TASK 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.Use an if-else statement to check if the user's guess matches the secret number. Ifthe guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again ?

// ________TASK 3:___________________________________Answer__________________________________
var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt("Guess the secret number (between 1 and 10)");

if (guess == secretNumber) {
  alert("Congratulations! You guessed the secret number");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Better luck next time!");
}

// day 2 4/20

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family members using the prompt and store the value in a variable called "familyMembers". Next, ask the user to choose a fitrah method by providing them options using the prompt, and store the selected method and its price in variables. Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members. Finally, display the calculated fitrah amount using an alert message.

// ____________Task 2:____________Answer____________________________

let familyMembers = parseInt(prompt("Enter the total number of family members:"));

let fitrahMethods = [
  {name: "Wheat (Gandum)", price: 320},
  {name: "Barley (Jau)", price: 800},
  {name: "Dates (Khajoor)", price: 2800},
  {name: "Raisins (Kishmish)", price: 6400},
  {name: "Dates/ Ajwa Date", price: 10400}
];

let selectedMethod = "";
let price = 0;
while (selectedMethod === "") {
  let methodInput = prompt(`Choose a fitrah method by entering the corresponding number:
  
  1. Wheat (Gandum) – Rs 320
  2. Barley (Jau) – Rs 800
  3. Dates (Khajoor) – Rs 2800
  4. Raisins (Kishmish) – Rs 6400
  5. Dates/ Ajwa Date – Rs 10400`);
  if (methodInput >= 1 && methodInput <= 5) {
    selectedMethod = fitrahMethods[methodInput - 1].name;
    price = fitrahMethods[methodInput - 1].price;
  } else {
    alert("Invalid fitrah method selected. Please enter a number between 1 and 5.");
  }
}

let fitrahAmount = price * familyMembers;

alert(`The fitrah amount for ${familyMembers} family members using ${selectedMethod} method is Rs ${fitrahAmount}.`);
