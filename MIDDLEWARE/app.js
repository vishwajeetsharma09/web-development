const express = require("express");
const app = express();
const port = 3000;

const ExpressError = require("./ExpressError");
// define middleWare

// app.use((req, res, next) => {
//   console.log("i am middlewar page");
//   next();
// });

// app.use((req, res) => {
//   // console.log(req.method, req.path);
//   // console.log("helllo world");
// });

const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
      next();
    }
    throw new ExpressError(401, "Access Denied");
  });

app.use("/err", (req, res) => {
  abcd = abcd;
});
app.use("/admin", (req, res) => {
  throw new ExpressError(403, "Access Is Forbidden");
});

app.use((err, req, res, next) => {
  // console.log("-----ERROR-----");
  let { status = 500, message = "Some Error" } = err;
  // next(err);
  // res.send(err);
  res.status(status).send(message);
});

//routing
app.get("/", (req, res) => {
  console.log("i am root page");
  res.send("i am root page");
});

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/random", (req, res) => {
  console.log("i am random page");
  res.send("I am random page");
});

app.listen(port, () => {
  console.log(`server is working on ${port}`);
});
