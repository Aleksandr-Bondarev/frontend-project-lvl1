import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';

const isPrime = (number) => {
  if (number === 1 || number === 2) {
    return true;
  }
  let divisor = Math.ceil(Math.sqrt(number));
  while (number % divisor !== 0) {
    divisor -= 1;
  }

  return divisor === 1;
};

const isPrimeGame = () => {
  const gameDescripton = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const name = greetAndDescribe(gameDescripton);

  const answersToWin = 3;
  let counter = 0;

  while (counter < answersToWin) {
    const someInteger = randomInteger(1, 100);
    const correctAnswer = isPrime(someInteger) === true ? 'yes' : 'no';

    console.log(`Question: ${someInteger}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    }

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

export default isPrimeGame;
