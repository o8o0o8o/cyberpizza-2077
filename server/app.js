require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Pizza = require("./models/index.js").Pizza;
const app = express();
const arr = [
  { name: "Margherita", price: 5 },
  { name: "Napolitana", price: 6 },
  { name: "Capricciosa", price: 5.5 },
  { name: "Mexicana", price: 7 },
  { name: "Vegetariana", price: 8 },
  { name: "Ciao-ciao", price: 6 },
];
const db = mongoose.connection;

app.get("/", function (req, res) {
  res.send("To view pizzas send GET request '/api/products'");
});

app.get("/api/products", function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", async function () {
    const pizzaList = arr.map(
      (a) => new Pizza({ name: a.name, price: a.price })
    );

    pizzaList.forEach((a) => a.save());

    const pizzaFromDB = await Pizza.find({});
    await Pizza.collection.drop();
    db.close();
    res.send(JSON.stringify(pizzaFromDB));
  });
});

app.listen(process.env.PORT || 3000);
