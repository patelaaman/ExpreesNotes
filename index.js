const express = require("express")
const app  = express();
const mongoose = require("mongoose")

const collegeRoute = require("./Routes/StuRoute");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/Cybrom").then(()=>{
              console.log("Mongo DB Database Succesfully  Connected")
})

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/student",collegeRoute)

app.listen(8006,()=>{
    console.log("App run on 8000 Port !!!!")
})
