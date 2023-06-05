const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/sequelize.config");
const {Pedidos} = require("./pedidos.model");

const Productos = sequelize.define(
  "Productos", {
  idProducto: {
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
  pedidoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pedidos',
      key: 'idPedido'
    }
  },
});

Productos.belongsTo(Pedidos, { foreignKey: 'pedidoId' })

Pedidos.hasMany(Productos, { foreignKey: 'pedidoId' })

Productos.findAllData = function(){
  return Productos.findAll({ include: Pedidos })
};

(async () => {
  await sequelize.sync();
})();

module.exports = { Productos };
