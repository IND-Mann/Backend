exports.dummyLink = async (req, res)=>{
res.send("heeloo")
}

const Post = require("../model/postModel");
const Like = require("../model/likeModel");

exports.likePost = async(req, res)=>{
    try{
        const {post,user}= req.body;
 const like = new Like({
    post, user
 });
  const savedLike = await like.save();
 
  const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike }},{new: true}).populate("likes").exec();

  res.status(200).json({
    success: true,
    post: updatedPost,
    massage:  "liked successfull"
  })
    }catch(err){
        console.error(err);
        res.status(500).json({
            sucess:false,
            massage: "internal server error"
        })

    }
}


exports.unlikePost = async (req, res)=>{
    try{

        const {post, like}= req.body;

        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

        const updatePost = await Post.findByIdAndUpdate(post, {$pull:{likes: deletedLike._id}},{new:true});
        
        res.status(200).json({
            sucess:true,
            post: updatePost,
            massage: "Unlike sucesfull"
        })


    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            massage: "internal server error or error while unlike"
        })
    }
}