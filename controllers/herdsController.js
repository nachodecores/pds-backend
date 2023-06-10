const formidable = require("formidable");
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
  const { id } = req.params;
  console.log(id);
  try {
    const herds = await Herd.findByPk(id);
    res.status(200).json(herds);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving herd" });
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log("Store Herd");
  try {
    const form = formidable({
      multiples: false,
      uploadDir: __dirname + "/../public/video",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const {
        vendedor,
        escritorio,
        cantidad,
        categoria,
        raza,
        peso,
        precio,
        clase,
        estado,
        descripcion,
        inspeccion,
        certificador,
      } = fields;

      const newHerd = await Herd.create({
        userId: vendedor,
        auctioneerId: escritorio,
        quantity: cantidad,
        categoryHerdId: categoria,
        breedId: raza,
        weight: peso,
        originalPrice: precio,
        classType: clase,
        state: estado,
        description: descripcion,
        inspection: inspeccion,
        cerifier: certificador,
      });

      await newHerd.save();

      return res.status(200).json({ message: "Herd created successfully🚀 " });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

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
    res.status(200).json({ message: `Se elimino el Herd ${id} correctamente` });
  } catch (error) {
    res.status(200).json({ message: "Hubo un error" });
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
