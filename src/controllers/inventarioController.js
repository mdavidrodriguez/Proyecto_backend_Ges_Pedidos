const inventarioService = require("../services/inventarioService");

const getAllInventario = async (req, res) => {

    
    const { nombre } = req.query;
    try {
        const allInventario = await inventarioService.getAllInventario({ nombre });
        res.status(200).send({ status: "OK", data: allInventario });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneInventario = async (req, res) => {
    const {
        params: { inventarioId },
    } = req;
    if (!inventarioId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const inventario = await inventarioService.getOneInventario(inventarioId);
        res.send({ status: "OK", data: inventario });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewInventario = async (req, res) => {
    const { body } = req;
    if (!body.nombre || body.nombre.length === 0 || body.nombre.trim().length === 0 || body.nombre.length > 100 
        || body.nombre.trim().length > 100
     ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "The following keys is missing or is empty in request body: 'name'",
            },
        });
        return;
    }
    const newProducto = {
        nombre: body.nombre,
        precio: body.precio,
        cantidad: body.cantidad,
        descripcion: body.descripcion,
    };
    try {
        const createdInventario = await inventarioService.createNewInventario(newProducto);
        res.status(201).send({ status: "OK", data: createdInventario });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOneInventario = async (req, res) => {
    const {
        body,
        params: { inventarioId },
    } = req;
    if (!inventarioId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const updateInventario = await inventarioService.updateOneInventario(inventarioId, body);
        res.send({ status: "OK", data: updateInventario });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteOneInventario = async (req, res) => {
    const {
        params: { inventarioId },
    } = req;
    if (!inventarioId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const deleteInventario = await inventarioService.deleteOneInventario(inventarioId);
        res.status(204).send({ status: "OK", data: deleteInventario });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllInventario,
    getOneInventario,
    createNewInventario,
    updateOneInventario,
    deleteOneInventario,
};
