import mongoose from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2";
const vedioSchema= new mongoose.schema({
   vedioFile:{
    type:String, //cloudaniry url  where we upload file image and get the url
    required:[true,"Vedio File is required"],
   },
   thumbnail:{
    required:[true,"Thumbnail is required"],
    type:String, //cloudaniry url  where we upload file image and get the url
   },
   title:{
    type:String,
    required:[true,"Title is required"],
    trim:true,
    index:true,
   },
   description:{
    type:String,
    required:[true,"Description is required"],
    trim:true,
    index:true,
   },
   duration:{
    type:Number, 
    required:[true,"Duration is required"],
   },
   view:{
    type:Number,
    default:0,
   },
   isPublished:{
    type:Boolean,
    default:true,
   },
   owner:{
    type:Schema.Types.ObjectId,
    ref:"user",
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
},{timestamps:true});

vedioSchema.plugin(mongooseaggregatepaginate);

export const video = mongoose.model("video",vediSchema);