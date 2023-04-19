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
var zakatPercentage=(0.025);
var userInput=+prompt("Enter your total wealth in USD:");
var result=(zakatPercentage*userInput);
alert("Your zakat value is "+result+"USD.")

// var name="mark";
// alert=(name)

// TASK 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.Use an if-else statement to check if the user's guess matches the secret number. Ifthe guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again ?

// ________TASK 3:___________________________________Answer__________________________________
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var guess = prompt("Guess the secret number (between 1 and 10)");

// if (guess == secretNumber) {
//   alert("Congratulations! You guessed the secret number");
// } else {
//   alert("Sorry, the secret number was " + secretNumber + ". Better luck next time!");
// }

