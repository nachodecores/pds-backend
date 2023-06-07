const { faker } = require("@faker-js/faker");
const { Herd } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const herds = [];
  for (let i = 0; i < 50; i++) {
    herds.push({
      inspection: faker.datatype.number({ min: 1, max: 500 }),
      certifier: "Pirulo González",
      originalPrice: faker.finance.amount(1, 4.5, 2),
      preBidPrice: faker.finance.amount(1, 4.5, 2),
      finalPrice: faker.finance.amount(1, 4.5, 2),
      weight: faker.datatype.number({ min: 0, max: 500, precision: 10 }),
      quantity: faker.datatype.number({ min: 1, max: 110 }),
      classType: faker.datatype.number({ min: 2, max: 4 }),
      state: faker.datatype.number({ min: 2, max: 4 }),
      sellStatus: "En Venta",
      media: "video",
      description: faker.lorem.sentence(25),
    });
  }

  await Herd.bulkCreate(herds);
  console.log("[Database] Se corrió el seeder de Herd.");
};
