import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  console.log(question);
};

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

export { greetAndDescribe };
