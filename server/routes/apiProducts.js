const express = require('express');
const router = express.Router();

const { Pizza } = require('../models');

router.get('/', findPizzaAll);
router.get('/:id', findPizzaById);
router.post('/', createPizza);
router.put('/', updatePizzaById);
router.delete('/', deletePizzaById);

async function createPizza(req, res) {
  const { name, price, description, weight, data, image } = req.body;
  const pizza = await Pizza.create({
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
  const pizza = await Pizza.findById(idParameter);

  return res.send(pizza);
}

async function findPizzaAll(req, res) {
  const pizzaArray = await Pizza.find();

  if (!req) return 'No body';

  return res.send(pizzaArray);
}

async function deletePizzaById(req, res) {
  const id = req.body.id || req.params.id;
  const pizza = await Pizza.deleteOne({ id });

  return res.send(pizza);
}

async function updatePizzaById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const pizza = await Pizza.updateOne(idParameter, req.body);

  return res.send(pizza);
}

module.exports = router;
