import runGameProcess from '../base_code';
import { getRandomInt, isEven } from '../utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no"';
const numberRange = 10000;

// calculate right answer
// return new question and right answer
const getQuestionAndAnswer = () => {
  const question = `${getRandomInt(numberRange)}`;
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => runGameProcess(gameRules, getQuestionAndAnswer);
