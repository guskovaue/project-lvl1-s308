import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';
const numberRange = 10000;

const isEven = num => num % 2 === 0;

// return new question and right answer
const getQuestionAndAnswer = () => {
  const number = getRandomInt(numberRange);
  const question = `${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
