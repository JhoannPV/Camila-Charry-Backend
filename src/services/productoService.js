const { v4: uuid } = require("uuid");
const Producto = require("../database/Producto");

const getAllProductos = async () => {
  try {
    const allProductos = await Producto.getAllProductos();
    return allProductos;
  } catch (error) {
    throw error;
  }
};

const getAllProductosForPlan = async (params) => {
  try {
    const allProductos = await Producto.getAllProductosForPlan(params);
    return allProductos;
  } catch (error) {
    throw error;
  }
};

const getOneProducto = async (proId) => {
  try {
    const producto = await Producto.getOneProducto(proId);
    return producto;
  } catch (error) {
    throw error;
  }
};

const getBuscarProducto = async (params) => {
  try {
    const producto = await Producto.getBuscarProducto(params);
    if (producto.estado === true) {
      return producto.producto;
    } else if (producto.estado === false) {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const createNewProducto = async (newProducto) => {
  const productoToInsert = {
    ...newProducto,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };
  const repetidoProducto = await Producto.getOneProductoName(productoToInsert);
  try {
    if (repetidoProducto === false) {
      const createdProducto = await Producto.createNewProducto(
        productoToInsert
      );
      return createdProducto;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const updateOneProducto = async (proId, changes) => {
  try {
    const updatedProducto = await Producto.updateOneProducto(proId, changes);
    return updatedProducto;
  } catch (error) {
    throw error;
  }
};

const deleteOneProducto = async (proId) => {
  try {
    const deletedProducto = await Producto.deleteOneProducto(proId);
    return deletedProducto;
  } catch (error) {
    throw error;
  }
};

const deleteProducto = async (params) => {
  try {
    const producto = await Producto.deleteProducto(params);
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
  getBuscarProducto,
  deleteProducto,
  getAllProductosForPlan,
};
