const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
// app.set("views", path.join(__dirname, "/views")); this is for when we stating the server from outside the directory

// app.get("/", (req, res) => {
//   res.send("this is home");
// });
app.get("/", (req, res) => {
  res.render("Home.ejs");
});
app.get("/instagram/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  // console.log(instaData);
  if (data) {
    res.render("instagram", { data });
  } else {
    res.render("error.ejs");
  }
});
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice.ejs", { diceValue });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
