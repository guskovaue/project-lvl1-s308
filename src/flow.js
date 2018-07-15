import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const tryNumber = 3;

const greetUser = () => {
  const nameRequest = '\nMay I have your name? ';
  const name = readlineSync.question(nameRequest);
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default (description, getQuestionAndAnswer) => {
  console.log(greeting);
  console.log(description);
  const userName = greetUser();
  for (let i = 0; i < tryNumber; i += 1) {
    const { question, rightAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
