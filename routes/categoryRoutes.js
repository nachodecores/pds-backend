const express = require("express");
const router = express.Router();
const category_herdController = require("../controllers/category_herdController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", category_herdController.index);
router.get("/:id", category_herdController.show);
router.post("/", category_herdController.store);
router.patch("/:id", category_herdController.update);
router.delete("/:id", category_herdController.destroy);

module.exports = router;
