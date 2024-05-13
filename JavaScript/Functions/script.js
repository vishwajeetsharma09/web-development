// Function defination
// function Hello() {
//   console.log("Hello");
// }
// // to call the Function
// Hello();

// function rollDice() {
//   let rand = Math.floor(Math.random() * 6) + 1;
//   console.log(rand);
// }
// rollDice();

// function printName(name) {
//   console.log(name);
// }
// printname("bitto");
// create a function for multipliation

// function printTable(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }
// printTable(5);
// create a function that return the sum of 1 to n
// function getSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(getSum(4));

// Heigher Order functions
// let odd = function(n){
//   console.log(!(n%2==0));
// }
// let even = function(n){
//   console.log(n%2==0);
// }
// function oddEvenFactory(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "odd";
// let func = oddEvenFactory(request);
// func(7);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  }, 
};
