const client = require('../src/repositories/clientDatabase')
const { Model, DataTypes } = require('sequelize');
class Answer extends Model {

  static associate(models) {

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