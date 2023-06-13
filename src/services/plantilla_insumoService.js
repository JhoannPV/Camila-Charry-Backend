const { v4: uuid } = require("uuid");
const Plantilla_Insumo = require("../database/Plantilla_Insumo");

const getAllPlantillasInsumos = async () => {
  try {
    const allPlantillasInsumos =
      await Plantilla_Insumo.getAllPlantillasInsumos();
    return allPlantillasInsumos;
  } catch (error) {
    throw error;
  }
};

const getOnePlantillaInsumo = async (planInId) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.getOnePlantillaInsumo(
      planInId
    );
    return plantilla_insumo;
  } catch (error) {
    throw error;
  }
};

const getBuscarPlantillaInsumo = async (params) => {
  try {
    const plantilla_insumo = await Plantilla_Insumo.getBuscarPlantillaInsumo(
      params.nombre
    );
    return plantilla_insumo;
  } catch (error) {
    throw error;
  }
};

const createNewPlantillaInsumo = async (newPlantillaInsumo) => {
  const plantilla_insumoToInsert = {
    ...newPlantillaInsumo,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };
  const repetidoPlantillaInsumo =
    await Plantilla_Insumo.getOnePlantillaInsumoName(plantilla_insumoToInsert);
  try {
    if (repetidoPlantillaInsumo === false) {
      const createdPlantillaInsumo =
        await Plantilla_Insumo.createNewPlantillaInsumo(
          plantilla_insumoToInsert
        );
      return createdPlantillaInsumo;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const updateOnePlantillaInsumo = async (planInId, changes) => {
  try {
    const updatedPlantillaInsumo =
      await Plantilla_Insumo.updateOnePlantillaProducto(planInId, changes);
    return updatedPlantillaInsumo;
  } catch (error) {
    throw error;
  }
};

const deleteOnePlantillaInsumo = async (planInId) => {
  try {
    const deletedPlantillaInsumo =
      await Plantilla_Insumo.deleteOnePlantillaProducto(planInId);
    return deletedPlantillaInsumo;
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
  getBuscarPlantillaInsumo,
};
