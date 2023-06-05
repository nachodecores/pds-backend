const { Breed } = require("../models");

module.exports = async () => {
  const breed = [
    {
      name: "Holando",
    },
    {
      name: "Angus",
    },
    {
      name: "Jersey",
    },
    {
      name: "Hereford",
    },
    {
      name: "Cruza",
    },
    {
      name: "Kiwi",
    },
  ];

  await Breed.bulkCreate(breed);
  console.log("[Database] Se corrió el seeder de Breed.");
};
