const { Clientes } = require("../models/clientes.model");


async function getAllClientes() {
  try {
    const clientes = await Clientes.findAll();
    return clientes;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}
async function getClientesPedidos() {
  try {
    const clientes = await Clientes.findAll();
    return clientes;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

const getOneCliente = async (clienteId) => {
  try {
    const cliente = await Clientes.findOne({ where: {idCliente: clienteId } })
    return cliente
  } catch (error) {
    throw { status: 500, message: error?.message || error }
  }
};

const createNewCliente = async (newCliente) => {
  try {
    const cliente = await Clientes.create(newCliente);
    return cliente;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneCliente = (clienteId, changes) => {
  try {
    Clientes.update(changes, { where: { idCliente: clienteId } })
    return Clientes.findOne({ where: { idCliente: clienteId } })
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneCliente = (clienteId) => {
  try {
    Clientes.destroy({ where: { idCliente: clienteId } })
    return Clientes.findOne({ where: { idCliente: clienteId } })
  }
  catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllClientes, createNewCliente, getOneCliente, deleteOneCliente, updateOneCliente,getClientesPedidos };
