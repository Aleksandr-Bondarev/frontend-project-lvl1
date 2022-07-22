import randomInteger from '../utils/randomInteger.js';
import { gameRounds } from '../index.js';

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

const gameDescripton = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const someInteger = randomInteger(1, 100);

  const correctAnswer = isPrime(someInteger) === true ? 'yes' : 'no';
  const question = `${someInteger}`;

  return {
    question,
    correctAnswer,
  };
};

const primeGame = (rounds) => {
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

const primeGameData = primeGame(gameRounds);

export default primeGameData;
