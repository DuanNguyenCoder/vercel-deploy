const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
});

const category = mongoose.model("categorys", categorySchema);

module.exports = category;
