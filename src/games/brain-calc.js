import runGameProcess from '../common';
import { getRandomInt } from '../utils';

const gameRules = 'What is the result of the expression?';
const numberRange = 100;
const operators = ['+', '-', '*'];

// return new question and right answer
const getQuestionAndAnswer = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${getRandomInt(numberRange)} ${randomOperator} ${getRandomInt(numberRange)}`;
  const questionParts = question.split(' ');
  const firstOperand = Number(questionParts[0]);
  const secondOperand = Number(questionParts[2]);
  let rightAnswer = '';
  switch (questionParts[1]) {
    case '+':
      rightAnswer = String(firstOperand + secondOperand);
      break;
    case '-':
      rightAnswer = String(firstOperand - secondOperand);
      break;
    case '*':
      rightAnswer = String(firstOperand * secondOperand);
      break;
    default:
      rightAnswer = '';
  }
  return { question, rightAnswer };
};

export default () => runGameProcess(gameRules, getQuestionAndAnswer);
