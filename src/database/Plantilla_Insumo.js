const { Plantilla_Insumo } = require("../models/plantilla_insumo.model");

/**
 * @openapi
 * components:
 *   schemas:
 *     Plantilla_Insumo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: X
 *         date:
 *           type: string
 *           example: 30/05/2023
 *         image:
 *           type: blob
 *           example: image.png
 */
const getAllPlantillasInsumos = async () => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.findAll();
    return plantilla_insumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOnePlantillaInsumo = async (planInId) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.findByPk(planInId);
    return plantilla_insumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewPlantillaInsumo = async (newPlantillaInsumo) => {
  try {
    const createdPlantillaInsumo = await Plantilla_Insumo.create(
      newPlantillaInsumo
    );
    return createdPlantillaInsumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOnePlantillaInsumo = async (planInId, changes) => {
  try {
    const updatedPlantillaInsumo = await Plantilla_Insumo.update(changes, {
      where: { id: planInId },
    });
    return updatedPlantillaInsumo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOnePlantillaInsumo = async (planInId) => {
  try {
    if (!(await Plantilla_Insumo.findByPk(planInId))) {
      throw new Error("No sen econtró el elemento");
    }
    const deletedPlantillaInsumo = await Plantilla_Insumo.destroy({
      where: { id: planInId },
    });
    return deletedPlantillaInsumo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllPlantillasInsumos,
  getOnePlantillaInsumo,
  createNewPlantillaInsumo,
  updateOnePlantillaInsumo,
  deleteOnePlantillaInsumo,
};