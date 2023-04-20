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

var zakatPercentage = 0.025;   //%for zakat
var userInput = +prompt("To Calculate Zakat Enter your total wealth in USD:(Enter Number Value)");
alert("Your zakat value is " + zakatPercentage * userInput + " USD.");

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
  { name: "Wheat (Gandum)", price: 320 },
  { name: "Barley (Jau)", price: 800 },
  { name: "Dates (Khajoor)", price: 2800 },
  { name: "Raisins (Kishmish)", price: 6400 },
  { name: "Dates/ Ajwa Date", price: 10400 }
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

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name with the first letter capitalized (Make your name in capitalized case).

// _________________Task 4:________________Answer__________________
var entername = prompt("Enter your name:");

var capitalized = entername.charAt(0).toUpperCase() + entername.slice(1);

alert("Your name in capitalized case is: " + capitalized);

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and "contactNames". Using the prompt, you will ask the user to enter a contact number and contact name. You will then push these values into their respective arrays using the push method. After adding all the contacts, you will display the contact numbers and names in the console. To do this, you will need to use a for loop to iterate through both arrays and log each element to the console. 
// Make sure to use descriptive variable names and comment on your code for clarity.

// _________Task 5:________________Answer__________________
var contactNumbers = [];
var contactNames = [];

for (var i = 0; i < 3; i++) {
  var number = prompt("Enter your contact number:");
  var name = prompt("Enter your contact name:");
  contactNumbers.push(number);
  contactNames.push(name);
}

for (var i = 0; i < contactNumbers.length; i++) {
  console.log(`Contact ${i + 1}: ${contactNumbers[i]} (${contactNames[i]})`);
  alert(`Contact ${i + 1}: ${contactNumbers[i]} (${contactNames[i]})`);
}


// Task 6:
// Create an Array that contains different products, and get input from the user in which you ask your user to give the position of that element he/she wants. Now remove that Item from your array and console the removed item, Also display the remaining items in the array and total number of items remaining.

// ________________Task 6:_____________________Answer____________________
var products = ['Apple', 'Hockey', 'Orange', 'Cat', 'watermalon'];

var position = Number(prompt("Enter the position of the item you want to remove:\n0. Apple  \n1.Hockey  \n2.Orange \n3.Cat \n4.watermalon"));

var removedItem = products.splice(position, 1)[0];

console.log(`The removed item is ${removedItem}`);
alert(`The removed item is ${removedItem}`);

console.log(`The remaining items are ${products}`);
alert(`The remaining items are ${products}`);

console.log(`The total number of remaining items is ${products.length}`);
alert(`The total number of remaining items is ${products.length}`);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt function. The program should then use nested if-else statements to determine if the person is eligible to vote. 
// First, the program should check if the person is Pakistani or Indian. If they are not, the program should display a message saying they are not eligible to vote. 
// If they are Pakistani or Indian, the program should then check their gender. If the person is male and over the age of 18, they are eligible to vote. If the person is female and over the age of 18, the program should ask if they are married. If they are married, they are eligible to vote. If they are not married, they are not eligible to vote. 
// If the person is under 18, the program should display a message saying they are not eligible to vote.

// _______________Task 7:______________Answer________________________________

var nationality = prompt("What is your nationality? Enter 1 for Pakistani and 2 for Indian:");
var gender = prompt("What is your gender? Enter 1 for male and 2 for female:");
var age = Number(prompt("What is your age?"));

if (nationality == 1) {
  if (gender == 1 && age >= 18) {
    alert("You are eligible to vote!");
  } else if (gender == 2 && age >= 18) {
    var isMarried = prompt("Are you married? Enter 1 for yes and 2 for no:");
    if (isMarried == 1) {
      alert("You are eligible to vote!");
    } else {
      alert("You are not eligible to vote.");
    }
  } else {
    alert("You are not eligible to vote.");
  }
} else {
  alert("You are not eligible to vote.");
}
