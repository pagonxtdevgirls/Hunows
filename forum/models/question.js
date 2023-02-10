
const {
  Model, DataTypes
} = require('sequelize');
const client = require('../src/repositories/clientDatabase');
const Answer = require('./answer');

class Question extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Question.init({
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  user_name: DataTypes.STRING,
  user_id: DataTypes.STRING,
  answer_id: DataTypes.INTEGER,
  status: DataTypes.STRING,
  keywords: DataTypes.STRING
}, {
  sequelize: client,
  modelName: 'Question',
});
Question.Answer = Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers'
});


Answer.belongsTo(Question, {
  foreignKey: 'id',
});



module.exports = Question;


