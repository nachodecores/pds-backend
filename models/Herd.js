const { Model, DataTypes } = require("sequelize");

class Herd extends Model {
  static initModel(sequelize) {
    Herd.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        inspection: {
          type: DataTypes.INTEGER,
        },
        originalPrice: {
          type: DataTypes.DECIMAL,
        },
        preBidPrice: {
          type: DataTypes.DECIMAL,
        },
        finalPrice: {
          type: DataTypes.DECIMAL,
        },
        weight: {
          type: DataTypes.INTEGER,
        },
        breed: {
          type: DataTypes.STRING,
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
        classType: {
          type: DataTypes.INTEGER,
        },
        state: {
          type: DataTypes.INTEGER,
        },
        sellStatus: {
          type: DataTypes.STRING,
        },
        media: {
          type: DataTypes.JSON,
        },
        description: {
          type: DataTypes.STRING(1000),
        },
      },
      {
        sequelize,
        modelName: "herd",
      }
    );
  }
}

module.exports = Herd;
