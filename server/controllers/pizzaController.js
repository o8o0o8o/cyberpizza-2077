const Pizza = require("../models/pizzaModel");

module.exports = {
  create: async (req, res) => {
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

  find: async (req, res) => {
    const pizza = await Pizza.find();
    return res.send(pizza);
  },
  // postsByUser : async (req, res) => {
  //    const { id } = req.params;
  //    const pizza = await Pizza.findById(id).populate('posts');

  //     res.send(pizza.posts);
  // }
};
