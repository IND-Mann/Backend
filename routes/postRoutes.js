const express = require("express");
const router = express.Router();


const { dummyLink} = require("../controller/likeController");
const { createComment,removeComment} = require("../controller/commentController")
const { createPost,allPost, deletePost} = require("../controller/postController")
const {likePost, unlikePost} = require("../controller/likeController")

router.get("/dummy", dummyLink);
router.post("/comment/create", createComment)
router.post("/post/create", createPost);
router.get("/post/all",allPost);
router.delete("/post/delete/:id", deletePost);
router.post("/comment/delete", removeComment);
router.post("/post/like", likePost)
router.post("/post/unlike", unlikePost)

module.exports = router;