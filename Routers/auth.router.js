const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const authController = require("../Controllers/auth.controller");
const router = express.Router();

router.post("/signup", (req, res) => {
  authController.signup(req, res);
});

router.post("/login", (req, res) => {
  authController.login(req, res);
});
