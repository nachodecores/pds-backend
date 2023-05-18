const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Rutas relacionadas a operaciones CRUD de los lotes...

router.get("/", usersController.index);
router.get("/:id", usersController.show);
router.post("/", usersController.store);
router.patch("/:id", usersController.update);
router.delete("/:id", usersController.destroy);

module.exports = router;
