const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/sequelize.config");

const Inventario  = sequelize.define(
  "Inventario", {
  idInventario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 
});


(async () => {
  await sequelize.sync();
})();

module.exports = { Inventario };
