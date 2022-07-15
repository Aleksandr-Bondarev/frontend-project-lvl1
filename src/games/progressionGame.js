import randomInteger from '../utils/randomInteger.js';

const progressionGame = () => {
  const gameDescripton = 'What number is missing in the progression?';

  const progressionBeginner = randomInteger(1, 100);
  const progressionStep = randomInteger(1, 10);
  const indexOfMissedInteger = randomInteger(1, 11);
  const numberOfProgressionElements = 10;
  const coll = [progressionBeginner];

  for (let i = 0; i < numberOfProgressionElements; i += 1) {
    const newElement = coll[coll.length - 1] + progressionStep;
    coll.push(newElement);
  }
  const correctAnswer = coll[indexOfMissedInteger];
  coll[indexOfMissedInteger] = '..';

  const question = `Question: ${coll.join(' ')}`;

  return {
    gameDescripton,
    question,
    correctAnswer,
  };
};

export default progressionGame;
