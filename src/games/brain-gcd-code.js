import { getRandomInt, gameProcess } from '../base_code';

// create new expression
const getRandomExpr = () => {
  return `${getRandomInt()} ${getRandomInt()}`;
};

// calculate right answer
const findNod = (expr) => {
  const exprParts = expr.split(' ');
  let firstNum = Number(exprParts[0]);
  let secondNum = Number(exprParts[1]);
  while (firstNum != 0 && secondNum != 0) {
    if (firstNum > secondNum) {
      firstNum = firstNum % secondNum;
    } else {
      secondNum = secondNum % firstNum;
    }
  }
  return String(firstNum + secondNum);
};

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  gameProcess(gameRules, getRandomExpr, findNod);
};
