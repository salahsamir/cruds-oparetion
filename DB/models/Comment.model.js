import { Schema,model,Types } from "mongoose";
const commentschema=new Schema({
    desc:{
        type:String,
        required:true
    },
    userId:{
        type :Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})
export const Commentmodel=model('Comment',commentschema)