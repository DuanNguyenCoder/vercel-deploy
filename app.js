const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const product_router = require("./src/routes/product");
const dbConnect = require("./src/db/connect");

// allow send json resquest
app.use(express.json());

// default browser
app.get("/", (req, res) => {
  res.send("hello daun");
});

// product route
app.use("/api", product_router);

const start = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log("connect succfully!! in PORT " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
