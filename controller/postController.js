const Post = require("../model/postModel");


exports.createPost = async (req,res)=>{
   
try{
     const { title, body}= req.body;
     const post = new Post({
        title, body
     });

     const savedPost = await post.save();

    res.status(200).json({
        success: true,
        post: savedPost,
        massage: "successfull post created"
    })
}catch(err){
    console.error(err)
    res.status(500).json({
        success: false,
        massage: "internal server error"
    })
}
   
}

exports.allPost =async(req,res)=>{
    try{
const posts = await Post.find({});
res.status(200).json({
    success:true,
    posts: posts,
    massage: "response successfully fetched"
})
    }catch(err){
console.error(err)
 res.status(500).json({
        success: false,
        massage: "internal server error"
    })
    }
}

exports.deletePost = async (req, res)=>{
    try{
const {id} = req.params;
const post = await Post.findByIdAndDelete({_id: id},{new: true});

res.status(200).json({
    success: true,
    post: post,
    massage: "post deleted sucessfully"
})
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            massage: "internal server error"
        })
    }
}