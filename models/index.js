const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Herd = require("./Herd");
const User = require("./User");
const Auctioneer = require("./Auctioneer");
const Auction = require("./Auction");

Herd.initModel(sequelize);
User.initModel(sequelize);
Auctioneer.initModel(sequelize);
Auction.initModel(sequelize);

Herd.belongsTo(User);
User.hasMany(Herd);

Herd.belongsTo(Auctioneer);
Auctioneer.hasMany(Herd);

Auction.hasMany(Herd);
Herd.belongsTo(Auction);

module.exports = {
  sequelize,
  Herd,
  User,
  Auctioneer,
  Auction,
};
