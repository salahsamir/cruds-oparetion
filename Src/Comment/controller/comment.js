
import {Commentmodel} from'../../../DB/models/Comment.model.js'
import {Usermodel} from '../../../DB/models/User.model.js'
export const getallcomment=async(req,res,next)=>{
    try {
        const comments=await Commentmodel.find({}).populate('userId')
// when i delete user from user collections userid in comment collection ==null ,for loop and if condition there to check if userid =null remove coments  user did
        for (let i = 0; i < comments.length; i++) {
            if(!comments[i].userId){
                comments.splice(i,1)
               i--
            }  
        }
        return res.json({message:"done",comments})
    } catch (error) {
        return res.json("fail")
    }
}
export const addcomment=async(req,res,next)=>{
    try {
        const{desc,userId}=req.body
        const user=await Usermodel.findById({_id: userId})
        if(!user){
            return res.json({message:"invalid-id"}) 
        }
        const comments=await Commentmodel.create({desc,userId})
        
        return res.json({message:"done",comments})
        
    } catch (error) {
        return error.message? res.json({message:"fail",error:error.message}):res.json({message:"error"})
    }
}
export const getcommentById=async(req,res,next)=>{
    try {
        const {_id}=req.params
        const comments=await Commentmodel.findById({_id})
        
        return comments? res.json({message:"done",comments}):res.json({message:"not exist"})
        
    } catch (error) {
        return res.json("fail")
    }
}
// export const deletecomment=async(req,res,next)=>{
//     try {
        
//         const {_id,userId}=req.query
//         const comments=await Commentmodel.deleteOne({_id,userId})
       
//         return comments.deletedCount? res.json({message:"done",comments}):res.json({message:"invalid id or userid"})
        
//     } catch (error) {
//         return res.json("fail")
//     }
// }
export const deletecomment=async(req,res,next)=>{
    try {
        
        const {_id,userId}=req.query
        const comments=await Commentmodel.findOneAndDelete({_id,userId})
       
        return comments? res.json({message:"done",comments}):res.json({message:"invalid id or userid"})
        
    } catch (error) {
        return res.json("fail")
    }
}
// export const updatecomment=async(req,res,next)=>{
//     try {
//         const {_id}=req.params
//         const{userId,desc}=req.body
//         const comments=await Commentmodel.findOneAndUpdate({_id,userId},{desc},{new:true})
//         return comments? res.json({message:"done",comments}): res.json({message:"invalid id or user id"})
        
//     } catch (error) {
//         return res.json({message:"fail",error})
//     }
// }
//
export const updatecomment=async(req,res,next)=>{
    try {
        const {_id}=req.params
        const{userId,desc}=req.body
        const comments=await Commentmodel.updateOne({_id,userId},{desc},{new:true})
        return comments.modifiedCount? res.json({message:"done",comments}): res.json({message:"invalid id or user id"})
        
    } catch (error) {
        return res.json({message:"fail",error})
    }
}
// find by id and update//find by id and delete >> x >>because nead userid and _id not only id