// const post = {
//   username: "@vishwajeetsharma",
//   content: "this is my post",
//   like: 150,
//   comment: ["2"],
// };
// let user = post["username"];
// console.log(user);

//create random object

// Guess number
const max = prompt("enter the max number");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");
while (true) {
  if (guess == "quit") {
    console.log("you are quit the game");
    break;
  }
  if (guess == random) {
    console.log("you guess the right number", random);
    break;
  } else if (guess < random) {
    guess = prompt("you guess is toll small .Please try again");
  } else {
    guess = prompt("enter the too large number");
  }
  //   } else {
  //     guess = prompt("you enter the wrong number");
  //   }
}
