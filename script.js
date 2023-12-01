const div = window.document.getElementById('app');
div.innerHTML = '<h2>Heads or Tails?</h2>';

let correctAnswer = '';


function startGame() {
    correctAnswer = Math.random() < 0.5 ? 'heads' : 'tails';
}

// function makeGuess() {
//     const userGuess = window.prompt('Enter your guess (heads or tails):').toLowerCase();

//     if (userGuess === 'heads' || userGuess === 'tails') {

//             if (userGuess === correctAnswer) {
//             window.alert('Congratulations! You guessed correctly');
//             startGame();
//             } else {
//             window.alert('Wrong guess. Try again.');
//             }
//     } else {
//       window.alert('Please enter a valid guess (heads or tails). No spacing needed.');
//     }
//   }

document.getElementsByTagName("button")[0].addEventListener("click", makeGuess)

//idea: wrap the if statement in a for loop such that it executes for until attempts are 
//less than three? //didn't work
let attempts = 0;
function makeGuess() {
 for (let i = 0; i < 3; i++) {
  const userGuess = window.prompt('Enter your guess (heads or tails):').toLowerCase();
    if (userGuess === 'heads' || userGuess === 'tails') {
      attempts++;
            if (userGuess === correctAnswer) {
            window.alert('Congratulations! You guessed correctly');
            startGame();
            } else {
            window.alert('Wrong guess. Try again.');
            startGame();
            }
    } else {
      window.alert('Please enter a valid guess (heads or tails). No spacing needed.');
    }
  }
}

//if statement 
// let attempts = 0;

// function makeGuess() {
//   if (attempts < 3) {
//       const userGuess = window.prompt('Enter your guess (heads or tails):').toLowerCase();

//       if (userGuess === 'heads' || userGuess === 'tails') {
//           attempts++;

//           if (userGuess === correctAnswer) {
//             window.alert('Congratulations! You guessed correctly');
//               startGame();
//           } else {
//               window.alert(`Wrong guess. Try again.`);
//           }
//       } else {
//         window.alert('Please enter a valid guess (heads or tails). No spacing needed.');
//       }
//   } else {
//       window.alert('You have reached the maximum number of attempts. Click "Start Game" to play again.');
//   }
// }