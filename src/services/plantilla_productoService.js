const { v4: uuid } = require("uuid");
const Plantilla_Producto = require("../database/Plantilla_Producto");

const getAllPlantillasProductos = async (filterParams) => {
  try {
    const allPlantillasProductos =
      await Plantilla_Producto.getAllPlantillasProductos(filterParams);
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

const createNewPlantillaProducto = async (newPlantillaProducto) => {
  const plantilla_productoToInsert = {
    ...newPlantillaProducto,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };

  try {
    const createdPlantillaProducto =
      await Plantilla_Producto.createNewPlantillaProducto(
        plantilla_productoToInsert
      );
    return createdPlantillaProducto;
  } catch (error) {
    throw error;
  }
};

const updateOnePlantillaProducto = async (planProId, changes) => {
  try {
    const updatedPlantillaProdcuto =
      await Plantilla_Producto.updateOnePlantillaProducto(planProId, changes);
    return updatedPlantillaProdcuto;
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

module.exports = {
  getAllPlantillasProductos,
  getOnePlantillaProducto,
  createNewPlantillaProducto,
  updateOnePlantillaProducto,
  deleteOnePlantillaProducto,
};