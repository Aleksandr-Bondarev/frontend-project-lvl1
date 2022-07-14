import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';

const calculations = () => {
  const gameDescripton = 'What is the result of the expression?';

  const name = greetAndDescribe(gameDescripton);

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
      `Question: ${integerFromOneToHundred} ${operator} ${secondIntegerFromOneToHundred}`
    );

    const userAnswer = Number(readlineSync.question('Your answer: '));

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

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      counter += 1;
    }
  
    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      counter,
      answersToWin
    );

    if (!youAreWinnig) return;
  }
};

export default calculations;
