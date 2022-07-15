import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';

const greatestCommonDivisor = (numberOne, numberTwo) => {
  let result = numberOne;
  while (result > 0) {
    if (numberOne % result === 0 && numberTwo % result === 0) {
      return result;
    }
    result -= 1;
  }
  return result;
};

const gcdGame = () => {
  const gameDescripton = 'Find the greatest common divisor of given numbers.';

  const name = greetAndDescribe(gameDescripton);

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

    const userAnswer = Number(readlineSync.question('Your answer: '));

    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      counter,
      answersToWin,
    );

    if (!youAreWinnig) return;

    counter += 1;
  }
};

export default gcdGame;
