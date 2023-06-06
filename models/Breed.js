const { Model, DataTypes } = require("sequelize");

class Breed extends Model {
  static initModel(sequelize) {
    Breed.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "breed",
      }
    );
  }
}

module.exports = Breed;
