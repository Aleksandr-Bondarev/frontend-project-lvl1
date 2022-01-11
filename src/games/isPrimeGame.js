import readlineSync from 'readline-sync';
import isPrime from '../isPrimeFunction.js';

import randomInteger from '../randomInteger.js';

const isPrimeGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const answersToWin = 3;
  let counter = 0;

  while (counter < answersToWin) {
    const someInteger = randomInteger(1, 100);
    const correctAnswer = isPrime(someInteger);
    console.log(`Question: ${someInteger}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    }
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}'`
          + `is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (counter === answersToWin) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default isPrimeGame;