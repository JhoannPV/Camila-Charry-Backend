const { Plantilla_Producto } = require("../models/plantilla_producto.model");
const { Op } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     Plantilla_Producto:
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
const getAllPlantillasProductos = async () => {
  try {
    const plantilla_producto = await Plantilla_Producto.findAll({
      order: [["nombre", "ASC"]],
    });
    return plantilla_producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOnePlantillaProducto = async (planProId) => {
  try {
    const plantilla_producto = await Plantilla_Producto.findByPk(planProId);
    return plantilla_producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOnePlantillaProductoName = async (params) => {
  try {
    const plantilla_producto = await Plantilla_Producto.findOne({
      where: { nombre: params.nombre },
    });
    if (plantilla_producto) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const getBuscarPlantillaProducto = async (nombre) => {
  try {
    const plantilla_producto = await Plantilla_Producto.findAll({
      where: {
        nombre: { [Op.like]: `%${nombre}%` },
      },
      order: [["nombre", "ASC"]],
    });
    if (plantilla_producto && plantilla_producto.length !== 0) {
      return { estado: true, plantilla: plantilla_producto };
    } else if (plantilla_producto.length === 0) {
      return { estado: false, plantilla: plantilla_producto };
    }
  } catch (error) {
    throw error;
  }
};

const createNewPlantillaProducto = async (newPlantillaProducto) => {
  try {
    const createdPlantillaProducto = await Plantilla_Producto.create(
      newPlantillaProducto
    );
    return createdPlantillaProducto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOnePlantillaProducto = async (planProId, changes) => {
  try {
    const updatedPlantillaProducto = await Plantilla_Producto.update(changes, {
      where: { id: planProId },
    });
    return updatedPlantillaProducto;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOnePlantillaProducto = async (planProId) => {
  try {
    if (!(await Plantilla_Producto.findByPk(planProId))) {
      throw new Error("No sen encontró el elemento");
    }
    const deletedPlantillaProducto = await Plantilla_Producto.destroy({
      where: { id: planProId },
    });
    return deletedPlantillaProducto;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deletePlantillaProducto = async (nombre) => {
  try {
    const plantilla_producto = await Plantilla_Producto.destroy({
      where: { nombre: nombre },
    });
    return plantilla_producto;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPlantillasProductos,
  getOnePlantillaProducto,
  createNewPlantillaProducto,
  updateOnePlantillaProducto,
  deleteOnePlantillaProducto,
  getOnePlantillaProductoName,
  getBuscarPlantillaProducto,
  deletePlantillaProducto,
};
