const { DataTypes } = require("sequelize");
const { db } = require("../utils/db");

const User = db.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },

    name: {
      type: DataTypes.STRING,

      allownull: false,
    },

    email: {
      type: DataTypes.STRING,
      allownull: false,
    },

    password: {
      type: DataTypes.STRING,
      allownull: false,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = {
  User,
};
