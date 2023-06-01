const authService = require("../services/authService");

const signIn = async (req, res) => {
  console.log(req);
  const { username, password } = req.body;
  try {
    const token = await authService.signIn({ username, password });
    res.status(200).send({ status: "OK", data: token });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const signUp = async (req, res) => {
  const { nombre, apellido, edad, username, email, password, role } = req.body;
  try {
    const createdUser = await authService.signUp({
      nombre,
      apellido,
      edad,
      username,
      email,
      password,
      role,
    });
    res.send({ status: "OK", data: createdUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const getAllUsers = async (req, res) => {
  const { nombre } = req.query;

  try {
    const allUsers = await authService.getAllUsers({
      nombre,
    });
    res.status(200).send({ status: "OK", data: allUsers });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const getOneUserG = async (req, res) => {
  const {
    params: { userId },
  } = req;
  if (!userId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }
  try {
    const user = await authService.getOneUserG(userId);
    res.send({ status: "OK", data: user });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const updateOneUser = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  if (!userId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':userId' can not be empty" },
    });
  }
  try {
    const updatedUser = await authService.updateOneUser(userId, body);
    res.send({ status: "OK", data: updatedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneUser = async (req, res) => {
  const {
    params: { userId },
  } = req;
  try {
    const deletedUser = await authService.deleteOneUser(userId);
    res.status(204).send({ status: "OK", data: deletedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  signIn,
  signUp,
  getAllUsers,
  getOneUserG,
  updateOneUser,
  deleteOneUser,
};
