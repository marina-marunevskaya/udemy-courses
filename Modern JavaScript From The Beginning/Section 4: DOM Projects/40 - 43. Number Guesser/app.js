function getWinningNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// game values
let minNumber = 1,
    maxNumber = 10,
    winningNumber = getWinningNumber(minNumber, maxNumber),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNumberBlock = document.querySelector('.min-num'),
    maxNumberBlock = document.querySelector('.max-num'),
    guessButton = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// show min and max in UI
minNumberBlock.textContent = minNumber;
maxNumberBlock.textContent = maxNumber;

function setMessage (messageText, color = 'black') {
    message.style.color = color;
    message.textContent = messageText;
} 

function gameOver (won, messageText) {
    const color = won ? 'green' : 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    setMessage(messageText, color);

    // play again
    guessButton.value = 'Play again';
    guessButton.classList.add('play-again');
}

// listen for guess
guessButton.addEventListener(
    'click',
    () => {
        let guess = parseInt(guessInput.value);

        // validate
        if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
            setMessage(`Please enter a number between ${minNumber} and ${maxNumber}.`, 'red');
        }
        // check if correct guess
        else if (guess === winningNumber) {
            gameOver(true, `${winningNumber} is correct! You win!`);
        } else {
            // wrong number
            guessesLeft--;

            if (guessesLeft) {
                // game continues - answer wrong
                // change border color
                guessInput.style.borderColor = 'red';
                setMessage(`${guess} is incorrect. Guesses left: ${guessesLeft}.`, 'red');
                
                // clear input
                guessInput.value = '';
            } else {
                gameOver(false, `Game Over! You lost. The correct number was ${winningNumber}.`);
            }
        }
    }
);

// play again
game.addEventListener(
    'mousedown',
    event => {
        if (event.target.classList.contains('play-again')) {
            window.location.reload();
        }
    } 
);
