"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quote.belongsTo(models.author);
    }
  }
  Quote.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quote: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "quote",
    }
  );
  return Quote;
};
