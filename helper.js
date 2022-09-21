//const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
process.env.TOKEN_SECRET;

//generate token function
function generateToken(userData) {
  return jwt.sign(userData, process.env.TOKEN_SECRET);
}

//compare pass function`
function comparePass(password, hash) {
  try {
    return bcrypt.compare(password, hash);
  } catch (err) {
    return false;
  }
}

//verify token
function decodeToken(token, res) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, result) => {
      if (err) {
        res.sendStatus(403);
      } else {
        resolve(result);
      }
    });
  });
}

//verify token
async function validateJWTToken(req, res, next) {
  try {
    const authToken = req.headers.authorization;
    const authArr = authToken.split(" ");
    const token = authArr[1];
    if (token == null) {
      return res.status(401).json({
        message: err.message,
      });
    } else {
      const result = await decodeToken(token, res);
      req.user = result;
      console.log("result : ", result);
      next();
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
module.exports = {
  generateToken,
  comparePass,
  validateJWTToken,
};
