const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  let divisor = number - 1;
  while (number % divisor !== 0) {
    divisor -= 1;
  }
  return divisor === 1 ? 'yes' : 'no';
};

export default isPrime;
