import randomInteger from '../utils/randomInteger.js';

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

  const firstRandomInteger = randomInteger(1, 100);
  const secondIntegerFromOneToHundred = randomInteger(1, 100);
  const correctAnswer = greatestCommonDivisor(
    firstRandomInteger,
    secondIntegerFromOneToHundred,
  );

  const question = `Question: ${firstRandomInteger} ${secondIntegerFromOneToHundred}`;

  return {
    gameDescripton,
    question,
    correctAnswer,
  };
};

export default gcdGame;
