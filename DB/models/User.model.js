import { Schema,model } from "mongoose";
import { Commentmodel } from "./Comment.model.js";
const userSchema=new Schema({
   Name:{
    type:String,
    required:true,
   },
   Email:{
    type:String,
    required:true,
    unique:true

   },
   password:{
    type:String,
    required:true}
    ,
    // age:{
    //     type:Number
    // }
    age:Number
   
},{
    timestamps:true
})
userSchema.pre('remove',async function(next){
   const user = this;
   Commentmodel.deleteMany({ userId: user._id }, function(err) {
    if (err) {
      return next(err);
    }
    next();
  });
        
    
})
export const Usermodel=model('User',userSchema)