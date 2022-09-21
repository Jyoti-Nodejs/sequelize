const Sequelize = require("sequelize");
const sequelize = new Sequelize("userDB", "root", "", {
  host: "localhost",
  dialect: "mysql", //database which are used
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//create model tables
db.User = require("./users")(sequelize, Sequelize);
db.Posts = require("./posts")(sequelize, Sequelize);
db.Comment = require("./comments")(sequelize, Sequelize);

db.User.hasMany(db.Posts, { foreignKey: "user_id" });
db.Posts.hasMany(db.Comment, { foreignKey: "posts_id" });

module.exports = db;
