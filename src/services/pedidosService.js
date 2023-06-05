const Pedido = require("../database/Pedidos");


const getAllPedidos = async (filterParams) => {
  try {
    
    const allPedidos = await Pedido.getAllPedidos(filterParams);
    return allPedidos;
  } catch (error) {
    throw error;
  }
};

// Pedidos.js
const getPedidosListado = async () => {
  try {
    const allPedidos = await Pedido.getPedidosListado();
    return allPedidos;
  } catch (error) {
    throw error;
  }
};




const getOnePedidos = async (pedidoId) => {
  try {
    const pedido = await Pedido.getOneProducto(pedidoId);
    return pedido;
  } catch (error) {
    throw error;
  }
};

const createNewPedido = async (newPedido) => {
  const pedidoInsert = {
    ...newPedido,
    fechaPedido: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
   
  };

  try {
    const createdPedido = await Pedido.createNewPedido(pedidoInsert);
    return createdPedido;
  } catch (error) {
    throw error;
  }
};

const updateOnePedido = async (pedidoId, changes) => {
  try {
    const updatedPedido = await Pedido.updateOnePedido(pedidoId, changes);
    return updatedPedido;
  } catch (error) {
    throw error;
  }
};

const deleteOnePedido = async (pedidoId) => {
  try {
    const deletedPedido = await Pedido.deleteOnePedido(pedidoId);
    return deletedPedido;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPedidos,
  getOnePedidos,
  createNewPedido,
  updateOnePedido,
  deleteOnePedido,
  getPedidosListado
};
