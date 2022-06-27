const { DataTypes } = require("sequelize");
const { db } = require("../utils/db");

const Task = db.define(
  "task",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },

    userId: {
      type: DataTypes.INTEGER,

      allownull: false,
    },

    title: {
      type: DataTypes.STRING,

      allownull: false,
    },

    limitDate: {
      type: DataTypes.DATE,
      allownull: false,
    },

    startDate: {
      type: DataTypes.DATE,
      allownull: false,
    },

    finishDate: {
      type: DataTypes.DATE,

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
  Task,
};
