import { getRandomInt, gameProcess } from '../base_code';

// create new expression
const getRandomExpr = (range) => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return `${getRandomInt(range)} ${randomOperator} ${getRandomInt(range)}`;
};

// calculate right answer
const calculate = (expr) => {
  const exprParts = expr.split(' ');
  const firstOperand = Number(exprParts[0]);
  const secondOperand = Number(exprParts[2]);
  switch (exprParts[1]) {
    case '+':
      return String(firstOperand + secondOperand);
    case '-':
      return String(firstOperand - secondOperand);
    case '*':
      return String(firstOperand * secondOperand);
    default:
      return '';
  }
};

export default () => {
  const gameRules = 'What is the result of the expression?';
  gameProcess(gameRules, getRandomExpr, calculate);
};
