const express = require("express")

const route = express.Router();

const empController =  require("../Controller/EmpController")

route.get("/empinfo",empController.empInfo)
route.post("/empdatasave",empController.empDataSave);
route.get("/empdisplay",empController.empDisplay);
route.post("/mysearch",empController.mySearch);
route.post("/mytwosearch",empController.myTwoSearch)

module.exports=route;