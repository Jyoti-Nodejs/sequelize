module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      autoNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    Otp: {
      type: Sequelize.STRING,
      autoNull: true,
    },
    expireIn: {
      type: Sequelize.INTEGER,
      autoNull: true,
    },
  });
  return User;
};
