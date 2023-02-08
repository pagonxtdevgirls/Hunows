const Answer = require('../models/answer')
const client = require('../src/repositories/clientDatabase')
'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const answer = require('../models/answer');
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Question.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    user_name: DataTypes.STRING,
    user_id: DataTypes.STRING,
    question_id: DataTypes.STRING
  }, {
    sequelize: client,
    modelName: 'Question',
  });
  Question.Answer = Answer.hasMany(Answer, {
    foreignKey: "answer_id",
    as: "answers",
  });
  
  Answer.belongsTo(Question, { foreignKey: "id" });

  module.exports =  Question
  
 