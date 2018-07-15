import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const numberRange = 100;
const operators = ['+', '-', '*'];

// return new question and right answer
const getQuestionAndAnswer = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const firstOperand = getRandomInt(numberRange);
  const secondOperand = getRandomInt(numberRange);
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  let rightAnswer = '';
  switch (randomOperator) {
    case '+':
      rightAnswer = firstOperand + secondOperand;
      break;
    case '-':
      rightAnswer = firstOperand - secondOperand;
      break;
    case '*':
      rightAnswer = firstOperand * secondOperand;
      break;
    default:
      rightAnswer = '';
  }
  rightAnswer = String(rightAnswer);
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
