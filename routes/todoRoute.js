const express = require("express");
const router = express.Router();


const { todoCreate, getAllTodo, getTodoByid, updateTodo, deletetodo} = require("../controller/todoController")

router.post("/createtodo", todoCreate);
router.get("/getalltodo", getAllTodo);
router.get("/gettodobyid/:id", getTodoByid);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deletetodo);



module.exports = router;