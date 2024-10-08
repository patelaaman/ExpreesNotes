const myDate=(req,res,next)=>{
    req.requestTime = Date.now();
    next();
}

module.exports= myDate
