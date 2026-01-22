// const asynchandler()=>{}
// const asynchandler=(fn)=>{()=>{}}

//Promises
// const asyncHandler=(requestHandler)=>{(req,res,next) =>{
//     Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
// }}
// export {asyncHandler};  



//Try-Catch block is used to handle the errors in the asynchronous functions


const asynchandler=(fn)=>async(req,res,next)=>{
try{
    await fn(req,res,next)
}
catch(error){
    res.status(error.code || 500).json({
        success:false,
        message:error.message,
    })
}
}
export default asynchandler;