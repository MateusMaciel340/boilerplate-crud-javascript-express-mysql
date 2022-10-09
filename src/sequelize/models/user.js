'use strict';
const { Model } = require('sequelize');
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID, defaultValue: UUIDV4,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};