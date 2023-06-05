const { Productos } = require("../models/Productos.model");


async function getAllProductos() {
  
  try {

    const productos = await Productos.findAll();
    return productos;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

const getOneProducto = async (productoId) => {
  try {
    const producto = await Productos.findOne({ where: { idProducto: productoId } })
    return producto
  } catch (error) {
    throw { status: 500, message: error?.message || error }
  }
};

const createNewProducto = async (newProducto) => {
  try {
    const producto = await Productos.create(newProducto);
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneProducto = (productoId, changes) => {
  try {
    Productos.update(changes, { where: { idProducto: productoId } })
    return Productos.findOne({ where: { idProducto: productoId } })
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneProducto = (productoId) => {
  try {
    Productos.destroy({ where: { idProducto: productoId } })
    return Productos.findOne({ where: { id: productoId } })
  }
  catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllProductos, createNewProducto, getOneProducto, deleteOneProducto, updateOneProducto };
