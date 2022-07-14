import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';

const isEvenGame = () => {
  const gameDescripton = 'Answer "yes" if the number is even, otherwise answer "no".';

  const name = greetAndDescribe(gameDescripton);

  let counter = 0;
  const answersToWin = 3;
  while (counter < answersToWin) {
    const integerFromOneToHundred = randomInteger(1, 100);
    console.log(`Question: ${integerFromOneToHundred}`);

    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = integerFromOneToHundred % 2 === 0 ? 'yes' : 'no';

    if (String(correctAnswer) === answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(
        `'${answer}'`
          + ' is wrong answer ;(. Correct answer was '
          + `'${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === answersToWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isEvenGame;
