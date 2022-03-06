const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("post",{
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: false,
    }
    },
  );
};