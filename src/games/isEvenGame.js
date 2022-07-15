import randomInteger from '../utils/randomInteger.js';

const isEvenGame = () => {
  const gameDescripton = 'Answer "yes" if the number is even, otherwise answer "no".';

  const integerFromOneToHundred = randomInteger(1, 100);

  const question = `Question: ${integerFromOneToHundred}`;

  const correctAnswer = integerFromOneToHundred % 2 === 0 ? 'yes' : 'no';

  return {
    gameDescripton,
    question,
    correctAnswer,
  };
};

export default isEvenGame;
