const express = require("express");

const { v4: uuid4 } = require("uuid");
const methodOverride = require("method-override");
// const { uuid } = require("uuidv4");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`listening to port number ${port}`);
});

let posts = [
  {
    id: uuid4(),
    username: "bitto",
    content: "i love coding",
  },
  {
    id: uuid4(),
    username: "amit",
    content: "i love coding",
  },
  {
    id: uuid4(),
    username: "bob",
    content: "i love coding",
  },
  {
    id: uuid4(),
    username: "bipot",
    content: "i love coding",
  },
];

// path

app.get("/", (req, res) => {
  res.send("server working well!");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((post) => post.id === id);
  //   console.log(post);
  res.render("show.ejs", { post });
  //   res.send("request served");
});
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((post) => post.id === id);
  post.content = newContent;
  console.log(post);
  // res.send("patch request working");
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});
app.post("/posts", (req, res) => {
  // res.render("new.ejs", { posts });
  let { username, content } = req.body;
  let id = uuid4();
  console.log(id);
  posts.push({ id, username, content });
  //   console.log(req.body);
  //   res.render("index.ejs", { posts });
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params; 
  post = posts.filter((post) => post.id === !id);
  res.send("delete");
});
