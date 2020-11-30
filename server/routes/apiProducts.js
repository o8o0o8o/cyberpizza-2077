const express = require("express");
const router = express.Router();

const pizzaController = require("../controllers/pizzaController");

router.get("/", pizzaController.find_Pizza_All);
router.get("/:id", pizzaController.find_Pizza);
router.post("/", pizzaController.find_Pizza);
router.put("/", pizzaController.create_Pizza);
router.delete("/", pizzaController.delete_Pizza);

module.exports = router;
