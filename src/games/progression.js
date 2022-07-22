import randomInteger from '../utils/randomInteger.js';
import { gameRounds } from '../index.js';

const gameDescripton = 'What number is missing in the progression?';

const generateRound = () => {
  const progressionBeginner = randomInteger(1, 100);
  const progressionStep = randomInteger(1, 10);
  const indexOfMissedInteger = randomInteger(1, 11);
  const numberOfProgressionElements = 10;
  const coll = [progressionBeginner];

  for (let i = 0; i < numberOfProgressionElements; i += 1) {
    const newElement = coll[coll.length - 1] + progressionStep;
    coll.push(newElement);
  }
  const correctAnswer = String(coll[indexOfMissedInteger]);
  coll[indexOfMissedInteger] = '..';

  const question = `${coll.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

const progressionGame = (rounds) => {
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

const progressionGameData = progressionGame(gameRounds);

export default progressionGameData;
