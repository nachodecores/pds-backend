const { Model, DataTypes } = require("sequelize");

class Category_Herd extends Model {
  static initModel(sequelize) {
    Category_Herd.init(
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
        modelName: "category_herd",
      }
    );
  }
}

module.exports = Category_Herd;
