const db = require("../Models/index");
const Posts = db.Posts;

function createPost(req, res) {
  const { user_id, image, description } = req.body;
  if (!user_id || !image || !description) {
    return res.status(400).send({
      success: false,
      message: "Invalid data",
    });
  }
  const postObj = {
    user_id: data.user_id,
    image: data.image,
    description: data.description,
  };

  Posts.create(postObj)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

// //fetch posts by user_id
// async function getPostsByUserId(req, res) {
//   const userId = req.params.user_id;
//   await db.user
//     .findOne({
//       where: { id: userId },
//       include: [
//         {
//           model: db.posts,
//           include: [{ model: db.comment }],
//         },
//       ],
//     })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// }

// async function getPostsByUserId(req, res) {
//   const user_id = req.params.user_id;
//   const users = await Users.findOne(
//     {where:{id:user_id },
//     include:[{ model: db.posts}]
//   })
//   return res.send(users);
// }

module.exports = {
  createPost,
  //getPostsByUserId,
};
