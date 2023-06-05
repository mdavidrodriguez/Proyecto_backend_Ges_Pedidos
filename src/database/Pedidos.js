const { Pedidos } = require("../models/pedidos.model");
const { Productos } = require("../models/Productos.model");
const { Clientes } = require("../models/clientes.model");

async function getAllPedidos() {

  try {

    const pedidos = await Pedidos.findAll();
    return pedidos;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}


async function getPedidosListado() {
  try {
    const pedidos = await Pedidos.findAll({
      include: [
        {
          model: Clientes,
          attributes: ['nombre', 'email','idCliente'],
        },
        {
          model: Productos,
          attributes: ['nombre', 'precio'],
        },
      ],
      attributes: ['idPedido', 'fechaPedido'],
    });

    return pedidos;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

const getOnePedido = async (pedidoId) => {
  try {
    const pedido = await Pedidos.findOne({ where: { idPedido: pedidoId } })
    return pedido
  } catch (error) {
    throw { status: 500, message: error?.message || error }
  }
};

const createNewPedido = async (newProducto) => {
  try {
    const producto = await Pedidos.create(newProducto);
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOnePedido = (pedidoId, changes) => {
  try {
    Pedidos.update(changes, { where: { idPedido: pedidoId } })
    return Pedidos.findOne({ where: { idPedido: pedidoId } })
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOnePedido = (pedidoId) => {
  try {
    Pedidos.destroy({ where: { idPedido: pedidoId } })
    return Pedidos.findOne({ where: { idPedido: pedidoId } })
  }
  catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllPedidos, createNewPedido, getOnePedido, deleteOnePedido, updateOnePedido, getPedidosListado };
