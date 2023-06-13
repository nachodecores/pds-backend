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
        certifier: {
          type: DataTypes.STRING,
        },
        originalPrice: {
          type: DataTypes.DECIMAL(3, 2),
        },
        preBidPrice: {
          type: DataTypes.DECIMAL(3, 2),
        },
        finalPrice: {
          type: DataTypes.DECIMAL(3, 2),
        },
        weight: {
          type: DataTypes.INTEGER,
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
