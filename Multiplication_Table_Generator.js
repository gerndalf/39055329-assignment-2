var enteredNumber = prompt("Please provide a number.");
var finalTable = ""

for (let i = 1; i <= 10; i++) {
    finalTable += `\n${enteredNumber} X ${i} = ${enteredNumber * i}`;
}

alert(finalTable);