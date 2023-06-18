const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("./products");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
  res.end();
});

app.get("/products", (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("DB connection failed", err.message));
