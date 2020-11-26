let express = require("express");
let app = express();
let arr = [
  { name: "Margherita", price: 5 },
  { name: "Napolitana", price: 6 },
  { name: "Capricciosa", price: 5.5 },
  { name: "Mexicana", price: 7 },
  { name: "Vegetariana", price: 8 },
  { name: "Ciao-ciao", price: 6 },
];
const mongoose = require("mongoose");
const db = mongoose.connection;

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
    Pizza.count({}, (err, count) => {
      if (count > 0) {
        console.log("Exists");
      } else {
        const pizzaSchema = new mongoose.Schema({
          name: String,
          price: Number,
        });
        const Pizza = mongoose.model("Pizza", pizzaSchema);

        const pizzaList = arr.map(
          (a) => new Pizza({ name: a.name, price: a.price })
        );
        pizzaList.forEach((a) => a.save());
      }
    });

    const pizzaFromDB = await Pizza.find({});
    db.close();
    res.send(JSON.stringify(pizzaFromDB));
  });
});

app.listen(process.env.PORT || 3000);
