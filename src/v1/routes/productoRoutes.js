const express = require("express");
const apicache = require("apicache");

const productoController = require("../../controllers/productoController");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

/* const cache = apicache.middleware; */

/**
 * @openapi
 * /api/v1/productos:
 *   get:
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the producto
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
 *                     $ref: "#/components/schemas/Producto"
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
router.get("/", checkAuth.checkAuth, productoController.getAllProductos);
router.post(
  "/forPlanPro",
  checkAuth.checkAuth,
  productoController.getAllProductosForPlan
);
/**
 * @openapi
 * /api/v1/productos/:proId:
 *   get:
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: query
 *         name: proId
 *         schema:
 *           type: string
 *         description: The Id of the producto you want to get.
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
 *                     $ref: "#/components/schemas/Producto"
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
router.get("/:proId", checkAuth.checkAuth, productoController.getOneProducto);

router.post("/", checkAuth.checkAuth, productoController.createNewProducto);

router.post(
  "/buscarPro",
  checkAuth.checkAuth,
  productoController.getBuscarProducto
);

router.post(
  "/eliminarPro",
  checkAuth.checkAuth,
  productoController.deleteProducto
);

router.patch(
  "/:proId",
  checkAuth.checkAuth,
  productoController.updateOneProducto
);

router.delete(
  "/:proId",
  checkAuth.checkAuth,
  productoController.deleteOneProducto
);

module.exports = router;
