const mongoose = require("mongoose");
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  weight: Number,
  data: Object,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
});
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
