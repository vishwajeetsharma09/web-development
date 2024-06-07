const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1.27017"/test_db);

main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

//update the user
User.updateOne({ name: "bob" }, { age: 23 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.find({ age: { $gt: 21 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 21,
//   },
//   {
//     name: "Tony1",
//     email: "tony1@gmail.com",
//     age: 21,
//   },
//   {
//     name: "Tony2",
//     email: "tony2@gmail.com",
//     age: 21,
//   },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user2 = new User({
//   name: "bob",
//   email: "bob@gmail.com",
//   age: 21,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
