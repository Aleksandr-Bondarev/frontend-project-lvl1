import readlineSync from 'readline-sync';
import greetAndDescribe from './utils/greetAndDescribe.js';
import askQuestion from './utils/askQuestion.js';
import handleWinOrLose from './utils/handleWinOrLose.js';

const gameRunner = (game) => {
  let counter = 0;
  const answersToWin = 3;
  let name;

  while (counter < answersToWin) {
    const { gameDescripton, question, correctAnswer } = game();

    if (counter === 0) name = greetAndDescribe(gameDescripton);

    askQuestion(question);

    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number.isNaN(Number(userAnswer)) ? userAnswer : Number(userAnswer);

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

export default gameRunner;
