const express = require("express")
const app = express();

const middleware = require("./Middleware/middleware")
const datamiddleware = require("./Middleware/Date")
app.get("/",(req,res)=>{
    console.log("Home Page"+req.myclg);
    res.send("Welcome to Bhopal "+req.myclg)
})
app.get("/about",middleware,(req,res)=>{
      console.log("About Page ")
      console.log(("my obj : "+req.myclg))
      res.send("About Page "+ req.myclg)
})

app.get("/data",datamiddleware,(req,res)=>{
    console.log("Data Middle Ware ")
    res.send("Date Middleware "+req.requestTime)
})

app.listen(8000,()=>{
    console.log("Server Run On 8000")
})





// Middle ware Function and object

// const express = require("express")
// const app = express();

// const myname = (req,res,next)=>{
//        console.log("This is APpp  Level Middleware ");
//        req.name = "Aman Patel";
//        next();

// }

// app.use(myname);

// app.get("/",(req,res, next)=>{
//     console.log("Home Page");
//     console.log(req.name);
//     res.send("Hello Home Page :"+req.name);
//     next();
// })

// app.listen(8000,()=>{
//     console.log("Server run On 8000")
// })











// const express = require("express")
// const app = express();

// app.use("/",(req,res,next)=>{
//     console.log("This Middle ware always run ");

//     next();
// })
// app.get("/",(req,res,next)=>{
//     console.log("Home Console");
//     res.send("Home Page");
//     next();
// })
// app.get("/about",(req,res)=>{
//     console.log("About Page ");
//     res.send("Hello About PAge")
// })

// app.use("/",(req,res,next)=>{
//    console.log("Middle ware 1");
//    next();
// })
// app.get("/",(req,res)=>{
//     console.log("Middle ware 2");
  
// })

// app.listen(8000,()=>{
//     console.log("THis is Run on Port 8000")
// })