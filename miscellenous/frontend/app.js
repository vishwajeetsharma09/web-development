// let arr = [1, 2, 3];
// arr.sayHello = () => {
//   console.log("Hello World");
// };
// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

//constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.talk = function () {
//   console.log(`hi, my name is ${this.name}`);
// };

//classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`hi my name is ${this.name}`);
//   }
// }
// let p1 = new Person("admin", 23);
// let p2 = new Person("eve", 23);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi my name is ${this.name}`);
  }
}
class Teacher extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
  talk() {
    console.log(`hi my name ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  talk() {
    console.log(`hi my name ${this.name}`);
  }
}
let stu1 = new Student("bitto", 21, 23);
let stu2 = new Student("amit", 21, 23);
