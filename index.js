const express =  require("express");
const cors = require("cors")
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
const todoRoute = require("./routes/todoRoute");
const postRoutes = require("./routes/postRoutes")
app.use("/api/v1", todoRoute);
app.use("/api/blog", postRoutes),

app.listen(port, ()=>{
    console.log(`started at ${port}`)
});

const dbConnect = require("./config/db");
dbConnect();  

const dbConnection =require("./config/db")
dbConnection();

app.get("/", (req, res)=>{
    res.send("hello everyone");
})