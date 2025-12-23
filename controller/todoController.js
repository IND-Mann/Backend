const Todo = require("../model/todoModel");


exports.todoCreate = async(req, res)=>{
    try{
const {title, description} = req.body;
 const response = await Todo.create({title, description});

 res.status(200).json({
    success: true,
    data: response,
    massage: "data entry sucessfull"
 })

    }catch(err){
console.error(err);
console.log(err);
res.status(500).json({success: false,data: "internal error", massage: err.massage})
    }
}

exports.getAllTodo = async( req, res)=>{
  try{
      const response = await Todo.find({});
    res.status(200).json({
        success:true,
        data: response,
        massage: "get all data"
    })
  }catch(err){
    console.error(err);
    console.log(err.massage);
     res.status(500).json({
        success:false,
        data: "server ever",
        massage: err.massage
    })
  }
}

exports.getTodoByid = async (req, res)=>{

  try{
  const {id} = req.params;
    const response = await Todo.findById({_id: id})

    if(!response){
        res.status(200).json({
            success:true,
            data: `with id(${id}) has been not found data`,
            massage: "try again with proper id"
        })
    }

     res.status(200).json({
            success:true,
            data: response,
            massage: `data of id${id}`
        })
  }catch(err){
 res.status(500).json({
            success:false,
            data: `with id(${id}) has been not found data`,
            massage: err.massage
        })
  }
}

exports.updateTodo = async (req, res)=>{
try{
        const {id} = req.params;
    const {title, description} = req.body;
  const response = await Todo.findByIdAndUpdate({_id: id},{title,description,updateAt: Date.now()})

  res.status(200).json({
    success: true,
    data: response,
    massage: "find and update the task"
  })
}catch(err){
     res.status(500).json({
    success: false,
    data: "something went wrong",
    massage: err.massage
  })
}
}


exports.deletetodo = async ( req, res)=>{
    try{
const {id} = req.params;
const response = await Todo.findByIdAndDelete({_id: id})

     res.status(200).json({
        success:true,
        data: "Data deleted successfully",
        massage: "removed from data"
    })


    }catch(err){
res.status(500).json({
    success: false,
    data: "something went wrong",
    massage: err.massage
})
    }
}