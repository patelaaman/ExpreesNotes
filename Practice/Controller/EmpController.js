const empModel = require("../Models/EmpModel")
const empInfo =(req,res)=>{
    res.send("This is mdke")
}
const empDataSave =(req,res)=>{
    const {empid, empname,empcity,empage } = req.body;
    const emp = new empModel({
        empid:empid,
        empname :empname,
        empcity:empcity,
        empage :empage
    })
       emp.save();
       res.send("Data Succesfully Save ")
      
}

const empDisplay=async (req,res)=>{
    const empdata = await empModel.find();

    res.send(empdata)
}

const mySearch=async(req,res)=>{
     const {empid} = req.body;
     const empdata = await empModel.find({"empid":empid})
     console.log(empdata)
     res.send(empdata)
}

const myTwoSearch=async(req,res)=>{
    const {empid, empname}=req.body;
    const empdata=await empModel.find({$and:[{"empid":empid, "empname":empname}]})

    console.log(empdata)
    res.send(empdata)
}

module.exports={
    empInfo,
    empDataSave,
    empDisplay,
    mySearch,
    myTwoSearch
}