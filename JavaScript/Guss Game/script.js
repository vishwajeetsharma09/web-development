let movies = "Avatar";
let guessMovie = prompt("Guess the movie name");
while (guessMovie != movies && guessMovie != "Quit") {
  guessMovie = prompt("Try again!");
}
if (guessMovie == movies) {
  console.log("congrates you guess right movies");
}
