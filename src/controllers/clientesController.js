const clienteService = require("../services/clientesService");

const getAllClientes = async (req, res) => {

    
    const { nombre } = req.query;
    try {
        const allclientes = await clienteService.getAllClientes({ nombre });
        res.status(200).send({ status: "OK", data: allclientes });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getPedidosClientes = async (req, res) => {
    const { idCliente  } = req.query;
    try {
        const allclientes = await clienteService.getPedidosClientes({ idCliente });
        res.status(200).send({ status: "OK", data: allclientes });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneCliente = async (req, res) => {
    const {
        params: { clienteId },
    } = req;
    if (!clienteId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const cliente = await clienteService.getOneClientes(clienteId);
        res.send({ status: "OK", data: cliente });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const createNewCliente = async (req, res) => {
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
    const newCliente = {
        idCliente: body.idCliente,
        nombre: body.nombre,
        direccion: body.direccion,
        telefono: body.telefono,
        email: body.email,


    };
    try {
        const createdCliente = await clienteService.createNewCliente(newCliente);
        res.status(201).send({ status: "OK", data: createdCliente });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateOneCliente = async (req, res) => {
    const {
        body,
        params: { clienteId },
    } = req;
    if (!clienteId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const updateCliente = await clienteService.updateOneCliente(clienteId, body);
        res.send({ status: "OK", data: updateCliente });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteOneCliente = async (req, res) => {
    const {
        params: { clienteId },
    } = req;
    if (!clienteId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':winnerId' can not be empty" },
        });
    }
    try {
        const deleteOneCliente = await clienteService.deleteOneCliente(clienteId);
        res.status(204).send({ status: "OK", data: deleteOneCliente });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllClientes,
    getOneCliente,
    createNewCliente,
    updateOneCliente,
    deleteOneCliente,
    getPedidosClientes
};
