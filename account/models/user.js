import { Model, DataTypes } from 'sequelize';
import client from "../src/repositories/databaseClient.js"

export class User extends Model {
  
  static associate(models) {
    // define association here
  }
}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: client,
  modelName: 'User',
});