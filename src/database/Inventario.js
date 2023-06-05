const { Inventario } = require("../models/inventario.model");


async function getAllInventario() {
  
  try {

    const inventario = await Inventario.findAll();
    return inventario;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

const getOneInventario = async (inventarioId) => {
  try {
    const inventario = await Inventario.findOne({ where: { idInventario: inventarioId } })
    return inventario
  } catch (error) {
    throw { status: 500, message: error?.message || error }
  }
};

const createNewInventario = async (newProducto) => {
  try {
    const producto = await Inventario.create(newProducto);
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneProducto = (inventarioId, changes) => {
  try {
    Inventario.update(changes, { where: { idInventario: inventarioId } })
    return Inventario.findOne({ where: { idInventario: inventarioId } })
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneInventario = (inventarioId) => {
  try {
    Inventario.destroy({ where: { idInventario: inventarioId } })
    return Inventario.findOne({ where: { idInventario: inventarioId } })
  }
  catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllInventario, createNewInventario, getOneInventario, deleteOneInventario, updateOneProducto };
