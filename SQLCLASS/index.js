const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Piro@1234",
  database: "my_db",
});
let q = "INSERT INTO users(id,username,email,password)VALUES ?";
// let users = [
//   ["12344", "12344_newUser", "abcd4@gmail.com", "abcd4"],
//   ["1235", "1235_newUser", "abc5@gmail.com", "abc5"],
// ];

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();

//home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM users`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];

      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

// show users route

app.get("/user", (req, res) => {
  let q = `SELECT * FROM users`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //console.log(result);
      // res.send(result);
      res.render("showUsers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

// edit route

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id ='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
  // res.render("edit.ejs");
});

// update route

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM users WHERE id ='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE users SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.send(result);
          // res.redirect("/user");
        });
      }
      res.send(user);
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

app.listen(port, () => {
  console.log(`server is listening${port}`);
});
//console.log(getRandomUser());
