'use strict';
const {
  Model
} = require('sequelize');
const client = require('../src/repositories/clientDatabase');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Questions.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    keywords: DataTypes.STRING,
    id_question: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};