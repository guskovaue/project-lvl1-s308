#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInteger = () => Math.floor(Math.random() * 10000);

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const greeting = 'Welcome to the Brain Games!';
  const gameRules = 'Answer "yes" if number even otherwise answer "no"';
  console.log(greeting);
  console.log(gameRules);
  const nameRequest = 'May I have your name? ';
  const name = readlineSync.question(nameRequest);
  console.log(`Hello, ${name}!\n`);
  const tryNumber = 3;
  for (let i = 0; i < tryNumber; i += 1) {
    const question = getRandomInteger();
    const answer = isEven(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
