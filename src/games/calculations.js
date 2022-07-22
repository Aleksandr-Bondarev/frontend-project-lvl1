import randomInteger from '../utils/randomInteger.js';
import { gameRounds } from '../index.js';

const gameDescripton = 'What is the result of the expression?';

const generateRound = () => {
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

  const question = `${integerFromOneToHundred} ${operator} ${secondIntegerFromOneToHundred}`;

  let correctAnswer;

  switch (operator) {
    case '*':
      correctAnswer = integerFromOneToHundred * secondIntegerFromOneToHundred;
      break;
    case '-':
      correctAnswer = integerFromOneToHundred - secondIntegerFromOneToHundred;
      break;
    default:
      correctAnswer = integerFromOneToHundred + secondIntegerFromOneToHundred;
  }

  correctAnswer = String(correctAnswer);

  return {
    question,
    correctAnswer,
  };
};

const calculations = (rounds) => {
  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < rounds) {
    const round = generateRound();
    questionsAndAnswers.push(round);
  }

  return ({
    gameDescripton,
    questionsAndAnswers,
  });
};

const calculationsGameData = calculations(gameRounds);

export default calculationsGameData;
