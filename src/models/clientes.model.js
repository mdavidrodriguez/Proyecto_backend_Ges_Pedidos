const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Clientes = sequelize.define(
  "Clientes",
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
  },
  {
    // Other model options go here
  }
);

// const results = await Clientes.findAll({
//   include: [
//     {
//       model: Pedidos,
//       include: [
//         {
//           model: Productos,
//           attributes: ["nombre", "precio","cantidad"],
//         },
//       ],
//       attributes: ["nroOrden", "fechaPedido"],
//     },
//   ],
//   attributes: ["nombre", "email",],
// });


(async () => {
  await sequelize.sync();
})();

module.exports = { Clientes };
