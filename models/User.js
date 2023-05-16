const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
        document: {
          type: DataTypes.STRING,
        },
        DICOSE: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        location: {
          type: DataTypes.STRING,
        },
        department: {
          type: DataTypes.STRING,
        },
        RUC: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        company: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "user",
      }
    );
  }
}

module.exports = User;
