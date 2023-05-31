const express = require("express");
const apicache = require("apicache");

const plantilla_productoController = require("../../controllers/plantilla_productoController");

const router = express.Router();

const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/plantillas-productos:
 *   get:
 *     tags:
 *       - Plantillas-Productos
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the plantilla-producto
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
 *                     $ref: "#/components/schemas/Plantilla_Producto"
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
router.get("/", plantilla_productoController.getAllPlantillasProductos);
/**
 * @openapi
 * /api/v1/plantillas-productos/:planProId:
 *   get:
 *     tags:
 *       - Plantillas-Productos
 *     parameters:
 *       - in: query
 *         name: planProId
 *         schema:
 *           type: string
 *         description: The Id of the winner you want to get.
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
 *                     $ref: "#/components/schemas/Plantilla_Producto"
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
router.get("/:planProId", plantilla_productoController.getOnePlantillaProducto);

router.post("/", plantilla_productoController.createNewPlantillaProducto);

router.patch(
  "/:planProId",
  plantilla_productoController.updateOnePlantillaProducto
);

router.delete(
  "/:planProId",
  plantilla_productoController.deleteOnePlantillaProducto
);

module.exports = router;
