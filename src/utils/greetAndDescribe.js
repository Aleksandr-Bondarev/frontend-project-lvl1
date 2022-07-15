import readlineSync from 'readline-sync';

const greetAndDescribe = (gameDescripton = false) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (gameDescripton) console.log(gameDescripton);

  return name;
};

export default greetAndDescribe;
