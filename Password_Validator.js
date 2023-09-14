var userPassword = prompt("Please enter a password.");
var passwordEnteredCorrectly = false;

do {
    var enteredPassword = prompt("Please re-enter your password.");
    if (enteredPassword == userPassword) {
        passwordEnteredCorrectly = true;
    }
} while (passwordEnteredCorrectly == false)