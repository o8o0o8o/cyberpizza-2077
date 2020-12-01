const express = require('express');
const router = express.Router();

const { Product } = require('../models');

router.get('/', findPizzaAll);
router.get('/:id', findPizzaById);
router.post('/', createPizza);
router.put('/', updatePizzaById);
router.delete('/', deletePizzaById);

async function createPizza(req, res) {
  const { name, price, description, weight, data, image } = req.body;
  const pizza = await Product.create({
    name,
    price,
    description,
    weight,
    data,
    image,
  });

  return res.send(pizza);
}

async function findPizzaById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const pizza = await Product.findById(idParameter);

  return res.send(pizza);
}

async function findPizzaAll(req, res) {
  const pizzaArray = await Product.find();

  if (!req) return 'No body';

  return res.send(pizzaArray);
}

async function deletePizzaById(req, res) {
  const idParameter = req.body.id || req.params.id;
  const result = await Product.deleteOne({ _id: idParameter });

  return res.send(result);
}

async function updatePizzaById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const pizza = await Product.updateOne(idParameter, req.body);

  return res.send(pizza);
}

module.exports = router;
