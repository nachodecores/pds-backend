const { Model, DataTypes } = require("sequelize");

class Auctioneer extends Model {
  static initModel(sequelize) {
    Auctioneer.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        logo: {
          type: DataTypes.JSON,
        },
        email: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        department: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "auctioneer",
      }
    );
  }
}

module.exports = Auctioneer;
