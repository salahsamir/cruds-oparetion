import { Usermodel } from "../../../DB/models/User.model.js"
import bcrypt from 'bcryptjs'
import { compare, hash } from "../../Utilits.js"
//sign up
export const singup=async(req,res,next)=>{
    try {
    const{Name,Email,password,age}=req.body
    const hashresult =hash({text:password})
    const user= await Usermodel.create({Name,Email,password:hashresult,age})

    return res.json({message:"done",user})
    } catch (error) {
        if(error.code==11000){
            return res.json({message:"email must be unique"})
        }
    return res.json({message:"error"})
    }
}
export const signin=async(req,res,next)=>{
   try {
    const {Email,password}=req.body
    // console.log(req.body);
    // const compareresult=bcrypt.compareSync(password,password)
    const compareresult=compare({text1:password,text2:password})
    const user=await Usermodel.findOne({Email,compareresult})
    return user? res.json({message:"done",user}):res.json({message:"in-valid email or password"})
   } catch (error) {
    return res.json({message:"error"})
   }
}