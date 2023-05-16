/*
 * 👉 npm run seeders
 */

require("dotenv").config();
const { sequelize } = require("../models/index");

async function runAllSeeders() {
  await sequelize.sync({ force: true });
  await require("./herdSeeder")();
  await require("./userSeeder")();
  await require("./auctioneerSeeder")();
  await require("./auctionSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
