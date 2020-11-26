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

app.get("/", function (req, res) {
  res.send("To view pizzas send GET request '/api/products'");
});

app.get("/api/products", function (req, res) {
  res.send(JSON.stringify(arr));
});

app.listen(process.env.PORT || 3000);
