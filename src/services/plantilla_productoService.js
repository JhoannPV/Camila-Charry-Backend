const { v4: uuid } = require("uuid");
const Plantilla_Producto = require("../database/Plantilla_Producto");

const getAllPlantillasProductos = async () => {
  try {
    const allPlantillasProductos =
      await Plantilla_Producto.getAllPlantillasProductos();
    return allPlantillasProductos;
  } catch (error) {
    throw error;
  }
};

const getOnePlantillaProducto = async (planProId) => {
  try {
    const plantilla_producto = await Plantilla_Producto.getOnePlantillaProducto(
      planProId
    );
    return plantilla_producto;
  } catch (error) {
    throw error;
  }
};

const getBuscarPlantillaProducto = async (params) => {
  try {
    const plantilla_producto =
      await Plantilla_Producto.getBuscarPlantillaProducto(params.nombre);
    if (plantilla_producto.estado === true) {
      return plantilla_producto.plantilla;
    } else if (plantilla_producto.estado === false) {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const createNewPlantillaProducto = async (newPlantillaProducto) => {
  const plantilla_productoToInsert = {
    ...newPlantillaProducto,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };
  const repetidoPlantillaProducto =
    await Plantilla_Producto.getOnePlantillaProductoName(
      plantilla_productoToInsert
    );
  try {
    if (repetidoPlantillaProducto === false) {
      const createdPlantillaProducto =
        await Plantilla_Producto.createNewPlantillaProducto(
          plantilla_productoToInsert
        );
      return createdPlantillaProducto;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const updateOnePlantillaProducto = async (planProId, changes) => {
  try {
    const updatedPlantillaProducto =
      await Plantilla_Producto.updateOnePlantillaProducto(planProId, changes);
    return updatedPlantillaProducto;
  } catch (error) {
    throw error;
  }
};

const deleteOnePlantillaProducto = async (planProId) => {
  try {
    const deletedPlantillaProducto =
      await Plantilla_Producto.deleteOnePlantillaProducto(planProId);
    return deletedPlantillaProducto;
  } catch (error) {
    throw error;
  }
};

const deletePlantillaProducto = async (params) => {
  try {
    const plantilla_producto = await Plantilla_Producto.deletePlantillaProducto(
      params.nombre
    );
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
  getBuscarPlantillaProducto,
  deletePlantillaProducto,
};
