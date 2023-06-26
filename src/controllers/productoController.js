const ProductoService = require("../services/productoService");

const getAllProductos = async (req, res) => {
  try {
    const allProductos = await ProductoService.getAllProductos();
    res.status(200).send({ status: "OK", data: allProductos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllProductosForPlan = async (req, res) => {
  const { body } = req;
  const plantillaProducto = {
    plantillaProducto: body.plantillaProId,
  };
  try {
    const allProductos = await ProductoService.getAllProductosForPlan(
      plantillaProducto
    );
    res.status(200).send({ status: "OK", data: allProductos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneProducto = async (req, res) => {
  const {
    params: { proId },
  } = req;
  try {
    const producto = await ProductoService.getOneProducto(proId);
    res.send({ status: "OK", data: producto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBuscarProducto = async (req, res) => {
  const { body } = req;
  const busqueda = {
    nombre: body.nombre,
    plantillaProducto: body.PlantillaProIn,
  };
  try {
    const producto = await ProductoService.getBuscarProducto(busqueda);
    res.status(200).send({ status: "OK", data: producto });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const createNewProducto = async (req, res) => {
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
  const newProducto = {
    nombre: body.nombre,
    description: body.description,
    image: body.image,
    color: body.color,
    precioUnitario: body.precioUnitario,
    cantidad: body.cantidad,
    plantillaProducto: body.plantillaProducto,
  };
  try {
    const createdProducto = await ProductoService.createNewProducto(
      newProducto
    );
    res.status(201).send({ status: "OK", data: createdProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneProducto = async (req, res) => {
  const {
    body,
    params: { proId },
  } = req;
  if (!proId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':proId' can not be empty" },
    });
  }
  try {
    const updatedProducto = await ProductoService.updateOneProducto(
      proId,
      body
    );
    res.send({ status: "OK", data: updatedProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneProducto = async (req, res) => {
  const {
    params: { proId },
  } = req;
  try {
    const deletedProducto = await ProductoService.deleteOneProducto(proId);
    res.status(204).send({ status: "OK", data: deletedProducto });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteProducto = async (req, res) => {
  const { body } = req;
  const busqueda = {
    nombre: body.nombre,
    plantillaProducto: body.PlantillaProIn,
  };
  try {
    const producto = await ProductoService.deleteProducto(busqueda);
    res.status(200).send({ status: "OK", data: producto });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getAllProductos,
  getOneProducto,
  createNewProducto,
  updateOneProducto,
  deleteOneProducto,
  getBuscarProducto,
  deleteProducto,
  getAllProductosForPlan,
};
