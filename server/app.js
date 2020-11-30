require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const bodyParser = require("body-parser");

const createTestCollections = require("./createTestCollections");
const indexRouter = require("./routes/index");
const apiProducts = require("./routes/apiProducts");

app.listen(process.env.PORT || 3000);

createTestCollections();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/api/products", apiProducts);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority&poolSize=10`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

db.on("error", console.error.bind(console, "connection error:"));

sdfsdfsdfsfsdsfd;