require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const models = require("./models/index.js");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(process.env.PORT || 3000);

const arr = [
  {
    //category: "Popular",
    name: "Margherita",
    price: 5,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image: "https://www.gastronom.ru/binfiles/images/20190323/b24a228f.jpg",
  },
  {
    //category: "Popular",
    name: "Napolitana",
    price: 6,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image:
      "https://avatars.mds.yandex.net/get-zen_doc/1368767/pub_5d64d70addfef600ae090ee5_5d64d8fda98a2a00aef8bcab/scale_1200",
  },
  {
    //category: "Popular",
    name: "Capricciosa",
    price: 5.5,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image:
      "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/28827289_1101167763359081_3111730623270079803_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8024bb&_nc_ohc=Aqb9-pbzQo0AX8YDg8b&_nc_ht=scontent-waw1-1.xx&oh=1c15793d4ebc75c0b63879eeb51e2cd9&oe=5FE49580",
  },
  {
    //category: "Spicy",
    name: "Mexicana",
    price: 7,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image:
      "https://straus.s3.amazonaws.com/media/products2/8509_big.jpg?version=1566193955",
  },
  {
    // category: "Vegetarian",
    name: "Vegetariana",
    price: 8,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/5d/39/d0/pizza-vegetariana.jpg",
  },
  {
    //category: "New",
    name: "Ciao-ciao",
    price: 6,
    description: "My favorite pizza",
    weight: 0.8,
    data: { interestingData: "Very" },
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/85/40/27/ciao-ciao.jpg",
  },
];
const categories = [
  { name: "Vegetarian", isEnabled: true },
  { name: "Popular", isEnabled: true },
  { name: "New", isEnabled: true },
  { name: "Spicy", isEnabled: true },
];
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

app.get("/", function (req, res) {
  res.send("To view pizzas send GET request '/api/products'");
});

app.get("/products/:name", async function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.once("open", async function () {
    const name = req.params.name;
    const result = await models.Pizza.find({ name });

    res.send(result);
  });
});

app.post("/products", function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.once("open", async function () {
    const name = req.body.name;
    const result = await models.Pizza.find({ name });

    res.send(result);
  });
});

app.put("/products", function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.once("open", async function () {
    const json = req.body;

    const pizza = new models.Pizza({ json });
    pizza.save();
    
    const pizzaFromDB = await models.Pizza.find({});
    res.send(pizzaFromDB);
  });
});

app.delete("/products", function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.once("open", async function () {
    const name = req.body.name;

    await db.models.Pizza.deleteMany({name});
    
    const pizzaFromDB = await models.Pizza.find({});    
    res.send(pizzaFromDB);
  });
});

app.get("/api/products", function (req, res) {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  db.once("open", async function () {
    const pizzaList = arr.map(
      (a) =>
        new models.Pizza({
          name: a.name,
          price: a.price,
          category: a.category,
          description: a.description,
          weight: a.weight,
          data: a.data,
          image: a.image,
        })
    );

    const categoriesList = categories.map(
      (a) => new models.Category({ name: a.name, isEnabled: a.isEnabled })
    );

    categoriesList.forEach((a) => a.save());

    pizzaList.forEach((a) => a.save());

    const categoriesFromDB = await models.Category.find({});
    //await models.Category.collection.drop();

    const pizzaFromDB = await models.Pizza.find({});
    //await models.Pizza.collection.drop();
    //db.close();
    res.send(JSON.stringify(pizzaFromDB));
  });
});
git