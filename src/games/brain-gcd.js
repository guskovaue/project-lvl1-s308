import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const numberRange = 100;

const gcdCount = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
};

// return new question and right answer
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(numberRange);
  const secondNumber = getRandomInt(numberRange);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(gcdCount(firstNumber, secondNumber));
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
