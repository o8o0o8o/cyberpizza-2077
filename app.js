const express = require("express");
const app = express();
const arr = [
  { name: "Margherita", price: 5 },
  { name: "Napolitana", price: 6 },
  { name: "Capricciosa", price: 5.5 },
  { name: "Mexicana", price: 7 },
  { name: "Vegetariana", price: 8 },
  { name: "Ciao-ciao", price: 6 },
];
const mongoose = require("mongoose");
const db = mongoose.connection;
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
const Pizza = mongoose.model("Pizza", pizzaSchema);

app.get("/", function (req, res) {
  res.send("To view pizzas send GET request '/api/products'");
});

app.get("/api/products", function (req, res) {
  mongoose.connect(
    "mongodb+srv://cyberpizza-2077:cyberpizza-2077@cluster0.k7nnm.mongodb.net/test?ssl=true&retryWrites=true&w=majority",
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
