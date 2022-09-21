const db = require("../Models/index");
const Comments = db.Comment;

function createComment(req, res) {
  const data = req.body;
  if (!data.post_id || !data.comments) {
    return res.status(400).send({
      success: false,
      message: "Invalid data",
    });
  }
  const commentObj = {
    post_id: data.post_id,
    comments: data.comments,
  };

  Comments.create(commentObj)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

module.exports = {
  createComment,
};
