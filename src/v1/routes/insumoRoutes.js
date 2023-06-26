const express = require("express");
const apicache = require("apicache");

const insumoController = require("../../controllers/insumoController.js");
const checkAuth = require("../../middleware/checkAuth");

const router = express.Router();

/* const cache = apicache.middleware; */

/**
 * @openapi
 * /api/v1/insumos:
 *   get:
 *     tags:
 *       - Insumos
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the insumo
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
 *                     $ref: "#/components/schemas/Insumo"
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
router.get("/", checkAuth.checkAuth, insumoController.getAllInsumos);
router.post(
  "/forPlanIn",
  checkAuth.checkAuth,
  insumoController.getAllInsumosForPlan
);
/**
 * @openapi
 * /api/v1/insumos/:inId:
 *   get:
 *     tags:
 *       - Insumos
 *     parameters:
 *       - in: query
 *         name: inId
 *         schema:
 *           type: string
 *         description: The Id of the insumo you want to get.
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
 *                     $ref: "#/components/schemas/Insumo"
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
router.get("/:inId", checkAuth.checkAuth, insumoController.getOneInsumo);

router.post("/", checkAuth.checkAuth, insumoController.createNewInsumo);

router.post("/buscarIn", checkAuth.checkAuth, insumoController.getBuscarInsumo);

router.post("/eliminarIn", checkAuth.checkAuth, insumoController.deleteInsumo);

router.patch("/:inId", checkAuth.checkAuth, insumoController.updateOneInsumo);

router.delete("/:inId", checkAuth.checkAuth, insumoController.deleteOneInsumo);

module.exports = router;
