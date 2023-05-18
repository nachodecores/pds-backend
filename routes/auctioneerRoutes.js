const express = require("express");
const router = express.Router();
const auctioneerController = require("../controllers/auctioneerController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", auctioneerController.index);
router.get("/:id", auctioneerController.show);
router.post("/", auctioneerController.store);
router.patch("/:id", auctioneerController.update);
router.delete("/:id", auctioneerController.destroy);

module.exports = router;
