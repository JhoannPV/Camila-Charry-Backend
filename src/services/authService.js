const { v4: uuid } = require("uuid");
const dotenv = require("dotenv");
const User = require("../database/User");
const jwt = require("jsonwebtoken");

dotenv.config();

const signIn = async (params) => {
  try {
    const user = await User.getOneUser(params.username);
    if (!user) {
      throw new Error("Usuario no registrado");
    } else {
      if (user.password !== params.password) {
        throw new Error("Contraseña incorrecta");
      } else {
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        return {
          userId: user.id,
          username: user.username,
          email: user.email,
          token,
        };
      }
    }
  } catch (error) {
    throw error;
  }
};

const signUp = async (params) => {
  try {
    const user = await User.createNewUser(params);
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async (filterParams) => {
  try {
    const allUsers = await User.getAllUsers(filterParams);
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getOneUserG = async (userId) => {
  try {
    const user = await User.getOneUserG(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateOneUser = async (userId, changes) => {
  try {
    const updatedUser = await User.updateOneUser(userId, changes);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteOneUser = async (userId) => {
  try {
    const deletedUser = await User.deleteOneUser(userId);
    return deletedUser;
  } catch (error) {
    throw error;
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
