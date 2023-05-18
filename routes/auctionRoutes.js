const express = require("express");
const router = express.Router();
const auctionController = require("../controllers/auctionController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", auctionController.index);
router.get("/:id", auctionController.show);
router.post("/", auctionController.store);
router.patch("/:id", auctionController.update);
router.delete("/:id", auctionController.destroy);

module.exports = router;
