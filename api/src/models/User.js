const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user",{
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,

    },
    last_name: {
      type: DataTypes.STRING,

    },
    phone: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    keeper: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3,2),
      defaultValue: 0.00
    },
    bookings: {
      type: DataTypes.INTEGER,
      defaultValue: 0

    }
    },
  );
};