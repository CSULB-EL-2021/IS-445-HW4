const guessNbr = Math.floor(Math.random() * 100) + 1;

console.log(guessNbr)
let i = 1
for (; true; i++) {
  const userNbr = Number(prompt("Enter a number between 1 et 100"));
  if (userNbr === guessNbr) {
    break;
  } else if (userNbr > guessNbr) {
    alert("Too high, guess again");
  } else if (userNbr < guessNbr) {
    alert("Too low, guess again");
  }
}

console.log(`Correct! It took you ${i} attempts to guess the correct number`);
