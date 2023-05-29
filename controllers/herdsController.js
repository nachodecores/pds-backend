const { Herd } = require("../models");
// Display a listing of the resource.
async function index(req, res) {
  try {
    const herds = await Herd.findAll();
    res.status(200).json(herds);
  } catch (error) {
    res.status(200).json(error);
  }
}

// Display the specified resource.
async function show(req, res) {
  console.log("params: ", req.params);
  const { id } = req.params;
  try {
    const herds = await Herd.findByPk(id);
    res.status(200).json(herds);
  } catch (error) {
    res.status(200).json(error);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;

  try {
    const herd = await Herd.destroy({
      where: {
        id: id,
      },
    });
    res
      .status(200)
      .json({ message: `Elemento codigo: ${id} eliminado correctamente` });
  } catch (error) {
    res.status(200).json({ message: error });
  }
}
// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
