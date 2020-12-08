require('dotenv').config();

const { Category, Product } = require('./models');

const productsList = [
  {
    name: 'popular',
    products: [
      {
        name: 'Margherita',
        price: 5,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image: 'https://www.gastronom.ru/binfiles/images/20190323/b24a228f.jpg',
      },
      {
        name: 'Napolitana',
        price: 6,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image:
          'https://avatars.mds.yandex.net/get-zen_doc/1368767/pub_5d64d70addfef600ae090ee5_5d64d8fda98a2a00aef8bcab/scale_1200',
      },
      {
        name: 'Capricciosa',
        price: 5.5,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image:
          'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/28827289_1101167763359081_3111730623270079803_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8024bb&_nc_ohc=Aqb9-pbzQo0AX8YDg8b&_nc_ht=scontent-waw1-1.xx&oh=1c15793d4ebc75c0b63879eeb51e2cd9&oe=5FE49580',
      },
    ],
  },
  {
    name: 'spicy',
    products: [
      {
        name: 'Mexicana',
        price: 7,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image: 'https://straus.s3.amazonaws.com/media/products2/8509_big.jpg?version=1566193955',
      },
    ],
  },
  {
    name: 'vegetarian',
    products: [
      {
        name: 'Vegetariana',
        price: 8,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/5d/39/d0/pizza-vegetariana.jpg',
      },
    ],
  },
  {
    name: 'new',
    products: [
      {
        name: 'Ciao-ciao',
        price: 6,
        description: 'My favorite pizza',
        weight: 0.8,
        data: { interestingData: 'Very' },
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/85/40/27/ciao-ciao.jpg',
      },
    ],
  },
];

function createTestCollections() {
  productsList.forEach(a => {
    const category = new Category({ name: a.name });
    Category.create(category);
    const productsIds = [];
    a.products.forEach(b => {
      const temp = Object.assign({}, b);
      temp.category = category._id;
      productsIds.push(Product.create(temp)._id);
    });
    Category.updateOne(category._id, { name: category.name, products: productsIds });
  });
}

createTestCollections();

setTimeout(() => {
  process.exit();
}, 1000);
