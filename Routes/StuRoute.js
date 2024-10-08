const express = require("express")

const route = express.Router();

const stucontroller  = require("../Controller/StuController")

route.get("/stuinfo",stucontroller.stuInformation);
route.post("/datasave",stucontroller.dataSave);
route.get("/display",stucontroller.studisplay)
route.post("/mysearch",stucontroller.mySearch)
route.post("/stusearch",stucontroller.stuSearch)
route.get("/searchbyquery",stucontroller.SearchByQuery)
route.post("/savecreate", stucontroller.SavaCreateData)

module.exports = route;