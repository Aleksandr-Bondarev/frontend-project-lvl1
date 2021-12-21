import readlineSync from 'readline-sync';

import randomInteger from './randomInteger.js';

import greatestCommonDivisor from './gcdFunction.js';

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  const answersToWin = 3;
  let counter = 0;
  while (counter < answersToWin) {
    const firstRandomInteger = randomInteger(1, 100);
    const secondIntegerFromOneToHundred = randomInteger(1, 100);
    const correctAnswer = greatestCommonDivisor(
      firstRandomInteger,
      secondIntegerFromOneToHundred,
    );
    console.log(
      `Question: ${firstRandomInteger} ${secondIntegerFromOneToHundred}`,
    );
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    }
    if (Number(userAnswer) !== correctAnswer) {
      console.log(
        `'${
          userAnswer
        }'`
          + `is wrong answer ;(. Correct answer was '${
            correctAnswer
          }'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === answersToWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gcdGame;
