const handleWinOrLose = (
  correctAnswer,
  userAnswer,
  userName,
  answersCount,
  answersToWin
) => {
  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}'` +
        ' is wrong answer ;(. Correct answer was ' +
        `'${correctAnswer}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  if (answersCount === answersToWin) {
    console.log(`Congratulations, ${userName}!`);
  }
  return true;
};

export default handleWinOrLose;