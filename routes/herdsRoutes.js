const express = require("express");
const router = express.Router();
const herdsController = require("../controllers/herdsController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", herdsController.index);
router.get("/:id", herdsController.show);
router.post("/", herdsController.store);
router.patch("/:id", herdsController.update);
router.delete("/:id", herdsController.destroy);

module.exports = router;
