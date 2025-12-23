const Post = require("../model/postModel");
const Comment = require("../model/commentModel");


exports.createComment = async ( req, res)=>{
try{
  const {post,user, body} = req.body;
     const comment= new Comment({
        post, user, body
     })
     const savedComment =  await comment.save();

     const updatePost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new: true}).populate("comments").exec();


     res.status(200).json({
        success:true, 
        post: updatePost,
        massage: "you comment on the Post"
     })
}catch(err){
    console.error(err)
    res.status(500).json({
        success: false,
        massage: "internal server error"
    })
}
}


exports.removeComment = async ( req, res)=>{
    try{
    const {post, comment}= req.body;

    const deleteComment = await Comment.findOneAndDelete({post: post, _id: comment});

    const updatePost = await Post.findByIdAndUpdate(post, {$pull: {comments: deleteComment._id}},{new: true})

res.status(200).json({
    success: true,
    post: updatePost,
    massage: "Comment deleted sucessfully"
})
    }catch(err){
        console.error(err);
        res.status(500).json({
              success: false,
        massage: "internal server error"
        })
    }
}