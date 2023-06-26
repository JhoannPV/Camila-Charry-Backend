const InsumoService = require("../services/insumoService");

const getAllInsumos = async (req, res) => {
  try {
    const allInsumos = await InsumoService.getAllInsumos();
    res.status(200).send({ status: "OK", data: allInsumos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllInsumosForPlan = async (req, res) => {
  const { body } = req;
  const plantillaInsumo = {
    plantillaInsumo: body.plantillaInId,
  };
  try {
    const allInsumos = await InsumoService.getAllInsumosForPlan(
      plantillaInsumo
    );
    res.status(200).send({ status: "OK", data: allInsumos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneInsumo = async (req, res) => {
  const {
    params: { inId },
  } = req;
  try {
    const insumo = await InsumoService.getOneInsumo(inId);
    res.send({ status: "OK", data: insumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBuscarInsumo = async (req, res) => {
  const { body } = req;
  const busqueda = {
    nombre: body.nombre,
    plantillaInsumo: body.PlantillaProIn,
  };
  try {
    const insumo = await InsumoService.getBuscarInsumo(busqueda);
    res.status(200).send({ status: "OK", data: insumo });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const createNewInsumo = async (req, res) => {
  const { body } = req;
  if (!body.nombre) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "The following keys is missing or is empty in request body: 'name'",
      },
    });
    return;
  }
  const newInsumo = {
    nombre: body.nombre,
    description: body.description,
    image: body.image,
    color: body.color,
    precioUnitario: body.precioUnitario,
    cantidad: body.cantidad,
    plantillaInsumo: body.plantillaInsumo,
  };
  try {
    const createdInsumo = await InsumoService.createNewInsumo(newInsumo);
    res.status(201).send({ status: "OK", data: createdInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneInsumo = async (req, res) => {
  const {
    body,
    params: { inId },
  } = req;
  if (!inId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':inId' can not be empty" },
    });
  }
  try {
    const updatedInsumo = await InsumoService.updateOneInsumo(inId, body);
    res.send({ status: "OK", data: updatedInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneInsumo = async (req, res) => {
  const {
    params: { inId },
  } = req;
  try {
    const deletedInsumo = await InsumoService.deleteOneInsumo(inId);
    res.status(204).send({ status: "OK", data: deletedInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteInsumo = async (req, res) => {
  const { body } = req;
  const busqueda = {
    nombre: body.nombre,
    plantillaInsumo: body.PlantillaProIn,
  };
  try {
    const insumo = await InsumoService.deleteInsumo(busqueda);
    res.status(200).send({ status: "OK", data: insumo });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
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
