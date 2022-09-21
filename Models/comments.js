module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      autoNull: false,
      primaryKey: true,
    },
    posts_id: {
      type: Sequelize.INTEGER,
      autoNull: false,
      foreignKey: true,
    },
    comments: {
      type: Sequelize.STRING,
    },
  });
  return Comment;
};
