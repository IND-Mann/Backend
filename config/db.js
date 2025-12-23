const mongoose= require("mongoose");

// require("dotenv").config();

const dbConnect =()=>{
    mongoose.connect("mongodb://localhost:27017/dbkhel", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connection sucessfull");
    }).catch((err)=>{
        console.log("err", err);
        process.exit(1);
    })
}

module.exports = dbConnect;



require("dotenv").config();

const dbConnection =()=>{
    mongoose.connect(process.env.PostDb_Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connection sucessfull");
    }).catch((err)=>{
        console.log("err", err);
        process.exit(1);
    })
}

module.exports = dbConnection;