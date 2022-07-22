import readlineSync from 'readline-sync';

const gameRounds = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const gameRunner = ({ gameDescripton, questionsAndAnswers }) => {
  const name = greeting(gameDescripton);
  console.log(gameDescripton);

  /* eslint-disable-next-line */
  for (const { question, correctAnswer } of questionsAndAnswers) {
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameRunner;
export { gameRounds };
