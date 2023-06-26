const { Plantilla_Insumo } = require("../models/plantilla_insumo.model");
const { Op } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     Plantilla_Insumo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
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
    const plantilla_insumo = await Plantilla_Insumo.findAll({
      order: [["nombre", "ASC"]],
    });
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

const getOnePlantillaInsumoName = async (params) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.findOne({
      where: { nombre: params.nombre },
    });
    if (plantilla_insumo) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const getBuscarPlantillaInsumo = async (nombre) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.findAll({
      where: { nombre: { [Op.like]: `%${nombre}%` } },
      order: [["nombre", "ASC"]],
    });
    if (plantilla_insumo && plantilla_insumo.length !== 0) {
      return { estado: true, plantilla: plantilla_insumo };
    } else if (plantilla_insumo.length === 0) {
      return { estado: false, plantilla: plantilla_insumo };
    }
  } catch (error) {
    throw error;
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

const deletePlantillaInsumo = async (nombre) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.destroy({
      where: { nombre: nombre },
    });
    return plantilla_insumo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPlantillasInsumos,
  getOnePlantillaInsumo,
  createNewPlantillaInsumo,
  updateOnePlantillaInsumo,
  deleteOnePlantillaInsumo,
  getOnePlantillaInsumoName,
  getBuscarPlantillaInsumo,
  deletePlantillaInsumo,
};
