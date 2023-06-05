const express = require("express");

const clientesController = require("../../controllers/clientesController");
const checkAuth = require("../../middleware/AuthUsers") ;

const router = express.Router();


/**
 * @openapi
 * components:
 *   schemas:
 *     Clientes:
 *       type: object
 *       properties:
 *         idCliente:
 *           type: integer
 *         nombre:
 *           type: string
 *         direccion:
 *           type: string
 *         telefono:
 *           type: string
 *         email:
 *           type: string
 *       required:
 *         - nombre
 *         - direccion
 *         - telefono
 *         - email
 */


/**
 * @openapi
 * /api/v1/clientes:
 *   get:
 *     tags:
 *       - Clientes
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the winner
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
 *                     $ref: "#/components/schemas/Clientes"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.get("/",checkAuth.checkAuth, clientesController.getAllClientes);
router.get("/listado",checkAuth.checkAuth, clientesController.getPedidosClientes);

router.get("/:clienteId",checkAuth.checkAuth, clientesController.getOneCliente);
/**
 * @openapi
 * /api/v1/clientes:
 *   post:
 *     tags:
 *       - Clientes
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Clientes"
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
 *                   $ref: "#/components/schemas/Clientes"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.post("/",checkAuth.checkAuth, clientesController.createNewCliente);


/**
 * @openapi
 * /api/v1/clientes/{clienteId}:
 *   patch:
 *     tags:
 *       - Clientes
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Clientes"
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
 *                   $ref: "#/components/schemas/Clientes"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.patch("/:clienteId",checkAuth.checkAuth, clientesController.updateOneCliente);
/**
 * @openapi
 * /api/v1/clientes/{clienteId}:
 *   delete:
 *     tags:
 *       - Clientes
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
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
 *                   example: "Cliente eliminado exitosamente"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.delete("/:clienteId",checkAuth.checkAuth, clientesController.deleteOneCliente);

module.exports = router;
