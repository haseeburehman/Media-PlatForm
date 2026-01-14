import mongoose from "mongoose";
import {DB_name} from "../constant.js";

const connection = async()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.Mongodb_URL}/${DB_name}`);
        console.log("Connected to MongoDB", `${connectionInstance.connection.host}`);
        return connectionInstance;
    }
    catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connection;