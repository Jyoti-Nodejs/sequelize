const express = require("express");
const app = express();

const postController = require("../Controllers/posts.controller");
const router = express.Router();

router.post("/", (req, res) => {
  postController.createPost(req, res);
});

// router.get("/:user_id", (req,res)=>{
//     postController.getPostsByUserId(req,res)
// });
module.exports = router;
