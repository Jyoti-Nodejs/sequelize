const express = require("express");
const db = require("./Models/index");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//create table if not exists
db.sequelize.sync();

const users = require("./Routers/user.router");
const posts = require("./Routers/posts.router");
const comments = require("./Routers/comments.router");

app.use("/user", users);
app.use("/posts", posts);
app.use("/comment", comments);

app.get("/", (req, res) => {
  res.send("Server running successfully");
});

//server
app.listen(9000, () => {
  console.log("Server is running on Port: 9000");
});
