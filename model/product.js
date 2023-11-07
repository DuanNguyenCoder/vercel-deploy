const mongoose = require("mongoose");
const schema = mongoose.Schema;
const booksSchema = new mongoose.Schema({
  title: String,
  author: String,

  category: {
    type: schema.Types.ObjectId,
    ref: "categorys",
  },
});

const booksModel = mongoose.model("books", booksSchema);

module.exports = booksModel;
