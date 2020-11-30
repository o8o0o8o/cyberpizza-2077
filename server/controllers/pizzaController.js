const Pizza = require("../models/pizzaModel");
const express = require("express");
const app = express();

module.exports = {
  create_Pizza: async (req, res) => {
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
  },

  find_Pizza: async (req, res) => {
    const idParameter = req.body && req.body.id || req.params && req.params.id;
    const pizza = await Pizza.findById(idParameter);

    return res.send(pizza);
  },

  find_Pizza_All: async (req, res) => {
    const pizzaArray = await Pizza.find();

    return res.send(pizzaArray);
  },

  delete_Pizza: async (req, res) => {
    const id = req.body.id || req.params.id;
    const pizza = await Pizza.deleteOne({ id });

    return res.send(pizza);
  },
};
