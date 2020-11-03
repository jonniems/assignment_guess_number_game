let guess;
let winner;

let name = prompt('Welkom! Hoe heet je?');
alert('Hey ' + name + '! Welkom bij Guess the Number!');

let min = parseInt(prompt('Kies de nummers waar tussen je wil gokken, eerst het laagste nummer:'));
let max = parseInt(prompt('Nu het hoogste nummer: '));
let guessesLeft = parseInt(prompt('Hoe vaak wil je maximaal gokken? '));

numberToGuess = Math.floor(Math.random() * (max - min)) + min;

while (guess !== numberToGuess && guessesLeft >= 1) {
    guess = parseInt(prompt('Voer een nummer in van ' + min + ' tot ' + max + ' om te gokken... Je mag het nog ' + guessesLeft + ' keer proberen'));
    alert('Je gokt op ' + guess + '...')
    if (guess < numberToGuess) {
        alert('Jammerrr! Je gok ' + guess + ' was te laag joh!');
        guessesLeft--;
    } else if (guess > numberToGuess) {
        alert('Nope! Je gok ' + guess + ' was te hoog');
        guessesLeft--;
    } else {
        alert('Woopwoop! Je hebt gewonnen, het was inderdaad: ' + numberToGuess);
        winner = true;
    }
};

if (winner) {
    alert('Ciao ' + name + '! Probeer het later nog eens!');
}
else {
    alert('Game over, LOSER! Probeer het later nog maar eens een keer!');
}