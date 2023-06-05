const Cliente = require("../database/Clientes");
const { Productos } = require("../models/Productos.model");
const { Clientes } = require("../models/clientes.model");
const { Pedidos } = require("../models/pedidos.model");
const getAllClientes = async (filterParams) => {
  try {
    
    const allClientes = await Cliente.getAllClientes(filterParams);
    return allClientes;
  } catch (error) {
    throw error;
  }
};
const getPedidosClientes = async (filterParams) => {
  try {
    const allPedidos = await Pedidos.getPedidosListado({
      where: filterParams,
      include: [
        {
          model: Clientes,
          attributes: ['nombre', 'email'],
        },
        {
          model: Pedidos,
          attributes: ["nroOrden","fechaPedido"]
        },
        {
          model: Productos,
          attributes: ['nombre', 'precio'],
        },
      ],
      attributes: ['idCliente', 'nombre'],
    });
    return allPedidos;
  } catch (error) {
    throw error;
  }
};

const getOneClientes = async (clienteId) => {
  try {
    const cliente = await Cliente.getOneCliente(clienteId);
    return cliente;
  } catch (error) {
    throw error;
  }
};

const createNewCliente = async (newCliente) => {
  const clienteInsert = {
    ...newCliente
  };

  try {
    const createdCliente = await Cliente.createNewCliente(clienteInsert);
    return createdCliente;
  } catch (error) {
    throw error;
  }
};

const updateOneCliente = async (clienteId, changes) => {
  try {
    const updateProducto = await Cliente.updateOneCliente(clienteId, changes);
    return updateProducto;
  } catch (error) {
    throw error;
  }
};

const deleteOneCliente = async (clienteId) => {
  try {
    const deleteCliente = await Cliente.deleteOneCliente(clienteId);
    return deleteCliente;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllClientes,
  getOneClientes,
  createNewCliente,
  updateOneCliente,
  deleteOneCliente,
  getPedidosClientes
};
