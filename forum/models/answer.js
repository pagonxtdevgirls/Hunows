const { Model, DataTypes } = require('sequelize');
const client = require('../src/repositories/clientDatabase');
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
  soved: DataTypes.STRING,
  question_id: DataTypes.INTEGER
}, {
  sequelize: client,
  modelName: 'Answer',
});


module.exports = Answer;