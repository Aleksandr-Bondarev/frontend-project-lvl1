import readlineSync from 'readline-sync';
import randomInteger from '../randomInteger.js';
import greetAndDescribe from '../greetAndDescribe.js';
import handleWinOrLose from '../handleWinOrLose.js';

const progressionGame = () => {
  const gameDescripton = 'What number is missing in the progression?';

  const name = greetAndDescribe(gameDescripton);

  const answersToWin = 3;
  let counter = 0;

  while (counter < answersToWin) {
    const progressionBeginner = randomInteger(1, 100);
    const progressionStep = randomInteger(1, 10);
    const indexOfMissedInteger = randomInteger(1, 11);
    const numberOfProgressionElements = 10;
    const coll = [progressionBeginner];
  
    for (let i = 0; i < numberOfProgressionElements; i += 1) {
      const newElement = coll[coll.length - 1] + progressionStep;
      coll.push(newElement);
    }
    const correctAnswer = coll[indexOfMissedInteger];
    coll[indexOfMissedInteger] = '..';

    console.log(
      `Question: ${coll[0]} ${coll[1]} ${coll[2]} ${coll[3]} ${coll[4]} ${coll[5]} ${coll[6]} ${coll[7]} ${coll[8]} ${coll[9]} ${coll[10]}`,
    );

    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
      counter += 1;
    }
  
    const youAreWinnig = handleWinOrLose(
      correctAnswer,
      userAnswer,
      name,
      counter,
      answersToWin
    );

    if (!youAreWinnig) return;  
  }
};

export default progressionGame;
