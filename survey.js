const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable:) ', (answer1) => {
  console.log(`Well, it is certainly nice to meet you, ${answer1}`);
  rl.question('What is an activity you like doing? ', (answer2) => {
    console.log(`${answer2}, really? Mine too!`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`I\'d say that\'s the perfect time for ${answer3}.`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc)? ', (answer4) => {
        console.log(`Could not agree more! ${answer4} is the best time of the day!`);
        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Mmm, delicious choice! ${answer5} is the best.`);
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            console.log(`You can work up a good sweat with ${answer6}, thats for sure!`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer7} is a very POWERFUL thing to have! I envy you, ${answer1}!`);
              rl.close();

              console.log(`"${answer1} is a lover of many things, but they certainly love ${answer2}. While doing that, they are cranking ${answer3}. Their favourite meal of the day is ${answer4}, and its usually going to be ${answer5}! If they aren't doing ${answer2}, ${answer1} can be found partaking in ${answer6}. ${answer1} does NOT like to brag, but they have a very special power..... ${answer7}!!!!!`)
            });
          });
        });
      });
    });
  });
});

