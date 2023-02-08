'use strict';

const client = require('../src/repositories/clientDatabase')
const {
  Model,DataTypes
} = require('sequelize');
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init({
    body: DataTypes.TEXT,
    user_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    answer_id: DataTypes.STRING,
    soved: DataTypes.STRING
  }, {
    sequelize: client,
    modelName: 'Answer',
  });
  
  module.exports = Answer 