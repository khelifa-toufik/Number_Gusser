/*
GAMA FUNCTION:
player must guess a number between a min and max 
player gets a certain amount of guesses 
notify player of number of guesses remaining 
notify the player of the correct answer if loose
let the player choose to play again 
*/

// Game values 
let min = 10,
    max = 19,
    winningNum = getRndom(min, max),
    gussesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    play = document.querySelector('.play');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again functionality
// Event delegation
game.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('play')) {
        window.location.reload();
    }
});
//Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // check if won 
    if (guess === winningNum) {

        styleFun(true, `${winningNum} is correct, You WIN!`);
    } else {
        gussesLeft -= 1;
        if (gussesLeft === 0) {
            styleFun(false, `Game Over, correct answer was ${winningNum}`);

        } else {
            // change border color 
            guessInput.style.borderColor = 'red';
            //clear the input
            guessInput.value = '';
            //continue the game
            setMessage(`Number of guesses left is ${gussesLeft}`, 'red');
        }

    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function styleFun(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    // change border color 
    guessInput.style.borderColor = color;
    // set message
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.classList += 'play';

}

function getRndom(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}