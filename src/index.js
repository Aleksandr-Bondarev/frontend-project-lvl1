import readlineSync from 'readline-sync';

const greetAndDescribe = (gameDescripton = false) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (gameDescripton) console.log(gameDescripton);

  return name;
};

const handleWrongAnswer = (userAnswer, correctAnswer, userName) => {
  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}'`
        + ' is wrong answer ;(. Correct answer was '
        + `'${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
  }
};

const handleCorrectAnswer = (answersCount, answersToWin, userName) => {
  console.log('Correct!');
  if (answersCount === answersToWin) {
    console.log(`Congratulations, ${userName}!`);
  }
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

    if (userAnswer !== correctAnswer) {
      handleWrongAnswer(userAnswer, correctAnswer, name);
      return;
    }

    handleCorrectAnswer(answersCount, answersToWin, name);
  }
};

export default gameRunner;

export { greetAndDescribe };
