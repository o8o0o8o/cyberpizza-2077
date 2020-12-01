require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

const mongoose = require('mongoose');

const { Category, Pizza } = require('./models');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?ssl=true&retryWrites=true&w=majority&poolSize=10`,
  { useUnifiedTopology: true, useNewUrlParser: true },
);

const popular = new Category({ name: 'Popular' });
const vegetarian = new Category({ name: 'Vegetarian' });
const spicy = new Category({ name: 'Spicy' });
const newCategory = new Category({ name: 'New' });

async function createTestCollections() {
  await popular.save(err => {
    if (err) return err;

    const margherita = new Pizza({
      category: popular._id,
      name: 'Margherita',
      price: 5,
      description: 'My favorite pizza',
      weight: 0.8,
      data: { interestingData: 'Very' },
      image: 'https://www.gastronom.ru/binfiles/images/20190323/b24a228f.jpg',
    });
    const napolitana = new Pizza({
      category: popular._id,
      name: 'Napolitana',
      price: 6,
      description: 'My favorite pizza',
      weight: 0.8,
      data: { interestingData: 'Very' },
      image:
        'https://avatars.mds.yandex.net/get-zen_doc/1368767/pub_5d64d70addfef600ae090ee5_5d64d8fda98a2a00aef8bcab/scale_1200',
    });
    const capricciosa = new Pizza({
      category: popular._id,
      name: 'Capricciosa',
      price: 5.5,
      description: 'My favorite pizza',
      weight: 0.8,
      data: { interestingData: 'Very' },
      image:
        'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/28827289_1101167763359081_3111730623270079803_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8024bb&_nc_ohc=Aqb9-pbzQo0AX8YDg8b&_nc_ht=scontent-waw1-1.xx&oh=1c15793d4ebc75c0b63879eeb51e2cd9&oe=5FE49580',
    });

    margherita.save(err => {
      if (err) return err;
    });
    napolitana.save(err => {
      if (err) return err;
    });
    capricciosa.save(err => {
      if (err) return err;
    });
  });

  await vegetarian.save(err => {
    if (err) return err;

    const vegetariana = new Pizza({
      category: vegetarian._id,
      name: 'Vegetariana',
      price: 8,
      description: 'My favorite pizza',
      weight: 0.8,
      data: { interestingData: 'Very' },
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/5d/39/d0/pizza-vegetariana.jpg',
    });

    vegetariana.save(err => {
      if (err) return err;
    });
  });

  await spicy.save(err => {
    if (err) return err;

    const mexicana = new Pizza({
      category: spicy._id,
      name: 'Mexicana',
      price: 7,
      description: 'My favorite pizza',
      weight: 0.8,
      data: { interestingData: 'Very' },
      image: 'https://straus.s3.amazonaws.com/media/products2/8509_big.jpg?version=1566193955',
    });

    mexicana.save(err => {
      if (err) return err;
    });
  });

  newCategory.save(err => {
    if (err) return err;
  });

  const ciaoCiao = new Pizza({
    //category: "New",
    name: 'Ciao-ciao',
    price: 6,
    description: 'My favorite pizza',
    weight: 0.8,
    data: { interestingData: 'Very' },
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/85/40/27/ciao-ciao.jpg',
  });

  await ciaoCiao.save(err => {
    if (err) return err;
  });
}

createTestCollections();

setTimeout(() => {
  process.exit();
}, 1000);
