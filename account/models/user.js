'use strict';
import { Model } from 'sequelize';
import client from "../src/repositories/databaseClient.js"

export class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
User.init({
  Name: DataTypes.STRING,
  Email: DataTypes.STRING,
  Password: DataTypes.STRING
}, {
  sequelize: client,
  modelName: 'User',
});
