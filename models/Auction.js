const { Model, DataTypes } = require("sequelize");

class Auction extends Model {
  static initModel(sequelize) {
    Auction.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        date: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: "auction",
      }
    );
  }
}

module.exports = Auction;
