module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define("posts", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      autoNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      autoNull: false,
      foreignKey: true,
    },
    image: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Posts;
};
