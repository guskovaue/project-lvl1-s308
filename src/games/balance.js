import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'Balance the given number.';
const numberRange = 1000;

// return new question and right answer
const getQuestionAndAnswer = () => {
  const question = `${getRandomInt(numberRange)}`;
  const list = question.split('').map(Number);
  const sum = list.reduce((total, number) => total + number);
  const listLength = list.length;
  const remainder = sum % listLength;
  const averageValue = (sum - remainder) / listLength;
  const result = list.map((value, i) => {
    const backIndex = listLength - i;
    return backIndex <= remainder ? averageValue + 1 : averageValue;
  });
  const rightAnswer = result.join('');
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
