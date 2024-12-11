const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const cartController = require("../controllers/cartController");

const router = express.Router();

router.use(expressLayouts);

router.get("/", cartController.getCart);
router.post("/increase", cartController.increaseQuantity);
router.post("/decrease", cartController.decreaseQuantity);
router.post("/remove", cartController.removeFromCart);
router.post("/add", cartController.addToCart);
router.post("/countAll", cartController.countAll);

module.exports = router;
