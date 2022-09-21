const db = require("../Models/index");
const Users = require("../Models/users");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const { generateToken, comparePass } = require("../helper");
const salt = 10;

function signup(req, res) {
  const { name, email, username, password } = req.body;
  if (!name || !email || !username || !password) {
    return res.status(400).send({
      success: false,
      message: "Invalid data",
    });
  }
  bcrypt.hash(password, salt, (err, hash) => {
    const userObj = {
      name: name,
      email: email,
      username: username,
      password: hash,
    };
    if (validator.validate(email)) {
      Users.create(userObj)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    } else {
      res.send("Invalid email");
    }
  });
}

async function login(req, res) {
  const username = req.params.username;
  const password = req.params.password;
  const result = await Users.findOne({
    where: { username: username },
    include: [{ model: db.posts }],
  });

  if (result && result.length) {
    const userData = result[0];
    const match = await comparePass(password, userData.password);
    console.log(match);
    if (match) {
      const token = generateToken(JSON.stringify(userData), res);
      const user = {
        ...userData,
        token,
      };
      res.send(user);
    } else {
      res.status(401).send({
        success: false,
        message: "Wrong password",
      });
    }
  } else {
    res.send("User not found");
  }
}

module.exports = {
  signup,
  login,
};
