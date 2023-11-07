const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createNewProduct,
} = require("../controller/productController");

const { createNewCate, getCategory } = require("../controller/cateController");

router.route("/product").get(getAllProducts);
router.route("/product").post(createNewProduct);
router.route("/cate").post(createNewCate);
router.route("/cate").get(getCategory);

module.exports = router;
