const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`app is listen on ${port}`);
});

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request is received");
//   res.send("this is basic response");
// });

app.get("/", (req, res) => {
  res.send("you contacted home path");
});
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`you are landed to @${username}`);
});
// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });
// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });
app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(
    `<a href="https://vishwajeet09.vercel.app" />you are searching for  ${q}`
  );
});
