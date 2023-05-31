const express = require("express");
const apicache = require("apicache");

const plantilla_insumoController = require("../../controllers/plantilla_insumoController.js");

const router = express.Router();

const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/plantillas-insumos:
 *   get:
 *     tags:
 *       - Plantillas-Insumos
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the plantilla-insumo
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
 *                     $ref: "#/components/schemas/Plantilla_Insumo"
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
router.get("/", plantilla_insumoController.getAllPlantillasInsumos);
/**
 * @openapi
 * /api/v1/plantillas-insumos/:planInId:
 *   get:
 *     tags:
 *       - Plantillas-Insumos
 *     parameters:
 *       - in: query
 *         name: planInId
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
 *                     $ref: "#/components/schemas/Plantilla_Insumo"
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
router.get("/:planInId", plantilla_insumoController.getOnePlantillaInsumo);

router.post("/", plantilla_insumoController.createNewPlantillaInsumo);

router.patch("/:planInId", plantilla_insumoController.updateOnePlantillaInsumo);

router.delete(
  "/:planInId",
  plantilla_insumoController.deleteOnePlantillaInsumo
);

module.exports = router;
