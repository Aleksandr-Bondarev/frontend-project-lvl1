import randomInteger from '../utils/randomInteger.js';

const isPrime = (number) => {
  if (number === 1 || number === 2) {
    return true;
  }
  let divisor = Math.ceil(Math.sqrt(number));
  while (number % divisor !== 0) {
    divisor -= 1;
  }

  return divisor === 1;
};

const isPrimeGame = (rounds) => {
  const gameDescripton = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < rounds) {
    const someInteger = randomInteger(1, 100);

    const correctAnswer = isPrime(someInteger) === true ? 'yes' : 'no';
    const question = `Question: ${someInteger}`;

    questionsAndAnswers.push({
      question,
      correctAnswer,
    });
  }

  return {
    gameDescripton,
    questionsAndAnswers,
  };
};

export default isPrimeGame;
