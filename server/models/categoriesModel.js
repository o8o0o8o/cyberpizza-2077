const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
  name: String,
  isEnabled: Boolean,
  pizza: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pizza" }],
});
const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = {
  Categories: Categories,
};
