const express = require("express");

const authController = require("../../controllers/authController");

const router = express.Router();

router.post("/signin", authController.signIn);

router.post("/signup", authController.signUp);

router.get("/users", authController.getAllUsers);

router.get("/users/:userId", authController.getOneUserG);

router.patch("/users/:userId", authController.updateOneUser);

router.delete("/users/:userId", authController.deleteOneUser);

module.exports = router;
