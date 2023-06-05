const productoService = require("../services/productosService");

const getallProductos = async (req, res) => {

    
    const { nombre } = req.query;
    try {
        const allProductos = await productoService.getAllProductos({ nombre });
        res.status(200).send({ status: "OK", data: allProductos });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneProducto = async (req, res) => {
    const {
        params: { productoId },
    } = req;
    if (!productoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const producto = await productoService.getOneProductos(productoId);
        res.send({ status: "OK", data: producto });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewProducto = async (req, res) => {
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
        pedidoId: body.pedidoId,



    };
    try {
        const createdProducto = await productoService.createNewProducto(newProducto);
        res.status(201).send({ status: "OK", data: createdProducto });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOneProducto = async (req, res) => {
    const {
        body,
        params: { productoId },
    } = req;
    if (!productoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const updateProducto = await productoService.updateOneProducto(productoId, body);
        res.send({ status: "OK", data: updateProducto });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteOneWinner = async (req, res) => {
    const {
        params: { productoId },
    } = req;
    if (!productoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const deleteProducto = await productoService.deleteOneProducto(productoId);
        res.status(204).send({ status: "OK", data: deleteProducto });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getallProductos,
    getOneProducto,
    createNewProducto,
    updateOneProducto,
    deleteOneWinner,
};
