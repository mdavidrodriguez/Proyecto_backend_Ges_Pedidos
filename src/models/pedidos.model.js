const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/sequelize.config");
const {Clientes} = require("./clientes.model");
const { Productos } = require("./Productos.model");

const Pedidos = sequelize.define(
  "Pedidos", {
  idPedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nroOrden:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaPedido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  clienteId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
});



Pedidos.belongsTo(Clientes, { foreignKey: 'clienteId' });
Clientes.hasMany(Pedidos, { foreignKey: 'clienteId' });
Pedidos.belongsTo(Clientes, { foreignKey: "clienteId" });


Pedidos.findAllData = function(){
  Pedidos.belongsTo(Clientes, {foreignKey: 'clienteId'});
  return Pedidos.findAll({include: [{model: Clientes}, {model: Productos}]});
};

(async () => {
  await sequelize.sync();
})();

module.exports = { Pedidos };
