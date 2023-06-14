const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post("/", categoryController.store);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;
