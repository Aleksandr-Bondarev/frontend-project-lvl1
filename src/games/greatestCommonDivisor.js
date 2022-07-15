import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';
import askQuestion from '../askQuestion.js';

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

    const question = `Question: ${firstRandomInteger} ${secondIntegerFromOneToHundred}`;

    askQuestion(question);

    const userAnswer = Number(readlineSync.question('Your answer: '));

    counter += 1;

    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      counter,
      answersToWin,
    );

    if (!youAreWinnig) return;
  }
};

export default gcdGame;
