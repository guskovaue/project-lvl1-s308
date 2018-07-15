import runGameProcess from '../flow';
import getRandomInt from '../utils';

const description = 'What number is missing in this progression?';
const numberRange = 10;
const rowLength = 10;

// return new question and right answer
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(numberRange);
  const step = getRandomInt(numberRange);
  const missingRowElement = getRandomInt(numberRange);
  let question = '';
  let rightAnswer = '';
  for (let i = 0; i <= rowLength - 1; i += 1) {
    const elementValue = firstNumber + step * i;
    if (i !== missingRowElement) {
      question += `${elementValue} `;
    } else {
      rightAnswer = String(elementValue);
      question += '.. ';
    }
  }
  return { question, rightAnswer };
};

export default () => runGameProcess(description, getQuestionAndAnswer);
