import readlineSync from 'readline-sync';

const greetAndDescribe = (gameDescripton = false) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (gameDescripton) console.log(gameDescripton);

  return name;
};

const handleWinOrLose = (
  correctAnswer,
  userAnswer,
  userName,
  answersCount,
  answersToWin,
) => {
  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}'`
        + ' is wrong answer ;(. Correct answer was '
        + `'${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (answersCount === answersToWin) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log('Correct!');

  return true;
};

const gameRunner = (game) => {
  const answersToWin = 3;
  const { gameDescripton, questionsAndAnswers } = game(answersToWin);
  const name = greetAndDescribe(gameDescripton);

  for (let i = 0; i < questionsAndAnswers.length; i += 1) {
    const { question } = questionsAndAnswers[i];
    const { correctAnswer } = questionsAndAnswers[i];
    const answersCount = i + 1;

    console.log(question);

    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number.isNaN(Number(userAnswer)) ? userAnswer : Number(userAnswer);

    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      answersCount,
      answersToWin,
    );

    if (!youAreWinnig) return;
  }
};

export default gameRunner;

export { greetAndDescribe };
