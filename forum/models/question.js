const { Model, DataTypes } = require('sequelize');
const client = require('../src/repositories/clientDatabase');
const Answer = require('./answer');
const Keyword = require('./keyword');

class Question extends Model {

  static associate(models) {

  }
}
Question.init({
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  user_name: DataTypes.STRING,
  user_id: DataTypes.STRING
}, {
  sequelize: client,
  modelName: 'Question',
});

Question.Answer = Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers'
});

Question.Keyword = Question.hasMany(Keyword, {
  foreignKey: 'question_id',
  as: 'keywords'
});

Answer.belongsTo(Question, {
  foreignKey: 'id',
});


Keyword.belongsTo(Question, {
  foreignKey: 'id',
});

module.exports = Question;


