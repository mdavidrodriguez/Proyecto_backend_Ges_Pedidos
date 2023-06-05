const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { User };
