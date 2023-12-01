const div = window.document.getElementById('app');
div.innerHTML = '<h2>Heads or Tails.</h2>';

let correctAnswer = '';
let attempts = 0;

function startGame() {
    correctAnswer = Math.random() < 0.5 ? 'heads' : 'tails';
    attempts = 0;
}

function makeGuess() {
    const userGuess = window.prompt('Enter your guess (heads or tails):').toLowerCase();

    if (userGuess === 'heads' || userGuess === 'tails') {
      attempts++;

            if (userGuess === correctAnswer) {
            window.alert(`Congratulations! You guessed correctly in ${attempts} attempts.`);
            startGame();
            } else {
            window.alert(`Wrong guess. Try again.`);
            }
    } else {
      window.alert('Please enter a valid guess (heads or tails). No spacing needed.');
    }
  }

document.getElementsByTagName("button")[0].addEventListener("click", makeGuess)

