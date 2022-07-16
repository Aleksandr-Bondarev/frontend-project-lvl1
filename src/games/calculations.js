import randomInteger from '../utils/randomInteger.js';

const calculations = (rounds) => {
  const questionsAndAnswers = [];

  const gameDescripton = 'What is the result of the expression?';

  while (questionsAndAnswers.length < rounds) {
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

    const question = `Question: ${integerFromOneToHundred} ${operator} ${secondIntegerFromOneToHundred}`;

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

    questionsAndAnswers.push({
      question,
      correctAnswer,
    });
  }

  return ({
    gameDescripton,
    questionsAndAnswers,
  });
};

export default calculations;
