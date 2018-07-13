import {
  getRandomInt,
  showBeginPhrase,
  showEndPhrase,
  showGameRules,
  greetUser,
  gameProcess,
} from '../base_code';

// calculate right answer
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  showBeginPhrase();
  showGameRules('Answer "yes" if number even otherwise answer "no"');
  const userName = greetUser();
  gameProcess(getRandomInt, isEven, userName);
  showEndPhrase(userName);
};
