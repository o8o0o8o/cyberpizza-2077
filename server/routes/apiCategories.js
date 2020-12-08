const express = require('express');
const router = express.Router();

const { Category } = require('../models');

router.get('/', findCategoriesAll);
router.get('/:id', findCategoryById);
router.post('/', createCategory);
router.put('/', updateCategoryById);
router.delete('/', deleteCategoryById);

async function createCategory(req, res) {
  const { name } = req.body;
  const category = await Category.create({
    name,
  });

  return res.send(category);
}

async function findCategoryById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const category = await Category.findById(idParameter);

  return res.send(category);
}

async function findCategoriesAll(req, res) {
  const categoryArray = await Category.find();

  if (!req) return 'No body';

  return res.send(categoryArray);
}

async function deleteCategoryById(req, res) {
  const idParameter = req.body.id || req.params.id;
  const result = await Category.deleteOne({ _id: idParameter });

  return res.send(result);
}

async function updateCategoryById(req, res) {
  const idParameter = (req.body && req.body.id) || (req.params && req.params.id);
  const category = await Category.updateOne(idParameter, req.body);

  return res.send(category);
}

module.exports = router;
