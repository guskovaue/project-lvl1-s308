import { getRandomInt, gameProcess } from '../base_code';

// calculate right answer
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no"';
  gameProcess(gameRules, getRandomInt, isEven);
};
