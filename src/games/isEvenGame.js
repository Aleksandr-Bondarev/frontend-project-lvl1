import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';
import askQuestion from '../askQuestion.js';

const isEvenGame = () => {
  const gameDescripton = 'Answer "yes" if the number is even, otherwise answer "no".';

  const name = greetAndDescribe(gameDescripton);

  let counter = 0;
  const answersToWin = 3;

  while (counter < answersToWin) {
    const integerFromOneToHundred = randomInteger(1, 100);

    const question = `Question: ${integerFromOneToHundred}`;

    askQuestion(question);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = integerFromOneToHundred % 2 === 0 ? 'yes' : 'no';

    counter += 1;

    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      counter,
      answersToWin,
    );

    if (!youAreWinnig) return;
  }
};

export default isEvenGame;
