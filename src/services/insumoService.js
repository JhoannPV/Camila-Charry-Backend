const { v4: uuid } = require("uuid");
const Insumo = require("../database/Insumo");

const getAllInsumos = async () => {
  try {
    const allInsumos = await Insumo.getAllInsumos();
    return allInsumos;
  } catch (error) {
    throw error;
  }
};

const getAllInsumosForPlan = async (params) => {
  try {
    const allInsumos = await Insumo.getAllInsumosForPlan(params);
    return allInsumos;
  } catch (error) {
    throw error;
  }
};

const getOneInsumo = async (inId) => {
  try {
    const insumo = await Insumo.getOneInsumo(inId);
    return insumo;
  } catch (error) {
    throw error;
  }
};

const getBuscarInsumo = async (params) => {
  try {
    const insumo = await Insumo.getBuscarInsumo(params);
    if (insumo.estado === true) {
      return insumo.insumo;
    } else if (insumo.estado === false) {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const createNewInsumo = async (newInsumo) => {
  const insumoToInsert = {
    ...newInsumo,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };
  const repetidoInsumo = await Insumo.getOneInsumoName(insumoToInsert);
  try {
    if (repetidoInsumo === false) {
      const createdInsumo = await Insumo.createNewInsumo(insumoToInsert);
      return createdInsumo;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const updateOneInsumo = async (inId, changes) => {
  try {
    const updatedInsumo = await Insumo.updateOneInsumo(inId, changes);
    return updatedInsumo;
  } catch (error) {
    throw error;
  }
};

const deleteOneInsumo = async (inId) => {
  try {
    const deletedInsumo = await Insumo.deleteOneInsumo(inId);
    return deletedInsumo;
  } catch (error) {
    throw error;
  }
};

const deleteInsumo = async (params) => {
  try {
    const insumo = await Insumo.deleteInsumo(params);
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
  getBuscarInsumo,
  deleteInsumo,
  getAllInsumosForPlan,
};
