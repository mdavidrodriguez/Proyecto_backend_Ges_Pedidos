const express = require("express");

const inventarioControllers = require("../../controllers/inventarioController");
const checkAuth = require("../../middleware/AuthUsers") ;

const router = express.Router();


/**
 * @openapi
 * components:
 *   schemas:
 *     Inventario:
 *       type: object
 *       properties:
 *         idInventario:
 *           type: integer
 *         nombre:
 *           type: string
 *         precio:
 *           type: number
 *         cantidad:
 *           type: integer
 *         descripcion:
 *           type: string
 *       required:
 *         - nombre
 *         - precio
 *         - cantidad
 */


/**
 * @openapi
 * /api/v1/inventario:
 *   get:
 *     tags:
 *       - Inventario
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
 *                     $ref: "#/components/schemas/Inventario"
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


router.get("/",checkAuth.checkAuth, inventarioControllers.getAllInventario);

router.get("/:inventarioId",checkAuth.checkAuth, inventarioControllers.getOneInventario);
/**
 * @openapi
 * /api/v1/inventario:
 *   post:
 *     tags:
 *       - Inventario
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Inventario"
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
 *                   $ref: "#/components/schemas/Inventario"
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


router.post("/", inventarioControllers.createNewInventario);
/**
 * @openapi
 * /api/v1/inventario/{id}:
 *   patch:
 *     tags:
 *       - Inventario
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *       - in: body
 *         name: body
 *         description: Datos actualizados del producto
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
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
 *                   example: "Producto actualizado exitosamente"
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


router.patch("/:inventarioId",checkAuth.checkAuth, inventarioControllers.updateOneInventario);
/**
 * @openapi
 * /api/v1/inventario/{id}:
 *   delete:
 *     tags:
 *       - Inventario
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
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
 *                   example: "Producto eliminado exitosamente del inventario"
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

router.delete("/:inventarioId",checkAuth.checkAuth, inventarioControllers.deleteOneInventario);

module.exports = router;
