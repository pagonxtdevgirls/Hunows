
const { Model, DataTypes } = require('sequelize');
const client = require('../src/repositories/clientDatabase');

class Keyword extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Keyword.init({
  name: DataTypes.STRING,
  question_id: DataTypes.INTEGER
}, {
  sequelize: client,
  modelName: 'Keyword',
});

module.exports = Keyword;