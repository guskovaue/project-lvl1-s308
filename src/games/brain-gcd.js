import runGameProcess from '../base_code';
import { getRandomInt } from '../utils';

const gameRules = 'Find the greatest common divisor of given numbers.';
const numberRange = 100;

// return new question and right answer
const getQuestionAndAnswer = () => {
  const question = `${getRandomInt(numberRange)} ${getRandomInt(numberRange)}`;
  const questionParts = question.split(' ');
  let firstNumber = Number(questionParts[0]);
  let secondNumber = Number(questionParts[1]);
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const rightAnswer = String(firstNumber + secondNumber);
  return { question, rightAnswer };
};

export default () => runGameProcess(gameRules, getQuestionAndAnswer);
