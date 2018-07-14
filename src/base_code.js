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

export const checkUserAnswer = (userAnswer, answer, name) => {
  if (userAnswer !== answer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
  console.log('Correct!');
};

export const showQuestionCheckAnswer = (getQuestion, getRightAnswer, userName) => {
  const tryNumber = 3;
  for (let i = 0; i < tryNumber; i += 1) {
    const question = getQuestion();
    const answer = getRightAnswer(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    checkUserAnswer(userAnswer, answer, userName);
  }
};

export const gameProcess = (gameRules, getQuestion, getRightAnswer) => {
  showBeginPhrase();
  showGameRules(gameRules);
  const userName = greetUser();
  showQuestionCheckAnswer(getQuestion, getRightAnswer, userName);
  showEndPhrase(userName);
};
