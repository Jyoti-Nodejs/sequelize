const express = require("express");
const app = express();

const commentController= require("../Controllers/comments.controller");
const router = express.Router();

router.post("/", (req,res)=>{
    commentController.createComment(req,res)
});

module.exports= router;