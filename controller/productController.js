const bookModel = require("../model/product");

const getAllProducts = async (req, res) => {
  try {
    const bookList = await bookModel.find({}, "author -_id").populate({
      path: "category",
      select: "name -_id", // Chỉ lấy trường 'categoryName' từ schema Category và loại bỏ '_id'
    });

    res.status(201).json(bookList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const { title, author, categoryId } = req.body;
    const product = new bookModel({
      title: title,
      author: author,
      category: categoryId,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts, createNewProduct };
