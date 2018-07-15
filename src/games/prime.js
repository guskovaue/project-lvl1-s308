import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'Is this number prime?';
const numberRange = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// return new question and right answer
const getQuestionAndAnswer = () => {
  const number = getRandomInt(numberRange);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
