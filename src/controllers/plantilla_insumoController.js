const PlantillaInsumoService = require("../services/plantilla_insumoService");

const getAllPlantillasInsumos = async (req, res) => {
  try {
    const allPlantillasInsumos =
      await PlantillaInsumoService.getAllPlantillasInsumos();
    res.status(200).send({ status: "OK", data: allPlantillasInsumos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOnePlantillaInsumo = async (req, res) => {
  const {
    params: { planInId },
  } = req;
  try {
    const plantilla_insumo = await PlantillaInsumoService.getOnePlantillaInsumo(
      planInId
    );
    res.send({ status: "OK", data: plantilla_insumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBuscarPlantillaInsumo = async (req, res) => {
  console.log(req);
  const { nombre } = req.body;
  try {
    const plantilla_insumo =
      await PlantillaInsumoService.getBuscarPlantillaInsumo({
        nombre,
      });
    res.status(200).send({ status: "OK", data: plantilla_insumo });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const createNewPlantillaInsumo = async (req, res) => {
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
  const newPlantillaInsumo = {
    nombre: body.nombre,
    description: body.description,
    image: body.image,
  };
  try {
    const createdPlantillaInsumo =
      await PlantillaInsumoService.createNewPlantillaInsumo(newPlantillaInsumo);
    res.status(201).send({ status: "OK", data: createdPlantillaInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOnePlantillaInsumo = async (req, res) => {
  const {
    body,
    params: { planInId },
  } = req;
  if (!planInId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':planInId' can not be empty" },
    });
  }
  try {
    const updatedPlantillaInsumo =
      await PlantillaProductoService.updateOnePlantillaInsumo(planInId, body);
    res.send({ status: "OK", data: updatedPlantillaInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOnePlantillaInsumo = async (req, res) => {
  const {
    params: { planInId },
  } = req;
  try {
    const deletedPlantillaInsumo =
      await PlantillaInsumoService.deleteOnePlantillaInsumo(planInId);
    res.status(204).send({ status: "OK", data: deletedPlantillaInsumo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
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
