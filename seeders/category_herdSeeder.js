const { Category_Herd } = require("../models");

module.exports = async () => {
  const category_herd = [
    {
      name: "Terneros",
    },
    {
      name: "Vacas de invernada",
    },
    {
      name: "Vaquillonas próximas",
    },
    {
      name: "Terneras",
    },
  ];

  await Category_Herd.bulkCreate(category_herd);
  console.log("[Database] Se corrió el seeder de Category_Herd.");
};
