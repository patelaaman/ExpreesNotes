const myCollage = (req,res,next)=>{
    req.myclg = "Gayatri Vidya Mandir"  // object 
    console.log("My app have Middleware!!");
    next();
    
}
module.exports = myCollage;