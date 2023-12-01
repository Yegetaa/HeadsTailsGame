const div = window.document.getElementById('app');
div.innerHTML = '<h2>Heads or Tails?</h2>';

let correctAnswer = '';


function startGame() {
    correctAnswer = Math.random() < 0.5 ? 'heads' : 'tails';
    return(correctAnswer);
}


let attempts = 0;
function makeGuess() {
 for (let i = 0; i < 3; i++) {
  const userGuess = window.prompt('Enter your guess (heads or tails):').toLowerCase();
    if (userGuess === 'heads' || userGuess === 'tails') {
      attempts++;
            if (userGuess === correctAnswer) {
            window.alert('Congratulations! You guessed correctly');
            break;
            } else {
            window.alert('Wrong guess. Try again.');
            }
    } else {
      window.alert('Please enter a valid guess (heads or tails). No spacing needed.');
    }
  }
  if (attempts = 3) {
  window.alert('You have reached the maximum number of attempts. Click "Start Game" to play again.')
  }
}

document.getElementsByTagName("button")[0].addEventListener("click", makeGuess)

