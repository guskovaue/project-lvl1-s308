import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const tryNumber = 3;

const greetUser = () => {
  const nameRequest = '\nMay I have your name? ';
  const name = readlineSync.question(nameRequest);
  console.log(`Hello, ${name}!\n`);
  return name;
};

const checkUserAnswer = (userAnswer, rightAnswer, name) => {
  if (userAnswer !== rightAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
  console.log('Correct!');
};

export default (gameRules, getQuestionAndAnswer) => {
  console.log(greeting);
  console.log(gameRules);
  const userName = greetUser();
  for (let i = 0; i < tryNumber; i += 1) {
    const { question, rightAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    checkUserAnswer(userAnswer, rightAnswer, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};
