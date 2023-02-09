const client = require('../src/repositories/clientDatabase')
const { Model, DataTypes } = require('sequelize');

class Keyword extends Model {

  static associate(models) {

  }
}
Keyword.init({
  name: DataTypes.STRING,
  keyword_id: DataTypes.STRING
}, {
  sequelize: client,
  modelName: 'Keyword',
});

module.exports = Keyword