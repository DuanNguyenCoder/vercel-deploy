const category = require("../model/category");

const createNewCate = async (req, res) => {
  try {
    console.log("post");
    const { name } = req.body;
    const cate = new category({ name });
    await cate.save();
    res.status(201).json(cate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const cate = await category.find();
    res.status(201).json(cate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createNewCate, getCategory };
