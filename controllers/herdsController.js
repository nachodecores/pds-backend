const { Herd } = require("../models");
// const formidable = require("formidable");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

async function index(req, res) {
  const herds = await Herd.findAll();
  res.json(herds);
}

// async function show(req, res) {
//   res.send(console.log(req.params));
// }

module.exports = {
  index,
  // show,
};
