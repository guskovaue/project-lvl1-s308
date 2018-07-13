import {
  getRandomInt,
  showBeginPhrase,
  showEndPhrase,
  showGameRules,
  greetUser,
  gameProcess,
} from '../base_code';

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
  showBeginPhrase();
  showGameRules('What is the result of the expression?');
  const userName = greetUser();
  gameProcess(getRandomExpr, calculate, userName);
  showEndPhrase(userName);
};
