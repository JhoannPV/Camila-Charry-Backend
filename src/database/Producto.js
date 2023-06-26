const { Producto } = require("../models/producto.model");
const { Op } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     Producto:
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
 *         plantillaProducto:
 *           type: integer
 *           example: 1
 *         image:
 *           type: blob
 *           example: image.png
 */
const getAllProductos = async () => {
  try {
    const producto = await Producto.findAll({
      order: [["nombre", "ASC"]],
    });
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getAllProductosForPlan = async (params) => {
  try {
    const producto = await Producto.findAll({
      where: {
        plantillaProducto: params.plantillaProducto,
      },
      order: [["nombre", "ASC"]],
    });
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneProducto = async (proId) => {
  try {
    const producto = await Producto.findByPk(proId);
    return producto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneProductoName = async (params) => {
  try {
    const producto = await Producto.findOne({
      where: {
        [Op.and]: [
          { nombre: params.nombre },
          { plantillaProducto: params.plantillaProducto },
        ],
      },
    });
    if (producto) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const getBuscarProducto = async (params) => {
  try {
    const producto = await Producto.findAll({
      where: {
        [Op.and]: [
          { nombre: { [Op.like]: `%${params.nombre}%` } },
          { plantillaProducto: params.plantillaProducto },
        ],
      },
      order: [["nombre", "ASC"]],
    });
    if (producto && producto.length !== 0) {
      return { estado: true, producto: producto };
    } else if (plantilla_producto.length === 0) {
      return { estado: false, producto: producto };
    }
  } catch (error) {
    throw error;
  }
};

const createNewProducto = async (newProducto) => {
  try {
    const createdProducto = await Producto.create(newProducto);
    return createdProducto;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneProducto = async (proId, changes) => {
  try {
    const updatedProducto = await Producto.update(changes, {
      where: { id: proId },
    });
    return updatedProducto;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneProducto = async (proId) => {
  try {
    if (!(await Producto.findByPk(proId))) {
      throw new Error("No sen encontró el elemento");
    }
    const deletedProducto = await Producto.destroy({
      where: { id: proId },
    });
    return deletedProducto;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteProducto = async (params) => {
  try {
    const producto = await Producto.destroy({
      where: {
        [Op.and]: [
          { nombre: params.nombre },
          { plantillaProducto: params.plantillaProducto },
        ],
      },
    });
    return producto;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProductos,
  getOneProducto,
  createNewProducto,
  updateOneProducto,
  deleteOneProducto,
  getOneProductoName,
  getBuscarProducto,
  deleteProducto,
  getAllProductosForPlan,
};
