const stuModel = require("../Model/StuModel")

const stuInformation=(req,res)=>{
    res.send("This is Students Data  we are from Cybromm")

}
const dataSave =(req,res)=>{
    const {rollno, name ,city} = req.body;
    const student = new stuModel({
        rollno :rollno,
        name : name ,
        city: city
    })
    student.save();
    res.send("Data  SuccesFully save")
}
const studisplay=async(req,res)=>{
    const studata  = await stuModel.find();

    res.send(studata);
}

const  mySearch  =async (req,res)=>{
    const {rollno} = req.body;
    const data   = await stuModel.find({"rollno":rollno})
    console.log(data)
    res.send(data)
}

const stuSearch = async (req,res)=>{
      const {name ,city} = req.body;
      const data   = await stuModel.find({$and:[{"name":name},{"city":city}]})
      console.log(data)
      res.send(data)
}
const  SearchByQuery=async(req,res)=>{
    const {name ,city}  = req.query;
    const Data = await stuModel.find({$and:[{"name":name},{"city":city}]})
   
    console.log(Data)
    res.send(Data);
}

const SavaCreateData=(req,res)=>{
    const {roll, na ,ci} = req.body;
    const mydata = stuModel.create({
        rollno:roll,
        name :na,
        city:ci
    })
    res.send("Data save by  Create")
    console.log(mydata)
}

module.exports={
    stuInformation,
    dataSave,
    studisplay,
    mySearch, 
    stuSearch,
    SearchByQuery,
    SavaCreateData

}