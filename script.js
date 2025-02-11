'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const setMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        setMessage('No number!');
    } else if (score === 0) {
        setMessage(`You lose, the number was ${number}!`);
        document.querySelector('body').style.backgroundColor =
            'rgb(197, 6, 6) ';
    } else {
        if (guess === number) {
            document.querySelector('.number').textContent = number;
            setMessage('Correct number!');
            document.querySelector('body').style.backgroundColor = '#3f8928';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }

            document.querySelector('.number').style.width = '30rem';
        } else {
            setMessage(guess > number ? 'Too high!' : 'Too low!');

            score--;
        }
    }

    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});
