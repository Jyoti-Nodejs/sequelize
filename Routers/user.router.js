const express = require("express");
const bodyParser = require("body-parser");
const userController = require("../Controllers/user.controller");
const app = express();
app.use(bodyParser.json());
const router = express.Router();

router.post("/", (req, res) => {
  userController.createUser(req, res);
});

router.post("/login/:username/:password", (req, res) => {
  userController.loginUser(req, res);
});

router.get("/all", (req, res) => {
  userController.findAllUser(req, res);
});

router.get("/", (req, res) => {
  userController.findSingleUser(req, res);
});

router.put("/updateUser", (req, res) => {
  userController.updateSingleUser(req, res);
});

router.delete("/deleteUser", (req, res) => {
  userController.removeUser(req, res);
});

module.exports = router;
