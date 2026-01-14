// require("dotenv").config(); not best practise


import dotenv from "dotenv";
import connection from "./db/index.js";

dotenv.config({
    path:"./.env"
})

connection();




// import dotenv from "dotenv";
// import express from "express";

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.Mongodb_URL}/${DB_name}`);
//         console.log("Connected to MongoDB");
//         app.on("error",(error)=>{
//             console.log(error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log(error);
//     }
// })()