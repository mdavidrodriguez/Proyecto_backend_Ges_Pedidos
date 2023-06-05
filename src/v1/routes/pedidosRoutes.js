const express = require("express");

const pedidosController = require("../../controllers/pedidosController");
const checkAuth = require("../../middleware/AuthUsers") ;

const router = express.Router();


/**
 * @openapi
 * components:
 *   schemas:
 *     Pedidos:
 *       type: object
 *       properties:
 *         idPedido:
 *           type: integer
 *         nroOrden:
 *           type: string
 *         fechaPedido:
 *           type: string
 *         descripcion:
 *           type: string
 *         clienteId:
 *           type: integer
 *       required:
 *         - nroOrden
 *         - fechaPedido
 *         - clienteId
 */


/**
 * @openapi
 * /api/v1/pedidos:
 *   get:
 *     tags:
 *       - Pedidos
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pedidos'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

router.get("/",checkAuth.checkAuth, pedidosController.getallPedidos);
router.get("/listado",checkAuth.checkAuth,pedidosController.getPedidosByClienteId)

/**
 * @openapi
 * /api/v1/pedidos/{id}:
 *   get:
 *     tags:
 *       - Pedidos
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: '#/components/schemas/Pedidos'
 *       404:
 *         description: Pedido no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Pedido no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

router.get("/:pedidoId",checkAuth.checkAuth, pedidosController.getOnePedido);

/**
 * @openapi
 * /api/v1/pedidos:
 *   post:
 *     tags:
 *       - Pedidos
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedidos'
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: "Pedido creado exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Pedido'
 *       400:
 *         description: Error de validación del pedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error de validación del pedido"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["El campo 'nombre' es requerido"]
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

router.post("/", pedidosController.createNewPedido);

/**
 * @openapi
 * /api/v1/pedidos/{id}:
 *   patch:
 *     tags:
 *       - Pedidos
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido
 *       - in: body
 *         name: body
 *         description: Datos actualizados del pedido
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedidos'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: "Pedido actualizado exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Pedidos'
 *       400:
 *         description: Error de validación del pedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error de validación del pedido"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["El campo 'nombre' es requerido"]
 *       404:
 *         description: Pedido no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Pedido no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

router.patch("/:pedidoId",checkAuth.checkAuth, pedidosController.updateOnePedido);

/**
 * @openapi
 * /api/v1/pedidos/{id}:
 *   delete:
 *     tags:
 *       - Pedidos
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: "Pedido eliminado exitosamente"
 *       404:
 *         description: Pedido no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Pedido no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

router.delete("/:pedidoId",checkAuth.checkAuth, pedidosController.deleteOnePedido);

module.exports = router;
