import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';

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
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    }
    if (Number(userAnswer) !== correctAnswer) {
      console.log(
        `'${userAnswer}'`
          + `is wrong answer ;(. Correct answer was '${correctAnswer}'`,
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
