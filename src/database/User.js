const { User } = require("../models/user.model");

const getOneUser = async (username) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    return user;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getAllUsers = async () => {
  try {
    const user = await User.findAll();
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneUserG = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
const getOneUserUsername = async (params) => {
  try {
    const user = await User.findOne({ where: { username: params.username } });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
const getOneUserEmail = async (params) => {
  try {
    const user = await User.findOne({ where: { email: params.email } });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
const updateOneUser = async (userId, changes) => {
  try {
    const updatedUser = await User.update(changes, {
      where: { id: userId },
    });
    return updatedUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneUser = async (userId) => {
  try {
    if (!(await User.findByPk(userId))) {
      throw new Error("No sen econtró el elemento");
    }
    const deletedUser = await User.destroy({
      where: { id: userId },
    });
    return deletedUser;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  createNewUser,
  getOneUser,
  getAllUsers,
  getOneUserG,
  updateOneUser,
  deleteOneUser,
  getOneUserUsername,
  getOneUserEmail,
};
