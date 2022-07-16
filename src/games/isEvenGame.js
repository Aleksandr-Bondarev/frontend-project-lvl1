import randomInteger from '../utils/randomInteger.js';

const isEvenGame = (rounds) => {
  const gameDescripton = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionsAndAnswers = [];

  while (questionsAndAnswers.length < rounds) {
    const integerFromOneToHundred = randomInteger(1, 100);

    const question = `Question: ${integerFromOneToHundred}`;

    const correctAnswer = integerFromOneToHundred % 2 === 0 ? 'yes' : 'no';

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

export default isEvenGame;
