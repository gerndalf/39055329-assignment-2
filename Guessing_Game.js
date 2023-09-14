var correctNumber = Math.ceil(Math.random() * 10);
var didGuessCorrectly = false;

while (didGuessCorrectly == false) {
    var guess = prompt("What is the correct number?")

    if (parseInt(guess, 10) == correctNumber) {
        alert("That's correct!");
        didGuessCorrectly = true;
        break;
    }
}