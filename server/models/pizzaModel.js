const mongoose = require("mongoose");
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Categories" }],
});
const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  Pizza: Pizza,
};
