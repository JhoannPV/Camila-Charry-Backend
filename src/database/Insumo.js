const { Insumo } = require("../models/insumo.model");
const { Op } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     Insumo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: X
 *         date:
 *           type: string
 *           example: 30/05/2023
 *         color:
 *           type: string
 *           example: red
 *         precioUnitario:
 *           type: decimal
 *           example: 50000.23
 *         cantidad:
 *           type: integer
 *           example: 45
 *         decription:
 *           type: string
 *           example: Hola Mundo
 *         plantillaInsumo:
 *           type: integer
 *           example: 1
 *         image:
 *           type: blob
 *           example: image.png
 */
const getAllInsumos = async () => {
  try {
    const insumo = await Insumo.findAll({
      order: [["nombre", "ASC"]],
    });
    return insumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getAllInsumosForPlan = async (params) => {
  try {
    const insumo = await Insumo.findAll({
      where: {
        plantillaInsumo: params.plantillaInsumo,
      },
      order: [["nombre", "ASC"]],
    });
    return insumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneInsumo = async (inId) => {
  try {
    const insumo = await Insumo.findByPk(inId);
    return insumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneInsumoName = async (params) => {
  try {
    const insumo = await Insumo.findOne({
      where: {
        [Op.and]: [
          { nombre: params.nombre },
          { plantillaInsumo: params.plantillaInsumo },
        ],
      },
    });
    if (insumo) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const getBuscarInsumo = async (params) => {
  try {
    const insumo = await Insumo.findAll({
      where: {
        [Op.and]: [
          { nombre: { [Op.like]: `%${params.nombre}%` } },
          { plantillaInsumo: params.plantillaInsumo },
        ],
      },
      order: [["nombre", "ASC"]],
    });
    if (insumo && insumo.length !== 0) {
      return { estado: true, insumo: insumo };
    } else if (insumo.length === 0) {
      return { estado: false, insumo: insumo };
    }
  } catch (error) {
    throw error;
  }
};

const createNewInsumo = async (newInsumo) => {
  try {
    const createdInsumo = await Insumo.create(newInsumo);
    return createdInsumo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneInsumo = async (inId, changes) => {
  try {
    const updatedInsumo = await Insumo.update(changes, {
      where: { id: inId },
    });
    return updatedInsumo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneInsumo = async (inId) => {
  try {
    if (!(await Insumo.findByPk(inId))) {
      throw new Error("No sen econtró el elemento");
    }
    const deletedInsumo = await Insumo.destroy({
      where: { id: inId },
    });
    return deletedInsumo;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteInsumo = async (params) => {
  try {
    const insumo = await Insumo.destroy({
      where: {
        [Op.and]: [
          { nombre: params.nombre },
          { plantillaInsumo: params.plantillaInsumo },
        ],
      },
    });
    return insumo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllInsumos,
  getOneInsumo,
  createNewInsumo,
  updateOneInsumo,
  deleteOneInsumo,
  getOneInsumoName,
  getBuscarInsumo,
  deleteInsumo,
  getAllInsumosForPlan,
};
