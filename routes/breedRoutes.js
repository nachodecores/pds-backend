const express = require("express");
const router = express.Router();
const breedController = require("../controllers/breedController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", breedController.index);
router.get("/:id", breedController.show);
router.post("/", breedController.store);
router.patch("/:id", breedController.update);
router.delete("/:id", breedController.destroy);

module.exports = router;
