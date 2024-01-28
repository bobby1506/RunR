const express= require("express");
const app=express();
const cors = require('cors');
const cookieParser= require("cookie-parser");
const bodyParser= require("body-parser");


app.use(cors({
  origin: ['http://localhost:3000'],
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));


//route imports
const media = require("./routes/mediaRoute");
const dealer =require("./routes/dealerRoute");
const testDrive = require("./routes/testdriveRoute");
// const user= require("./routes/userRoutes");
app.use("/api/v1", media);
app.use("/api/v1", dealer);
app.use("/api/v1", testDrive);
//give the route to the api
// app.use("/api/v1", user);


app.get('*',(req,res,next)=>{
    res.status(200).json({
      message:'bad request'
    })
  })

module.exports=app;