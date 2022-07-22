import randomInteger from '../utils/randomInteger.js';
import { gameRounds } from '../index.js';

const gameDescripton = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const integerFromOneToHundred = randomInteger(1, 100);

  const question = `${integerFromOneToHundred}`;
  const correctAnswer = integerFromOneToHundred % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const evenGame = (rounds) => {
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

const evenGameData = evenGame(gameRounds);

export default evenGameData;
