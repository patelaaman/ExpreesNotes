const  express = require("express")
const app = express();
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const empRoute = require("./Routes/EmpRoute");

mongoose.connect("mongodb://127.0.0.1:27017/PracticeEmpdata").then(()=>{
    console.log("Data Succesfully Connnected")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/employee",empRoute)

app.listen(7000,()=>{
    console.log("Server Run on Port 7000")
})