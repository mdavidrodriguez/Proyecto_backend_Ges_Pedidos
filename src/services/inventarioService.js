const Inventario  = require("../database/Inventario");

const getAllInventario = async (filterParams) => {
  try {
    
    const allInventario = await Inventario.getAllInventario(filterParams);
    return allInventario;
  } catch (error) {
    throw error;
  }
};

const getOneInventario = async (inventarioId) => {
  try {
    const inventario = await Inventario.getOneInventario(inventarioId);
    return inventario;
  } catch (error) {
    throw error;
  }
};

const createNewInventario = async (newInventario) => {
  const productoInsert = {
    ...newInventario
  };

  try {
    const createdInventario = await Inventario.createNewInventario(productoInsert);
    return createdInventario;
  } catch (error) {
    throw error;
  }
};

const updateOneInventario = async (inventarioId, changes) => {
  try {
    const updateInventario = await Inventario.updateOneProducto(inventarioId, changes);
    return updateInventario;
  } catch (error) {
    throw error;
  }
};

const deleteOneInventario = async (inventarioId) => {
  try {
    const deleteInventario = await Inventario.deleteOneInventario(inventarioId);
    return deleteInventario;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllInventario,
  getOneInventario,
  createNewInventario,
  updateOneInventario,
  deleteOneInventario,
};
