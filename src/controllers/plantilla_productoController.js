const PlantillaProductoService = require("../services/plantilla_productoService");

const getAllPlantillasProductos = async (req, res) => {
  try {
    const allPlantillasProductos =
      await PlantillaProductoService.getAllPlantillasProductos();
    res.status(200).send({ status: "OK", data: allPlantillasProductos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOnePlantillaProducto = async (req, res) => {
  const {
    params: { planProId },
  } = req;
  try {
    const plantilla_producto =
      await PlantillaProductoService.getOnePlantillaProducto(planProId);
    res.send({ status: "OK", data: plantilla_producto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewPlantillaProducto = async (req, res) => {
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
  const newPlantillaProducto = {
    nombre: body.nombre,
    description: body.description,
    image: body.image,
  };
  try {
    const createdPlantillaProducto =
      await PlantillaProductoService.createNewPlantillaProducto(
        newPlantillaProducto
      );
    res.status(201).send({ status: "OK", data: createdPlantillaProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOnePlantillaProducto = async (req, res) => {
  const {
    body,
    params: { planProId },
  } = req;
  if (!planProId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':planProId' can not be empty" },
    });
  }
  try {
    const updatedPlantillaProducto =
      await PlantillaProductoService.updateOnePlantillaProducto(
        planProId,
        body
      );
    res.send({ status: "OK", data: updatedPlantillaProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOnePlantillaProducto = async (req, res) => {
  const {
    params: { planProId },
  } = req;
  try {
    const deletedPlantillaProducto =
      await PlantillaProductoService.deleteOnePlantillaProducto(planProId);
    res.status(204).send({ status: "OK", data: deletedPlantillaProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllPlantillasProductos,
  getOnePlantillaProducto,
  createNewPlantillaProducto,
  updateOnePlantillaProducto,
  deleteOnePlantillaProducto,
};
