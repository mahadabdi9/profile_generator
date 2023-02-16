const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = answer;

    rl.question("What type of music do you like listening to? ", (answer) => {
      profile.music = answer;

      rl.question("Which meal is your favorite (e.g. dinner, brunch, etc.)? ", (answer) => {
        profile.meal = answer;

        rl.question("What's your favorite thing to eat for that meal? ", (answer) => {
          profile.food = answer;

          console.log("\nHere's your profile:");

          console.log(`${profile.name} loves listening to ${profile.music} and ${profile.activity}. ${profile.name} also enjoys devouring ${profile.food} for ${profile.meal}!`)
          console.log('Nice getting to know you!')
          rl.close();
        })
      })
    })
  })
})
