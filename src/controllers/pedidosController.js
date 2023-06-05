const pedidosService = require("../services/pedidosService");
const { Productos } = require("../models/Productos.model");
const { Clientes } = require("../models/clientes.model");
const { Pedidos } = require("../models/pedidos.model");
const getallPedidos = async (req, res) => {
    const { nroOrden } = req.query;
    try {
        const allPedidos = await pedidosService.getAllPedidos({ nroOrden });
        res.status(200).send({ status: "OK", data: allPedidos });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getPedidosByClienteId  = async (req, res) => {

    try {
        const allPedidos = await pedidosService.getPedidosListado();
        res.status(200).send({ status: "OK", data: allPedidos });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOnePedido = async (req, res) => {
    const {
        params: { pedidoId },
    } = req;
    if (!pedidoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const pedido = await pedidosService.getOnePedidos(pedidoId);
        res.send({ status: "OK", data: pedido });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewPedido = async (req, res) => {
    const { body } = req;
    if (!body.nroOrden || body.nroOrden.length === 0 || body.nroOrden.trim().length === 0 || body.nroOrden.length > 100
        || body.nroOrden.trim().length > 100
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "The following keys is missing or is empty in request body: 'nroOrden'",
            },
        });
        return;
    }
    const newPedido = {
        nroOrden: body.nroOrden,
        descripcion: body.descripcion,
        clienteId: body.clienteId,
    };
    try {
        const createdPedido = await pedidosService.createNewPedido(newPedido);
        res.status(201).send({ status: "OK", data: createdPedido });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOnePedido = async (req, res) => {
    const {
        body,
        params: { pedidoId },
    } = req;
    if (!pedidoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const updatePedido = await pedidosService.updateOnePedido(pedidoId, body);
        res.send({ status: "OK", data: updatePedido });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteOnePedido = async (req, res) => {
    const {
        params: { pedidoId },
    } = req;
    if (!pedidoId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const deletePedido = await pedidosService.deleteOnePedido(pedidoId);
        res.status(204).send({ status: "OK", data: deletePedido });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getallPedidos,
    getOnePedido,
    createNewPedido,
    updateOnePedido,
    deleteOnePedido,
    getPedidosByClienteId
};
