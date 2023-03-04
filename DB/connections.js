import mongoose from "mongoose";

export const connectionDb=async()=>{
    return await mongoose.connect(process.env.LOCALDBURI).then(result=>{
        console.log("connected db");
    }).catch(error=>{
        console.log("error");
    })
}