"use strict";
const client = require("../src/repositories/clientDatabase");
const Question = require("../models/question");
const { Model, DataTypes } = require("sequelize");
class Forum extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {}
}
Forum.init(
  {
    name_forum: DataTypes.STRING,
  },
  {
    sequelize: client,
    modelName: "Forum",
  }
);

Forum.Question = Forum.hasMany(Question, {
  foreignKey: "question_id",
  as: "questions",
});

Question.belongsTo(Forum, { foreignKey: "id" });

module.exports =  Forum 
