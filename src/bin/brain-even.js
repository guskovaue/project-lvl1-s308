#!/usr/bin/env node
import readlineSync from 'readline-sync';


const getRandomInteger = () => Math.floor(Math.random() * 10000);

const main = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInteger();
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
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

main();
