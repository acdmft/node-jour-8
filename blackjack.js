const prompts = require('prompts');

let joueurScore = 0;
let banqueScore = Math.floor(Math.random() * 6 + 16);

const questions = [
    {
      type: 'select',
      name: 'choise',
      message: 'Make your choise, draw or pass?',
      choices: [
        { value: 'draw' },
        { value: 'pass' }
      ],
    },
    {
      type: 'confirm',
      name: 'draw',
      message: 'Draw the cart?',
      initial: true
    }
  ];

(async function play() {
  let question = joueurScore >= 16 ? questions[0] : questions[1];
  const response = await prompts(question);
  if (response.choise === 'draw' || response.draw) {
      joueurScore += Math.floor(Math.random() * 10 + 1);
      if (joueurScore > 21) {
          console.log(`Your score: ${joueurScore}`);
          return console.log("Vous avez perdu!");
      }
      console.log(`Your score: ${joueurScore}`);
      play();
  } else {
      console.log(`Your score: ${joueurScore}, bank's score: ${banqueScore}`);
      if (joueurScore === 21) {
          return console.log("BlackJack! Bravo!");
        } else if (joueurScore > 21) {
            return console.log("Vous avez perdu!"); 
        } else if (joueurScore > banqueScore) {
            return console.log("Vous avez gagné");
        } else {
            return console.log("Vous avez perdu!");
        }
  }
})();

