import readlineSync from 'readline-sync';

import randomInteger from './randomInteger.js';

const calculations = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let counter = 0;
  const answersToWin = 3;

  while (counter < answersToWin) {
    const oneOfthree = randomInteger(1, 4);

    let operator = '+';
    if (oneOfthree === 1) {
      operator = '-';
    }
    if (oneOfthree === 2) {
      operator = '*';
    }

    const integerFromOneToHundred = randomInteger(1, 100);
    const secondIntegerFromOneToHundred = randomInteger(1, 100);

    console.log(
      `Question: ${integerFromOneToHundred}${operator}${secondIntegerFromOneToHundred}`,
    );

    const answer = readlineSync.question('Your answer: ');

    let correctAnswer;

    if (operator === '*') {
      correctAnswer = integerFromOneToHundred * secondIntegerFromOneToHundred;
    }
    if (operator === '-') {
      correctAnswer = integerFromOneToHundred - secondIntegerFromOneToHundred;
    }
    if (operator === '+') {
      correctAnswer = integerFromOneToHundred + secondIntegerFromOneToHundred;
    }

    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
      counter += 1;
    }
    if (correctAnswer !== Number(answer)) {
      console.log(
        `'${answer}'`
          + ' is wrong answer ;(. Correct answer was '
          + `'${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (counter === answersToWin) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default calculations;
