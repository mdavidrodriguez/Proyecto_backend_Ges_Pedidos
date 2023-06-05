const express = require("express");

const productosController = require("../../controllers/productosController");
const checkAuth = require("../../middleware/AuthUsers") ;

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Productos:
 *       type: object
 *       properties:
 *         idProducto:
 *           type: integer
 *         nombre:
 *           type: string
 *         precio:
 *           type: number
 *         cantidad:
 *           type: integer
 *         descripcion:
 *           type: string
 *         pedidoId:
 *           type: integer
 *       required:
 *         - nombre
 *         - precio
 *         - cantidad
 *         - pedidoId
 */


/**
 * @openapi
 * /api/v1/productos:
 *   get:
 *     tags:
 *       - Productos
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
 *                     $ref: '#/components/schemas/Productos'
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
router.get("/",checkAuth.checkAuth, productosController.getallProductos);
/**
 * @openapi
 * /api/v1/productos/{id}:
 *   get:
 *     tags:
 *       - Productos
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
 *                 data:
 *                   $ref: '#/components/schemas/Productos'
 *       404:
 *         description: Producto no encontrado
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
 *                   example: "Producto no encontrado"
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
router.get("/:productoId",checkAuth.checkAuth, productosController.getOneProducto);
/**
 * @openapi
 * /api/v1/productos:
 *   post:
 *     tags:
 *       - Productos
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Datos del nuevo producto
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Productos'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
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
 *                   example: "Producto creado exitosamente"
 *                 data:
 *                   $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Error de validación del producto
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
 *                   example: "Error de validación del producto"
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


router.post("/", productosController.createNewProducto);
/**
 * @openapi
 * /api/v1/productos/{id}:
 *   patch:
 *     tags:
 *       - Productos
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
 *                 data:
 *                   $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Error de validación del producto
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
 *                   example: "Error de validación del producto"
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["El campo 'nombre' es requerido"]
 *       404:
 *         description: Producto no encontrado
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
 *                   example: "Producto no encontrado"
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
router.patch("/:productoId",checkAuth.checkAuth, productosController.updateOneProducto);

/**
 * @openapi
 * /api/v1/productos/{id}:
 *   delete:
 *     tags:
 *       - Productos
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
 *                   example: "Producto eliminado exitosamente"
 *       404:
 *         description: Producto no encontrado
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
 *                   example: "Producto no encontrado"
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
router.delete("/:productoId",checkAuth.checkAuth, productosController.deleteOneWinner);

module.exports = router;
