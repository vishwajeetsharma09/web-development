const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`app is listen on ${port}`);
});

app.use((req, res) => {
  console.log(req);
  console.log("request is received");
  res.send("this is basic response");
});
