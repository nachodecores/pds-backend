const { Category_Herd } = require("../models");

module.exports = async () => {
  const category_herd = [
    {
      name: "Terneros",
    },
    {
      name: "Terneras",
    },
    {
      name: "Novillos",
    },
    {
      name: "Vaquillonas",
    },
    {
      name: "Vaquillonas preñadas",
    },
    {
      name: "Vaquillonas próximas",
    },
    {
      name: "Vaquillonas en producción",
    },
    {
      name: "Vacas",
    },
    {
      name: "Vacas preñadas",
    },
    {
      name: "Vacas próximas",
    },
    {
      name: "Vacas en producción",
    },
    {
      name: "Vacas de invernada",
    },
    {
      name: "Toro",
    },
    {
      name: "Caballo",
    },
    {
      name: "Yegua",
    },
    {
      name: "Corederos/as",
    },
    {
      name: "Borregos/as",
    },
    {
      name: "Ovejas",
    },
    {
      name: "Carneros",
    },
  ];

  await Category_Herd.bulkCreate(category_herd);
  console.log("[Database] Se corrió el seeder de Category_Herd.");
};
