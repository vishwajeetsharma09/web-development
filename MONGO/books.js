const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1.27017"/test_db);

main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const book = mongoose.model("book", bookSchema);
const book1 = new book({
  title: "mathmatics",
  author: "rd sharma",
  price: 120,
});
book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
