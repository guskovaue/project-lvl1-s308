import readlineSync from 'readline-sync';

export const getRandomInt = () => {
  const range = 100;
  return Math.floor(Math.random() * range);
};

export const showBeginPhrase = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
};

export const showEndPhrase = name => console.log(`Congratulations, ${name}!`);

export const showGameRules = phrase => console.log(phrase);

export const greetUser = () => {
  const nameRequest = '\nMay I have your name? ';
  const name = readlineSync.question(nameRequest);
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const getResultExpr = (userAnswer, answer, name) => {
  if (userAnswer !== answer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
};

export const gameProcess = (getQuestionFunc, getRightAnswerFunc, name) => {
  const tryNumber = 3;
  for (let i = 0; i < tryNumber; i += 1) {
    const question = getQuestionFunc();
    const answer = getRightAnswerFunc(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    getResultExpr(userAnswer, answer, name);
    console.log('Correct!');
  }
};
