/*
 * 👉 npm run seeders
 */

require("dotenv").config();
const { sequelize } = require("../models/index");

async function runAllSeeders() {
  await sequelize.sync({ force: true });
  await require("./userSeeder")();
  await require("./breedSeeder")();
  await require("./category_herdSeeder")();
  await require("./auctioneerSeeder")();
  await require("./auctionSeeder")();
  await require("./herdSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
