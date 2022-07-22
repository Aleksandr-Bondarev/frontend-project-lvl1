import randomInteger from '../utils/randomInteger.js';
import { gameRounds } from '../index.js';

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

const gameDescripton = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstRandomInteger = randomInteger(1, 100);
  const secondIntegerFromOneToHundred = randomInteger(1, 100);

  const correctAnswer = String(greatestCommonDivisor(
    firstRandomInteger,
    secondIntegerFromOneToHundred,
  ));

  const question = `${firstRandomInteger} ${secondIntegerFromOneToHundred}`;

  return {
    question,
    correctAnswer,
  };
};

const gcdGame = (rounds) => {
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < rounds) {
    const round = generateRound();
    questionsAndAnswers.push(round);
  }

  return {
    gameDescripton,
    questionsAndAnswers,
  };
};

const gcdGameData = gcdGame(gameRounds);

export default gcdGameData;
