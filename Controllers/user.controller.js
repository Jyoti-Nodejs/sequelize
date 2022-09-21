const db = require("../Models/index");
const Users = db.User;

//fetch all user data
function findAllUser(req, res) {
  Users.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

//fetch single user's data by id
function findSingleUser(req, res) {
  Users.findByPk(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

//update single user by id
function updateSingleUser(req, res) {
  const newData = {
    name: data.name,
    email: data.email,
    username: data.username,
    password: data.password,
  };
  Users.update(newData, { where: { email: req.body.email } })
    .then(() => {
      res.send("Updated data successfully" + req.body.email);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

//delete user by id
function removeUser(req, res) {
  Users.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.send("data deleted successfully" + req.params.id);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

//fetch posts by user_id
// async function getPostsByUserId(req,res){
//   const userId = req.params.user_id;
//   await Posts.findAll({where:{user_id:userId },
//     include:[{ Models: db.posts}]}).then(data=>{
//       res.send(data);
//   }).catch(err=>{
//       res.status(500).send(err);
//   })
// }
module.exports = {
  findAllUser,
  findSingleUser,
  updateSingleUser,
  removeUser,
};
