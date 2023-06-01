const PlantillaProductoService = require("../services/plantilla_productoService");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const getAllPlantillasProductos = async (req, res) => {
  const { nombre } = req.query;

  try {
    const allPlantillasProductos =
      await PlantillaProductoService.getAllPlantillasProductos({
        nombre,
      });
    res.status(200).send({ status: "OK", data: allPlantillasProductos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOnePlantillaProducto = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  const {
    params: { planProId },
  } = req;
  if (!planProId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':planProId' can not be empty" },
    });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      const plantilla_producto =
        await PlantillaProductoService.getOnePlantillaProducto(planProId);
      res.send({ status: "OK", data: plantilla_producto });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewPlantillaProducto = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

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
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      const createdPlantillaProducto =
        await PlantillaProductoService.createNewPlantillaProducto(
          newPlantillaProducto
        );
      res.status(201).send({ status: "OK", data: createdPlantillaProducto });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOnePlantillaProducto = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

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
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      const updatedPlantillaProducto =
        await PlantillaProductoService.updateOnePlantillaProducto(
          planProId,
          body
        );
      res.send({ status: "OK", data: updatedPlantillaProducto });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOnePlantillaProducto = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  const {
    params: { planProId },
  } = req;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      const deletedPlantillaProducto =
        await PlantillaProductoService.deleteOnePlantillaProducto(planProId);
      res.status(204).send({ status: "OK", data: deletedPlantillaProducto });
    }
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
