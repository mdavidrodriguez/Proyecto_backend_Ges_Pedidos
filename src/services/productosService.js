const Producto = require("../database/Productos");

const getAllProductos = async (filterParams) => {
  try {
    
    const allProductos = await Producto.getAllProductos(filterParams);
    return allProductos;
  } catch (error) {
    throw error;
  }
};

const getOneProductos = async (productoId) => {
  try {
    const producto = await Producto.getOneProducto(productoId);
    return producto;
  } catch (error) {
    throw error;
  }
};

const createNewProducto = async (newProducto) => {
  const productoInsert = {
    ...newProducto
  };

  try {
    const createdProducto = await Producto.createNewProducto(productoInsert);
    return createdProducto;
  } catch (error) {
    throw error;
  }
};

const updateOneProducto = async (productoId, changes) => {
  try {
    const updateProducto = await Producto.updateOneProducto(productoId, changes);
    return updateProducto;
  } catch (error) {
    throw error;
  }
};

const deleteOneProducto = async (productoId) => {
  try {
    const deleteProducto = await Producto.deleteOneProducto(productoId);
    return deleteProducto;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProductos,
  getOneProductos,
  createNewProducto,
  updateOneProducto,
  deleteOneProducto,
};
