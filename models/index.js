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

const Breed = require("./Breed");
const Category = require("./Category");
const Herd = require("./Herd");
const User = require("./User");
const Auctioneer = require("./Auctioneer");
const Auction = require("./Auction");

Breed.initModel(sequelize);
Category.initModel(sequelize);
Herd.initModel(sequelize);
User.initModel(sequelize);
Auctioneer.initModel(sequelize);
Auction.initModel(sequelize);

Herd.belongsTo(Breed);
Breed.hasMany(Herd);

Herd.belongsTo(Category);
Category.hasMany(Herd);

Herd.belongsTo(User);
User.hasMany(Herd);

Herd.belongsTo(Auctioneer);
Auctioneer.hasMany(Herd);

Auction.hasMany(Herd);
Herd.belongsTo(Auction);

module.exports = {
  sequelize,
  Breed,
  Category,
  Herd,
  User,
  Auctioneer,
  Auction,
};
