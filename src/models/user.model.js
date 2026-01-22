import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userschema = new mongoose.schema({
username:{
    required:[true,"Username is required"],
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,
},
email:{
    required:[true,"Email is required"],
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
},
password:{
    required:[true,"Password is required"],
    type:String,
    unique:true,
    // encrypted:true, //bcrypt
},
fullname:{
    type:string,
    trim:true,
    required:[true,"Fullname is required"],
    index:true,
},
avatar:{
type:String, //cloudaniry url  where we upload file image and get the url
required:[true,"Avatar is required"],
},
coverImage:{
type:String, //cloudaniry url  where we upload file image and get the url
required:[true,"Cover Image is required"],
},
watchHistory:[
    {
    type:Schema.Types.ObjectId,
    ref:"video",
    },
],
refreshToken:{
    type:String,
    required:[true,"Refresh Token is required"],
},
CreatedAt:{
    type:Date,
    default:Date.now,
    timestamp:true,
},
UpdatedAt:{
    type:Date,
    default:Date.now,
    timestamp:true,
}, 

role:{
}
},{timestamps:true});

export const user = mongoose.model("user",userschema);