import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    video:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video",
        
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
},{timestamps:true})



export const Playlist = mongoose.model("Playlist", playlistSchema)