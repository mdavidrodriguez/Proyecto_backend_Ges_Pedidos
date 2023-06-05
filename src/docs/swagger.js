const swaggerJsodoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de mi API Rest Gestión de Pedidos",
        version: "1.0.1",
    },
    servers: [
        {
            url: "http://localhost:3300/",
        },
        {
            url: "https://localhost:3000/",
        },
    ],
    components: {
        // securitySchemes: {
        //     bearerAuth: {
        //         type: "http",
        //         scheme: "bearer",
        //     },
        // },
        schemas: {
            Clientes: {
                type: "object",
                properties: {
                    idCliente: {
                        type: "integer",
                    },
                    nombre: {
                        type: "string",
                    },
                    direccion: {
                        type: "integer",
                    },
                    telefono: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                },
            },
            Productos: {
                type: "object",
                properties: {
                    idProducto: {
                        type: "integer",
                    },
                    nombre: {
                        type: "string",
                    },
                    precio: {
                        type:  "integer",
                    },
                    cantidad: {
                        type:  "integer",
                    },
                    descripcion: {
                        type:  "string",
                    },
                    pedidoId: {
                        type: "boolean",
                    },
                },
            },
            Inventario: {
                type: "object",
                properties: {
                    idInventario: {
                        type: "integer",
                    },
                    nombre: {
                        type: "string",
                    },
                    precio: {
                        type:  "integer",
                    },
                    cantidad: {
                        type:  "integer",
                    },
                    descripcion: {
                        type:  "string",
                    },
                },
            },
            Pedidos: {
                type: "object",
                properties: {
                    idPedido: {
                        type: "integer",
                    },
                    nroOrden: {
                        type: "string",
                    },
                    precio: {
                        type:  "integer",
                    },
                    fechaPedido: {
                        type:  "string",
                    },
                    descripcion: {
                        type:  "string",
                    },
                    clienteId: {
                        type:  "string",
                    },
                },
            },
            
        },
    },
};

/**
 * Opciones
 **/

const options = {
    swaggerDefinition,
    apis: ["./v1/routes/*js"],
};

const openApiConfigration = swaggerJsodoc(options);

module.exports = openApiConfigration;
