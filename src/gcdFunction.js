const greatestCommonDivisor = (numberOne, numberTwo) => {
  let result = numberOne;
  while (result > 0) {
    if (numberOne % result === 0 && numberTwo % result === 0) {
      return result;
    }
    result -= 1;
  }
};

export default greatestCommonDivisor;
