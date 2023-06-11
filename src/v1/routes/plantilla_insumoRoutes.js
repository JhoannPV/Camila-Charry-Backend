const express = require("express");
const apicache = require("apicache");

const plantilla_insumoController = require("../../controllers/plantilla_insumoController.js");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

/* const cache = apicache.middleware; */

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
router.get(
  "/",
  checkAuth.checkAuth,
  plantilla_insumoController.getAllPlantillasInsumos
);
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
router.get(
  "/:planInId",
  checkAuth.checkAuth,
  plantilla_insumoController.getOnePlantillaInsumo
);

router.post(
  "/",
  checkAuth.checkAuth,
  plantilla_insumoController.createNewPlantillaInsumo
);

router.post(
  "/buscarPlanIn",
  checkAuth.checkAuth,
  plantilla_insumoController.getBuscarPlantillaInsumo
);

router.patch(
  "/:planInId",
  checkAuth.checkAuth,
  plantilla_insumoController.updateOnePlantillaInsumo
);

router.delete(
  "/:planInId",
  checkAuth.checkAuth,
  plantilla_insumoController.deleteOnePlantillaInsumo
);

module.exports = router;
